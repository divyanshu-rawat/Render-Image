


import React from 'react';
import ReactDOM from 'react-dom';
import Casey from '../Assests/casey.jpg';


class RenderImage extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			height: 360,
			width: 360
		}
	}

	render(){
		return(
			<div>
				<img src= {Casey} alt = "Nature Snapshot"  height = {this.state.heigh} width = {this.state.width}/>
			</div>
		)
	}
}

export default RenderImage;