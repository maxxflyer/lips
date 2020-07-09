import React, { Component } from 'react'
import Loader from './../utils/loader';
import './css.css';

class Vpanel extends Component {
    render(){
        console.log("VPANEL")
        if(this.props.data[0][1]=="Group"){ 
       return( 
       <div id="strip">
           <div id="vpanel_left">
                <Loader data={this.props.data[1][0]}/>
           </div>
           <div id="vpanel_right">
                <Loader data={this.props.data[1][1]}/>
           </div>
        </div>
       )}else{
           return(
              <div>Expecting ["util","Group"] </div>
           )
       }
    }
    
     
}

export default Vpanel