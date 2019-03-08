import React from 'react'

const Search = ({searchChange}) => {
	return(
		<input 
		type='search'
		placeholder='search robots'
		onChange = {searchChange}
		/>
	)
}

export default Search