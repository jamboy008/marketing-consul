import React from 'react'
import { products } from '../data/products'
import { v4 as uuidv4 } from 'uuid'
function Dropdown({ setCatigoriy, searchCatigory }) {
	let arr = [...new Set(products.map(item => item.category))]
	//  console.log(arr)
	return (
		<div className='dropdown dropdown-end'>
			<div tabIndex={0} role='button' className='btn m-1'>
				Catigories
			</div>
			<ul
				tabIndex='-1'
				className='dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm'
			>
				{arr.map(item => {
					return (
						<li key={uuidv4()} onClick={() => searchCatigory(item)}>
							<a>{item}</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Dropdown
