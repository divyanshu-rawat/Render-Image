import React from 'react';
import ReactDOM from 'react-dom';
import {MaxHeightWidth} from './max_height_width';

class Dimension extends React.Component{

	constructor(props){
		super(props);
		this.state = {

		   org_dimension:
              { 
                    org_height: '',
                    org_width : ''
              },

            set_dimension:
              { 
                    set_height: '',
                    set_width : ''
              }
         };

		this.onImgLoad = this.onImgLoad.bind(this);
		this.handle_height_change = this.handle_height_change.bind(this);
        this.handle_width_change  = this.handle_width_change.bind(this);
	}

    onImgLoad({target:img}) {

        let image_attribute = img.getAttribute('id');

        this.setState({
        	org_dimension:Object.assign({}, { org_height: img.offsetHeight }, { org_width: img.offsetWidth })
        })
    }

    handle_height_change(event){

    	console.log('called');
        this.setState({
            set_dimension: Object.assign({}, this.state.set_dimension, { set_height: event.target.value })
        });
    }

    handle_width_change(event){
    	console.log('called');
         this.setState({
            set_dimension: Object.assign({},this.state.set_dimension,{ set_width: event.target.value })
         });
    }



	render(){

		const {org_dimension} = this.state;
		const {set_dimension} = this.state;

		console.log(org_dimension.org_height);

		let render_image = () => {

			if(org_dimension.org_height > set_dimension.set_height && org_dimension.org_width > set_dimension.set_width ){
	                 return( 
	                    <div className="_display_inline">
	                      <img src={this.props.src} height = {set_dimension.set_height} width = {set_dimension.set_width}/>
	                    </div>
	                  ) 
	            }

	            if(org_dimension.org_width > set_dimension.set_width || org_dimension.org_height > set_dimension.set_height){

	                if(org_dimension.org_width > set_dimension.set_width){
	                 return( 
	                    <div className="_display_inline">
	                      <img src={this.props.src} width = {set_dimension.set_width} />
	                    </div>
	                  ) 
	                }
	                else{
	                    return( 
	                      <div className="_display_inline" >
	                         <img src={this.props.src} height = {set_dimension.set_height}/>
	                      </div>
	                  ) 
	                }
	            }

	            else{
	                return( 
	                     <div className="">
		                   <img onLoad={this.onImgLoad} src={this.props.src} />
		                 </div>
	                  ) 
	            }
		}

		return(

			<div className ="">
			   <MaxHeightWidth handle_height_change = {this.handle_height_change} handle_width_change = {this.handle_width_change}/>
			   
			   {render_image()}
            </div>
		)
	}

}


export default Dimension;