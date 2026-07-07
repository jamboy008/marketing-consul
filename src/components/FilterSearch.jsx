import React from 'react'
import Input from './Input'
import Dropdow from './Dropdown'

function FilterSearch({ searchProd, setCatigoriy, searchCatigory }) {
	return (
		<section>
			<div className='center flex justify-between items-center'>
				<Input searchProd={searchProd} />
				<Dropdow setCatigoriy={setCatigoriy} searchCatigory={searchCatigory} />
			</div>
		</section>
	)
}

export default FilterSearch
