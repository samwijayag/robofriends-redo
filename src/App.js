import React from 'react'
import CardList from './CardList'
import {robots} from './Robots'
import Search from './Search'

const App = () => {
	return (
		<div>
			<h1> RoboFriends </h1>
			<Search />
			<CardList robots={robots}/>
		</div>
	)
}

export default App