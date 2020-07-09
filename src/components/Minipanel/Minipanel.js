import React, { Component } from 'react'
import './css.css';

class Minipanel extends Component {
   constructor(props) {
      super(props)

      this.state = { link: props.contract }
    }
    
    render(){
       return(
       <div className="minipanel"  id={`minipanel_${this.props.id}`} ttt="1" onClick={() => {window.open('?data='+this.props.contract+"&id="+this.props.id);}} width={this.props.width} style={setPanel(this.props.width,this.props.height,this.props.color)}>
          <img className="nft_image" alt="minipanel" src={this.props.src} style={setStyle(this.props.width,this.props.height,this.props.color)}/>
          <div id="info_nft" className="info_panel" style={setStyle(this.props.width,this.props.height,this.props.color)}>{this.props.name}</div>
        </div>
       );
    }
 
      
}


function setStyle(wid,hei,col){
   let style = { background : col, width : wid, height : hei}
   return(style)
}
function setPanel(wid,hei,col){
   let style = { background : col, border: `solid 5px ${col}`, width : wid, height : hei}
   return(style)
}


export default Minipanel