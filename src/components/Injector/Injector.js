import React from 'react'
import Landscape from './../Landscape/Landscape';
import Web3 from 'web3'

    //let ABI=[{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"checkOnERC721Received","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"forAll","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseApprovalEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseTransferEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    //let ADDRESS="0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008"
    //const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    //const nft = new web3.eth.Contract(ABI, ADDRESS)
let logs=true; 

const Injector = (props) => {
    cons(props)
     
    let NFT721contract='[["lips","Strip"],[["group"],[[["lips","Top"],{1},[1]],[["lips","Bar"],{2},[1]],[["lips","NFT721contract"],{3},[]]],[]],[]]';
    let singleNFT='[["lips","Strip"],[["group"],[[["lips","EmptyTop"],[],[]],[["lips","Bar"],{2},[]],[["lips","NFT721sheet"],{3},[]]],[]],[]]';
    let template='[["lips","Strip"],[["group"],[[["lips","Top"],{1},[]],[["lips","Bar"],{2},[]],[["lips","Board"],{3},[]]],[]],[]]';
    let url = new URL(window.location.href);
    let etra ="0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008";
    let def_avatar = '[["721"],["0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008"],[24]]';

    //if lips page
    if(url.searchParams.get('page')){} 

    //if lips.eth 
    if(window.location.href==="lips.eth"){}

    //if no template is available use standard
    if(url.searchParams.get('template')){template=url.searchParams.get('template')}

    //inject data/address to template
    if(url.searchParams.get('addr')){
        //check metadata
        //let ipfs_M=await LipsMeta.methods.LipsMetaData(url.searchParams.get('addr')).call()
        //if(ipfs_M.length>0){
        //    fetch(ipfs_M)
        //    .then(response => response.json())
        //    .then(json => {if(json.type=="meta")return(json.attributes.layout);});   
        //}else{
        cons("INJECTOR >>>>>> ",template)  


            //no ID no NFT
        if((!url.searchParams.get('id'))&&(!url.searchParams.get('nft'))){
            let addr=def_avatar;  
            template=template.split("{1}").join(addr); 
            addr='[["package"],'+def_avatar+',["'+etra+'"]]';
            template=template.split("{2}").join(addr);
            addr='[["package"],["'+url.searchParams.get('addr')+'"],["'+etra+'"]]';
            template=template.split("{3}").join(addr);
        }
        //yes ID no NFT
        if((url.searchParams.get('id'))&&(!url.searchParams.get('nft'))){
            let addr="";
            //TOP
            let id=url.searchParams.get('id');
            let t_nft;
            let t_id=url.searchParams.get('id')
            let t_addr;
            if(id.includes("/")){
                t_nft=id.substring(0,id.indexOf("/"));
                t_id=id.substring(id.indexOf("/")+1);          
                t_addr='[["721"],["'+t_nft+'"],["'+t_id+'"]]';
              }else{
                t_addr='[["721"],["'+etra+'"],["'+id+'"]]';  
              } 
            template=template.split("{1}").join(t_addr);
            //BAR
            addr='[["package"],'+t_addr+',["'+etra+'"]]';          
            template=template.split("{2}").join(addr);
            //BOARD
            addr='[["package"],["'+url.searchParams.get('addr')+'"],["'+etra+'"]]';
            template=template.split("{3}").join(addr);
        }
        //no ID yes NFT
        if((!url.searchParams.get('id'))&&(url.searchParams.get('nft'))){
            let addr=def_avatar;
            template=template.split("{1}").join(addr); 
            addr='[["package"],'+def_avatar+',["'+url.searchParams.get('nft')+'"]]';           
            template=template.split("{2}").join(addr);
            addr='[["package"],["'+url.searchParams.get('addr')+'"],["'+url.searchParams.get('nft')+'"]]';
            template=template.split("{3}").join(addr);
        }
        //yes ID yes NFT
        if((url.searchParams.get('id'))&&(url.searchParams.get('nft'))){

            let addr="";
            //TOP
            let id=url.searchParams.get('id');
            let t_nft;
            let t_id
            if(id.includes("/")){
                t_nft=id.substring(0,id.indexOf("/"));
                t_id=id.substring(id.indexOf("/")+1);          
                addr='[["721"],["'+t_nft+'"],["'+t_id+'"]]';
              }else{
                addr='[["721"],["'+etra+'"],["'+id+'"]]';  
              } 
            template=template.split("{1}").join(addr);
            //BAR
            let t_nft2=url.searchParams.get('nft');
            addr='[["package"],[["721"],["'+t_nft+'"],["'+t_id+'"]],["'+t_nft2+'"]]';
            template=template.split("{2}").join(addr);
            //BOARD
            if(t_nft2.includes(","))t_nft2=t_nft2.split(",")[0]
            addr='[["package"],["'+url.searchParams.get('addr')+'"],["'+t_nft2+'"]]';
            template=template.split("{3}").join(addr);
        }

     
       
    }

    if(url.searchParams.get('data')){
        cons("FOUND DATA",template)
        let id=1
        let data=url.searchParams.get('data')
        let dat
        //let t=JSON.parse(data)
        //[["lips","inject"],[[a],[b]]]

        //NO ID
        if(!url.searchParams.get('id')){

            template=NFT721contract
            //TOP
            dat='[["721"],["'+data+'"],["1"]]';
            template=template.split("{1}").join(dat);
            //BAR
            dat='[["package"],'+dat+',["1"]]'; 
            template=template.split("{2}").join(dat);
            //NFT721contract
            dat='[["721"],["'+data+'"],[]]';
            template=template.split("{3}").join(dat);
        }else{
        //YES ID
            
            let id=url.searchParams.get('id')
            template=singleNFT
            //TOP
            dat='[["721"],["'+data+'"],["'+id+'"]]';            
            template=template.split("{1}").join(dat);
            //BAR
            dat='[["package"],'+dat+',["'+id+'"]]';          
            template=template.split("{2}").join(dat);
            //NFT721sheet
            dat='[["721"],["'+data+'"],[]]';
            template=template.split("{3}").join(dat);
        }
          
      cons("MEGA VVVVVVVVVVV",template);
        //in case data=[group]
        if(dat[0]=="["){
            if((JSON.parse(dat)[0][1]=="inject")||(JSON.parse(dat)[0][0]=="group"))
                for(let i=1;i<JSON.parse(dat)[1].length+1;i++){
                    cons(JSON.parse(dat)[1][i-1]);
                    template=template.split("{"+i+"}").join(JSON.stringify(JSON.parse(dat)[1][i-1]));
                    cons(template)
                }
        }else{
        
        dat='[["eth","data"],"'+dat+'",["'+id+'"]]';
        for(let i=1;i<33;i++)template=template.split("{"+i+"}").join(dat);
    }
    }


    //console.log("a")

    //Injects template into console
    props.updtBC(template)
    cons("INJECTOR COMPLETE",template)
    let data_in=JSON.parse(template);
    //console.log("b")
    
    return(
        <>
        <Landscape data = {data_in} ></Landscape>
        </>
    ); 

        //let ABI=[{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"checkOnERC721Received","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"forAll","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseApprovalEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseTransferEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        //let ADDRESS="0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008"
        //const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
        //const LipsMeta = new web3.eth.Contract(ABI, ADDRESS) 
    
}
 

