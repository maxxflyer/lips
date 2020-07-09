import React from 'react'
import Strip from './../Strip/Strip';
import Top from './../Top/Top';
import Bar from './../Bar/Bar';
import Board from './../Board/Board';
import Canvas from './../Canvas/Canvas';
import Vpan from './../Vpanel/Vpanel';
import NFT721sheet from './../NFT721sheet/NFT721sheet';
import EmptyTop from './../EmptyTop/EmptyTop';
import NFT721contract from './../NFT721contract/NFT721contract';
import { render } from '@testing-library/react';

// enables/disables logs
let logs=false;
//test counter
let c=0;

function Loader(data_in){
    cons("LOADER")
    cons(data_in)
    const myJ=data_in["data"]
    cons(c++)

    let MyModule  = null;  
    if(data_in["data"][0][1]){
    if(myJ[0][1]==="Strip")MyModule=Strip;
    if(myJ[0][1]==="Board")MyModule=Board;
    if(myJ[0][1]==="Top")MyModule=Top;
    if(myJ[0][1]==="Bar")MyModule=Bar;
    if(myJ[0][1]==="Vpan")MyModule=Vpan;
    if(myJ[0][1]==="NFT721sheet")MyModule=NFT721sheet;
    if(myJ[0][1]==="NFT721contract")MyModule=NFT721contract;
    if(myJ[0][1]==="EmptyTop")MyModule=EmptyTop;
}
    cons("DATA FOUND NOW LOADING MODULE")
    return(
        <MyModule updtLandscape={data_in["updtLandscape"]} data = {myJ[1]} ></MyModule>
    ); 
}


export default Loader

function cons(str) {if(logs)console.log(str)}
