import React from 'react'

import ProductCard from './ProductCard'
function Products({ products }) {
	return (
		<section className='my-[100px] center'>
			<div className='center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]'>
				{products &&
					products.map(prod => {
						return <ProductCard key={prod.id} product={prod} />
					})}
			</div>
		</section>
	)
}

export default Products
