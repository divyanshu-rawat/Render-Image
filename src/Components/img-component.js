


import React from 'react';
import ReactDOM from 'react-dom';
import Casey from '../Assests/prague-3540883_640.jpg';


class RenderImage extends React.Component{

	constructor(props) {
        super(props);
        this.state = {original_dimensions: {}, set_dimension: {}};
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    onImgLoad({target:img}) {
        this.setState({original_dimensions: { height: img.offsetHeight, width: img.offsetWidth }});
    }

    render(){
        const {width, height} = this.state.original_dimensions;
      
        return (
        	<div className = "container">

        	 <div className = "col-lg-3">
                <div className="form-group">
			      <label for="height">Height:</label>
			      <input type="text" className="form-control"/>
			    </div>
			    <div className="form-group">
			      <label for="width">Width:</label>
			      <input type="text" className="form-control"/>
			    </div>
			   </div>
			


                <h3>original_dimensions width{width}, height{height}</h3>
                <img onLoad={this.onImgLoad} src={Casey}/>

             </div>
        );
    }
}

export default RenderImage;