import MainItem from './MainItem';
import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";

import tgdd from '../../../../images/tgdd.png'
import fpt from '../../../../images/fpt.png'
import hoangha from '../../../../images/hoangha.png'
import topzone from '../../../../images/topzone.png'
import viettel from '../../../../images/viettel.png'


function Main(props) {
    var arrayShop = ['TGDD','TZ','HH','VT','FPT']
    var listShop = [];
    var listItem = props.listItem;
    var mapImage = {
        'TGDD' : tgdd,
        'FPT' : fpt,
        'HH' : hoangha,
        'TZ' : topzone,
        'VT' : viettel
    };

    arrayShop.forEach(item => {
        if(listItem){
            var arr = listItem.filter(function(i){
                return i.store === item;
            })
            var obj = {};
            obj.img = mapImage[item];
            obj.name = item;
            obj.listItem = arr;
            listShop.push(obj)
        }
    });

    return (
        <div class="main">
            <div class="content">
                {   props.isLoad ? 
                    <div class="loader">
                        <BeatLoader color="#fff" size={30} />
                    </div>  
                    :
                    listShop ? listShop.map(item => {
                        return <MainItem handleDisplayPopup={props.handleDisplayPopup} store= {item.name} img={item.img} listItem={item.listItem} mainList={props.listItem}></MainItem>
                    }) : ''
                }
                
            </div>
        </div>
    );
}

export default Main;