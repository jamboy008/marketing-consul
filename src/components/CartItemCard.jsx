import React from 'react'
import { useCart } from '../context/CartContext'

function CartItemCard({ item }) {
	const { increment, decrement, removeFromCart } = useCart()
	const discountedPrice = Math.floor(
		item.price - (item.price * item.discount) / 100,
	)

	return (
		<div className='card card-side bg-base-100 shadow-sm border border-base-200'>
			<figure className='w-24 h-24 shrink-0'>
				<img
					src={item.image}
					alt={item.name}
					className='w-full h-full object-cover'
				/>
			</figure>

			<div className='card-body p-3 gap-1'>
				<div className='flex items-start justify-between gap-2'>
					<h3 className='font-semibold text-sm leading-tight'>{item.name}</h3>
					{item.discount > 0 && (
						<span className='badge badge-error badge-sm shrink-0'>
							-{item.discount}%
						</span>
					)}
				</div>

				<div className='flex items-center gap-2'>
					<span className='text-primary font-bold text-sm'>
						{discountedPrice.toLocaleString()} so'm
					</span>
					{item.discount > 0 && (
						<span className='text-xs line-through opacity-50'>
							{item.price.toLocaleString()} so'm
						</span>
					)}
				</div>

				<div className='flex items-center justify-between mt-1'>
					<div className='join'>
						<button
							className='btn btn-xs join-item'
							onClick={() => decrement(item.id)}
							aria-label='Kamaytirish'
						>
							−
						</button>
						<span className='btn btn-xs join-item pointer-events-none'>
							{item.quantity}
						</span>
						<button
							className='btn btn-xs join-item'
							onClick={() => increment(item.id)}
							aria-label='Oshirish'
						>
							+
						</button>
					</div>

					<button
						className='btn btn-ghost btn-xs text-error'
						onClick={() => removeFromCart(item.id)}
					>
						O'chirish
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItemCard
