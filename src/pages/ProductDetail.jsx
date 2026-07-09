import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

function ProductDetail() {
	const { id } = useParams()
	const navigate = useNavigate()
	const { addToCart } = useCart()
	const [qty, setQty] = useState(1)

	const product = products.find(item => item.id === Number(id))

	if (!product) {
		return (
			<>
				<Header />
				<section className='center min-h-[50vh] flex flex-col items-center justify-center gap-4'>
					<h2 className='text-2xl font-bold'>Mahsulot topilmadi</h2>
					<Link to='/' className='btn btn-primary'>
						Bosh sahifaga qaytish
					</Link>
				</section>
				<Footer />
			</>
		)
	}

	const {
		name,
		category,
		brand,
		price,
		discount,
		quantity,
		rating,
		reviews,
		color,
		memory,
		warranty,
		status,
		image,
		description,
	} = product

	const discountedPrice = Math.floor(price - (price * discount) / 100)

	function handleAddToCart() {
		for (let i = 0; i < qty; i++) {
			addToCart(product)
		}
	}

	return (
		<>
			<Header />
			<section className='center my-[60px]'>
				<button onClick={() => navigate(-1)} className='btn btn-ghost mb-6'>
					← Ortga
				</button>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
					<div className='bg-base-200 rounded-2xl overflow-hidden h-[420px]'>
						<img
							src={image}
							alt={name}
							className='w-full h-full object-cover'
						/>
					</div>

					<div className='flex flex-col gap-4'>
						<div className='flex items-center justify-between'>
							<span className='badge badge-primary'>{category}</span>
							<span
								className={`badge ${
									status === 'Mavjud' ? 'badge-success' : 'badge-error'
								}`}
							>
								{status}
							</span>
						</div>

						<h1 className='text-3xl font-bold'>{name}</h1>
						<p className='opacity-70'>{brand}</p>

						<div className='flex items-center gap-2 text-sm'>
							⭐️ {rating}
							<span className='opacity-60'>({reviews} reviews)</span>
						</div>

						<div>
							<p className='text-3xl font-bold text-primary'>
								{discountedPrice.toLocaleString()} so'm
							</p>
							{discount > 0 && (
								<div className='flex items-center gap-2 mt-1'>
									<p className='line-through opacity-50'>
										{price.toLocaleString()} so'm
									</p>
									<span className='badge badge-error'>-{discount}%</span>
								</div>
							)}
						</div>

						<div className='divider'></div>

						<ul className='grid grid-cols-2 gap-2 text-sm'>
							{color && (
								<li>
									<span className='opacity-60'>Rang:</span> {color}
								</li>
							)}
							{memory && (
								<li>
									<span className='opacity-60'>Xotira:</span> {memory}
								</li>
							)}
							{warranty && (
								<li>
									<span className='opacity-60'>Kafolat:</span> {warranty}
								</li>
							)}
							<li>
								<span className='opacity-60'>Omborda:</span> {quantity} ta
							</li>
						</ul>

						{description && (
							<p className='opacity-80 leading-relaxed'>{description}</p>
						)}

						<div className='divider'></div>

						<div className='flex items-center gap-4'>
							<div className='join'>
								<button
									className='btn join-item'
									onClick={() => setQty(prev => Math.max(1, prev - 1))}
								>
									−
								</button>
								<span className='btn join-item pointer-events-none'>{qty}</span>
								<button
									className='btn join-item'
									onClick={() => setQty(prev => Math.min(quantity, prev + 1))}
								>
									+
								</button>
							</div>

							<div className='flex-1'>
								<Button
									text={"Savatchaga qo'shish"}
									variant={'primary'}
									onClick={handleAddToCart}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default ProductDetail
