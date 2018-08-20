import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import {MaxHeightWidth} from './max_height_width';
import Casey from '../Assests/prague-3540883_640.jpg';
import Moon  from '../Assests/33841-7.jpg';

class RenderImage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            _image_dimension : [],
            set_dimension:
              { 
                    set_height: '',
                    set_width : ''
              }
         };

        this.onImgLoad            = this.onImgLoad.bind(this);
        this.handle_height_change = this.handle_height_change.bind(this);
        this.handle_width_change  = this.handle_width_change.bind(this);
     }

    onImgLoad({target:img}) {

        // console.log('image',img);
        // console.log(typeof(img.getAttribute('id')));

        let image_attribute = img.getAttribute('id');
        let image_url       = img.getAttribute('src');
        // console.log(image_url);

        let new_image_array = this.state._image_dimension.slice();    
        new_image_array.push(

              {
                'src':image_url,
                'key':image_attribute,
                 original_height: img.offsetHeight,
                 original_width : img.offsetWidth 
              }
        );   
        this.setState({_image_dimension:new_image_array})
    }

    handle_height_change(event){
        this.setState({
            set_dimension: Object.assign({}, this.state.set_dimension, { set_height: event.target.value })
            // original_dimensions: Object.assign({}, this.state.original_dimensions)
        });
    }

    handle_width_change(event){
         this.setState({
            set_dimension: Object.assign({},this.state.set_dimension,{ set_width: event.target.value })
            // _image_dimension : 
         });
    }

    render(){

        const Images_array = [Casey,Moon,Casey,Moon];      
        // console.log('original_dimensions',this.state.original_dimensions);
        // console.log('set_dimension',this.state);
        let render_image;
        let set_height = this.state.set_dimension.set_height;
        let set_width  = this.state.set_dimension.set_width;

        // console.log(this.state._image_dimension);

        if(this.state._image_dimension.length >= Images_array.length){
            render_image = this.state._image_dimension.map((logo,key)  => {

            if(logo.original_height < set_height && logo.original_width < set_width ){
                 return( 
                    <div className="_display_inline" key = {key}>
                      <img src={logo.src} height = {set_height} width = {set_width}/>
                    </div>
                  ) 
            }

            if(logo.original_width < set_width || logo.original_height < set_height){

                if(logo.original_width < set_width){
                 return( 
                    <div className="_display_inline" key = {key}>
                      <img src={logo.src} width = {set_width} height = {logo.original_height}/>
                    </div>
                  ) 
                }
                else{
                    return( 
                      <div className="_display_inline" key = {key}>
                         <img src={logo.src} width = {logo.original_width} height = {set_height}/>
                      </div>
                  ) 
                }

            }
            else{
                return( 
                    <div className="_display_inline" key = {key}>
                      <img src={logo.src} />
                    </div>
                  ) 
            }


         })
        }
        else{
             render_image = Images_array.map( (logo,key)  => {
             return( 
                <div className="_display_inline" key = {key}>
                  <img onLoad={this.onImgLoad} src={logo} id = {key}/>
                </div>
              )
         })
        }
        
        return (
            <div>
                <MaxHeightWidth render_image = {render_image} handle_height_change = {this.handle_height_change} handle_width_change = {this.handle_width_change}/>
            </div>
        );
    }
}

export default RenderImage;

