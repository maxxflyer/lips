import React, { Component } from 'react'
import Minipanel from './../Minipanel/Minipanel';
import NFTdisplay from './../NFTdisplay/NFTdisplay';
import Web3 from 'web3';
import './css.css';
class NFT721contract extends Component {
    constructor(props) {
        super(props)
        this.state = { ipfs: '' , account: '' , thisM :[], count : 1, contract_page_count: 0}
        this.x=0
      }

      componentDidMount() {
        this.loadBlockchainData()
    }
    shouldComponentUpdate(){ //decidere flusso
        if(this.x++>6){return(false)}else{return(true)};  
    }

      async loadBlockchainData() {
          
          console.log("NFT721contract",this.props["data"])
        const nft = new web3.eth.Contract(ABI, this.props["data"][1][0]) 
        let supply = await nft.methods.totalSupply().call()
        console.log("SUPPLY      "+supply)
        let arra = [];
        if(supply>50)supply=50
        for(let i=1;i<supply;i++){
        arra.push(i);
        }
        this.setState({ thisM: arra , count : supply})
        
      }
         

        
    render(){ 
        //let name= (this.state.res)?JSON.parse(this.state.res)["name"]:null
        console.log("BOARD NOW-----------")
        console.log(this.state.thisM)
        if(this.state.thisM.length==0){
            if(this.state.count==0)
        return (<div id="board" style={{textAlign:"center", marginTop: "100px"}}><div id="address_line">{this.props.data[1]}</div><br/><br/><div id="empty">EMPTY</div></div>);
            if(this.state.count>0)
        return (<div id="board" style={{textAlign:"center", marginTop: "100px"}}>LOADING...</div>);
        }else{
        return (
             <Display updtLandscape={this.props.updtLandscape} numbers={this.state.thisM} prp={this.props["data"][1]}/>            
        ); }
    }
    
}
//const numbers = [1, 2, 3, 4, 5,6];

function Display (props)  {
    const ids = props.numbers;
    console.log(ids)
    const listItems = ids.map((number) =>
      <div key={number}><NFTdisplay updtLandscape={props.updtLandscape} contract={props.prp} id={number}/></div>
    );
    return (
      <div id="board">{listItems}</div>
    );
  }

  //{addMinipanel(8,"Test","black",200,200,"https://ipfs.io/ipfs/QmRNekayW6TyEMVnSAijFpyfCCBkCoVrV4SkfsAkqVnwjG")}
export function addMinipanel(id,name,col,wid,heig,ima){
    return(
    <Minipanel id={id} name={name} src={ima} color={col} width={wid} height={heig}/>
    )
}
        let ABI=[{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"checkOnERC721Received","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"forAll","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseApprovalEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseTransferEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        let ADDRESS="0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008"
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")


        

export default NFT721contract