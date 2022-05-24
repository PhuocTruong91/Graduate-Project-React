import MainItem from './MainItem';
import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

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
            <div class="input">
                <input id="searchInput" name="search" type="text"/>
                <svg onClick={props.getListByName} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.68571 0C8.45888 0 10.1594 0.704386 11.4132 1.9582C12.667 3.21202 13.3714 4.91255 13.3714 6.68571C13.3714 8.34171 12.7646 9.864 11.7669 11.0366L12.0446 11.3143H12.8571L18 16.4571L16.4571 18L11.3143 12.8571V12.0446L11.0366 11.7669C9.82342 12.8024 8.28073 13.3713 6.68571 13.3714C4.91255 13.3714 3.21202 12.667 1.9582 11.4132C0.704386 10.1594 0 8.45888 0 6.68571C0 4.91255 0.704386 3.21202 1.9582 1.9582C3.21202 0.704386 4.91255 0 6.68571 0V0ZM6.68571 2.05714C4.11429 2.05714 2.05714 4.11429 2.05714 6.68571C2.05714 9.25714 4.11429 11.3143 6.68571 11.3143C9.25714 11.3143 11.3143 9.25714 11.3143 6.68571C11.3143 4.11429 9.25714 2.05714 6.68571 2.05714Z" fill="#B3B4B5"/>
                </svg>
            </div>
            <div class="content">
                {   props.isLoad ? 
                    <div class="loader">
                        <ClipLoader color="#0066FF" size={70} />
                    </div>  
                    :
                    listShop ? listShop.map(item => {
                        return <MainItem store= {item.name} img={item.img} listItem={item.listItem}></MainItem>
                    }) : ''
                }
                
            </div>
        </div>
    );
}

export default Main;