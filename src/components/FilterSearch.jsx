import React from 'react'
import Input from './Input'
import Dropdown from './Dropdown'

function FilterSearch({ searchProd, setCatigoriy, searchCatigory }) {
	return (
		<section>
			<div className='center flex justify-between items-center'>
				<Input searchProd={searchProd} />
				<Dropdown setCatigoriy={setCatigoriy} searchCatigory={searchCatigory} />
			</div>
		</section>
	)
}

export default FilterSearch
