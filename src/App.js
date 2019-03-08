import React, {Component} from 'react'
import CardList from './CardList'
import Search from './Search'


class App extends Component{
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json()
		})
		.then(users => {
			this.setState({robots: users})
		})
		
	}

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})	
		if (this.state.robots.length === 0) {
			return <h1>Loading</h1>
		}else{
			return (
				<div className='tc'>
					<h1> RoboFriends </h1>
					<Search searchChange= {this.onSearchChange}/>
					<CardList robots={filteredRobots}/>
				</div>
			)
		}
	}
}

export default App