function cons(str,str2) {if(logs)console.log(str,str2)}

//function loadChain(){
//   const res = nft.methods.tokenURI(5).call()
 //   console.log(res);
//    return(res);
//}

//lips
//lips.eth
//
//basic call
//lips.eth?load=[[what],[data],[template]]
//
//page
//lips.eth?page=1
//
//basic sintagm
//[[what],[data],[view]]
//
//extended
//[  [w]  ,  [data]  ,  [[w],[template_data],[]]  ]
//
//static content
//[  [w]  ,  []  ,  [[w],[static_content],[]]  ]
//
//data is copied to layout content
//[  [w]  ,  [a]  ,  [[w],{a},[]]  ]
//
//data is copied to layout
//[  [w]  ,  [[a],[b],[c]]  ,  [[w],{a}{b}{c},[]]  ]
//[  [w]  ,  [[a],[b],[c]]  ,  [[w{b}],{a}{b}{c},[{a}]]  ]
//
//a,b,c,...h
//[["lips","inject"],[[a],[b],[c]],[]]
//[["lips","inject"],[[a],[b],[c]]]
//[["lips","inject"],[[a],[b]]]
//[["lips","inject"],[a]] //this is correct
//
//example
//[["lips","account"],[["eth","addr"],"0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008",[]],[["lips","Strip"],[["util","Group"],[[["lips","Top"],{1},[]],[["lips","Bar"],{1},[]],[["lips","Board"],{1},[]]],[]],[]]]
//?data=[["lips","inject"],[[["eth","addr"],"0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008",[]],[["eth","addr"],"0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008",[]]]]&template=[["lips","Strip"],[["util","Group"],[[["lips","Top"],{1},[]],[["lips","Bar"],{2},[]],[["lips","Board"],[["eth","addr"],"0x2B9C770Ee37b9193faac8fBFc4b78635DdedB175",[]],[]]],[]],[]]
//
//informal
//addr=0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008&template=[["lips","Strip"],[["util","Group"],[[["lips","Top"],{c},[]],[["lips","Bar"],{c},[]],[["lips","Board"],{c},[]]],[]],[]]
//addr=0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008&template=[["lips","Strip"],[["util","Group"],[[["lips","Top"],{c},[]],[["lips","Bar"],{c},[]],[["lips","Board"],["eth","addr"],"0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008",[]],[]]],[]],[]]
//
//informal or data or address (address needs compiling)
//addr=0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008&template=[["custom","Layout_115"],{c},[]]
//data=[["eth","addr"],"0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008",[]]&template=[["custom","Layout_115"],{c},[]]
//
//inspects only the first item of the factory
//?addr=0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008&id=1
//
//inspects only the items produces by the factory
//?addr=0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008&id=all
//
//inspects only the items of a factory as account
//?addr=0xA0A5bb7B563461A586C1bd6D635Ba9Fde7315008&id=none



export default Injector