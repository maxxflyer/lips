import React, { Component } from 'react'

import Lipshead from './../Lipshead/Lipshead';
import Loader from './../utils/loader';
import './css.css';
class Landscape extends Component {
    constructor(props) {
        super(props)
        this.state = { landscape: ''}
        this.updateLandscape = this.updateLandscape
      }


      updateLandscape = (image) => {this.setState({ landscape : image })}

    render(){
        return ( 
        <div id="bg"> 
            <div id="bg2"  style={{backgroundImage :  `url(${this.state.landscape})` ,  opacity : 1 ,  zIndex : 0}}>
            <Lipshead ></Lipshead>              
            <Loader updtLandscape={this.updateLandscape} data={this.props.data} />
            </div>
        </div> ); 
    }
}



//  [
//    ["lips","Strip"],
//    [ 
//      ["util","Group"],
//      [
//        [["eth","721"],"0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008",[4]],
//        [["eth","721"],"0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008",[5]],
//        [["eth","721"],"0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008",[3,6,5,8,14]]
//      ],
//      []
//    ],
//    []
//  ]
//[["lips","Strip"],[["util","Group"],[[["lips","Top"],[["eth","721"],"0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008",[5]],[]],[["lips","Bar"],[["eth","721"],"0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008",[5]],[]],[["lips","Board"],[["eth","721"],"0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008",[5,6,4,3]],[]]],[]],[]]

//lips.eth?addr=0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008&data=[["lips","Strip"],[["util","Group"],[[["lips","Top"],{c},[]],[["lips","Bar"],{c},[]],[["lips","Board"],{c},[]]],[]],[]]

//[["lips","account"],[["eth","addr"],"0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008",[]],[["lips","Strip"],[["util","Group"],[[["lips","Top"],{c},[]],[["lips","Bar"],{c},[]],[["lips","Board"],{c},[]]],[]],[]]]


export default Landscape