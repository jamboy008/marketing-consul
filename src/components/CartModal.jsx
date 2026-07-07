import React from "react";
import { useCart } from "../context/CartContext";
import CartItemCard from "./CartItemCard";

function CartModal({ isOpen, onClose }) {
  const { cart, totalCount, totalSum } = useCart();

 return (
		<dialog
			className={`modal modal-top sm:modal-middle ${isOpen ? 'modal-open' : ''}`}
		>
			<div className='modal-box max-w-md'>
				<div className='flex items-center justify-between mb-3'>
					<h3 className='font-bold text-lg'>
						Savatcha
						{totalCount > 0 && (
							<span className='text-sm font-normal opacity-60'>
								{' '}
								· {totalCount} ta mahsulot
							</span>
						)}
					</h3>
					<button
						className='btn btn-sm btn-circle btn-ghost'
						onClick={onClose}
						aria-label='Yopish'
					>
						✕
					</button>
				</div>

				{cart.length === 0 ? (
					<p className='text-center opacity-60 py-10 text-sm'>
						Savatcha bo'sh. Mahsulot qo'shish uchun "buy" tugmasini bosing.
					</p>
				) : (
					<>
						<div className='flex flex-col gap-3 max-h-96 overflow-y-auto pr-1'>
							{cart.map(item => (
								<CartItemCard key={item.id} item={item} />
							))}
						</div>

						<div className='divider my-3'></div>

						<div className='flex items-center justify-between mb-3'>
							<span className='opacity-70 text-sm'>Jami summa</span>
							<span className='font-bold text-lg text-primary'>
								{Math.floor(totalSum).toLocaleString()} so'm
							</span>
						</div>

						<div className='modal-action mt-0'>
							<button className='btn btn-primary btn-block'>
								Buyurtmani rasmiylashtirish
							</button>
						</div>
					</>
				)}
			</div>

			<form method='dialog' className='modal-backdrop' onClick={onClose}>
				<button>close</button>
			</form>
		</dialog>
 )
}

export default CartModal;