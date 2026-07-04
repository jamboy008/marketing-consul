import React, { useState } from 'react'
import { products } from '../data/products'
import Products from './Products'
import FilterSearch from './FilterSearch'

function Main() {
	const [data, setData] = useState(products)
	let [catigory, setCatigoriy] = useState('')
	console.log(catigory)

	function searchProd(value) {
		if (value === '') {
			setData(products)
			return
		}

		const result = products.filter(item =>
			item.name.toLowerCase().includes(value.toLowerCase()),
		)

		setData(result)
	}

	function searchCatigory(category) {
		setCatigoriy(category)

		const result = products.filter(
			item => item.category.toLowerCase() === category.toLowerCase(),
		)

		setData(result)
	}
	return (
		<>
			<FilterSearch
				searchProd={searchProd}
				setCatigoriy={setCatigoriy}
				searchCatigory={searchCatigory}
			/>
			<Products products={data} />
		</>
	)
}

export default Main
