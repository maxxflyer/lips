import React, { Component } from 'react'
import Top from './../Top/Top';
import Bar from './../Bar/Bar';
import Board from './../Board/Board';
import Loader from './../utils/loader';
import './css.css';

let logs=false;

class Strip extends Component {
    super(props){}

    render(){
        cons("STRIP")
        cons(this.props.data)
        if(this.props.data[0][0]=="group"){
       return( 
       <div id="strip">
           <Loader updtLandscape={this.props.updtLandscape} data={this.props.data[1][0]}/>
           <Loader updtLandscape={this.props.updtLandscape} data={this.props.data[1][1]}></Loader>
           <Loader updtLandscape={this.props.updtLandscape} data={this.props.data[1][2]}></Loader>
           <div className="spacer">&nbsp;</div>
        </div>
       )}else{
           return(
              <div>Expecting ["group"] </div>
           )}
       
    }
    
     
}

export default Strip
function cons(str) {if(logs)console.log(str)}