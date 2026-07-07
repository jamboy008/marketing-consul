import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
	const [cart, setCart] = useState([])

	// Mahsulotni savatchaga qo'shish. Agar mahsulot allaqachon savatchada
	// bo'lsa, faqat uning quantity (soni) 1 taga oshadi.
	function addToCart(product) {
		setCart(prev => {
			const existing = prev.find(item => item.id === product.id)
			if (existing) {
				return prev.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				)
			}
			return [...prev, { ...product, quantity: 1 }]
		})
	}

	function increment(id) {
		setCart(prev =>
			prev.map(item =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
			),
		)
	}

	function decrement(id) {
		setCart(prev =>
			prev
				.map(item =>
					item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
				)
				.filter(item => item.quantity > 0),
		)
	}

	function removeFromCart(id) {
		setCart(prev => prev.filter(item => item.id !== id))
	}

	const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0)
	const totalSum = cart.reduce((sum, item) => {
		const discounted = item.price - (item.price * item.discount) / 100
		return sum + discounted * item.quantity
	}, 0)

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				increment,
				decrement,
				removeFromCart,
				totalCount,
				totalSum,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export function useCart() {
	const ctx = useContext(CartContext)
	if (!ctx) {
		throw new Error('useCart faqat CartProvider ichida ishlatilishi kerak')
	}
	return ctx
}
