import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import {MaxHeightWidth} from './max_height_width';

import Dimension from './Image_dimension';
import Casey from '../Assests/prague-3540883_640.jpg';
import Moon  from '../Assests/33841-7.jpg';
import city  from '../Assests/tianjin-2185510_1280.jpg';

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

     }

 

    render(){

        const Images_array = [Casey,Moon,Casey,Moon];

         let render_Image = Images_array.map((logo,key)  => {
             return( 
                <div className ="_display_inline"> 
                    <Dimension src = {logo} id = {key}/>
                </div>
              )
         })
        
        return (
            <div className = ""> 
                {render_Image}
            </div>
        );
    }
}

export default RenderImage;

