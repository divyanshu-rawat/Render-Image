


import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Casey from '../Assests/prague-3540883_640.jpg';


class RenderImage extends React.Component{

	constructor(props) {

        super(props);
        this.state 			      = {original_dimensions: {original_height: '', original_width: ''}, set_dimension: { set_height: '', set_width: ''}};
        this.onImgLoad     		  = this.onImgLoad.bind(this);
        this.handle_height_change = this.handle_height_change.bind(this);
        this.handle_width_change  = this.handle_width_change.bind(this);

     }

    onImgLoad({target:img}) {
        this.setState({original_dimensions: { original_height: img.offsetHeight, original_width: img.offsetWidth }});
    }


	handle_height_change(event){
		this.setState({
		    set_dimension :{ set_height : event.target.value }
		})
	}
	handle_width_change(event){
		this.setState({
		    set_dimension :{ set_width : event.target.value }
		})
	}



    render(){
        let {original_width, original_height} = this.state.original_dimensions;
        let {set_width, set_height} = this.state.set_dimension;

        let final_height = original_height;
        let final_width  = original_width;

        console.log('wow',this.state);
        console.log(this);

        if(original_width >= set_width || original_height >= set_height ){

        	final_height = set_height;
        	final_width  = set_width;
        }

        const Images_array = [Casey,Casey,Casey,Casey];
        let _html = Images_array.map( (logo,key)  =>{

        return(
           <div className="_display_inline" key = {key}>
                  <img onLoad={this.onImgLoad} src={logo} height = {final_height} width = {final_width}/>
            </div>
        )
      })


      
        return (
        	<div className = "">

        	<form className="form-inline _margin_top"> 
                <div className="form-group">
			      <label htmlFor="height">maxImageHeight:</label>
			      <input type="text" className="form-control" onChange = {this.handle_height_change} />
			    </div>

			    <div className="form-group _margin_right">
			      <label htmlFor="width">maxImageWidthh:</label>
			      <input type="text" className="form-control" onChange = {this.handle_width_change}/>
			    </div>
		
			</form>
             <div className = "">
                {_html}
             </div>

             </div>
        );
    }
}

export default RenderImage;




  // <p>original_dimensions original_width {original_width}, original_height {original_height}</p>
  //               <p> set_dimension set_width {set_width}, set_height {set_height}  </p>