import React from 'react';

import Side from './components/Side'
import Main from './components/Main'
import BookPopup from './components/BookPopup'
import { getItem, getItemByName } from '../../../controller';
import '../../../css/home.scss';

function Home() {
    var [listItem, setListItem] = React.useState([]);
    var [tempList, setTempList] = React.useState([]);
    var [isLoad, setIsload] = React.useState(false);
    var [displayPopup, setDisplayPopup] = React.useState(false);
    
    // React.useEffect(function (){
    //     document.getElementById('label').addEventListener('click', function(){
    //         var value = document.getElementById('searchBanner').value;
    //         getListByName(value, 'banner');
    //     })
    // })
    function handleSearchBanner(){
        var value = document.getElementById('searchBanner').value;
        getListByName(value, 'banner');
    }
  
    function getListCate(data,type){
        var listPrice = document.getElementsByName('price');
        var listCate = document.getElementsByName('cate');
        var checkedPrice = [];
        var checkedCate = [];
       
        //add checked item into 1 array
        for (let i = 0; i < listPrice.length; i++) {
            if(listPrice[i].checked){
                checkedPrice.push(listPrice[i].value);
            }
        }
        for (let i = 0; i < listCate.length; i++) {
            if(listCate[i].checked){
                checkedCate.push(listCate[i].value);
            }
        }

        var temp = tempList.filter(function (item){
            if(checkedCate.includes('all')){
                if(checkedPrice.includes('all')){
                    return item;
                }else{
                    if(checkedPrice.length !== 0){
                        for (let index = 0; index < checkedPrice.length; index++) {
                            const priceItem = checkedPrice[index];
                            var tempItem = priceItem.split('-');
                            var priceStart = tempItem[0];
                            var priceEnd = tempItem[1];
                            if(item.price >= priceStart && item.price <= priceEnd) return item;
                        }
                    }else{
                        return item;
                    }
                }
            }else if(checkedPrice.includes('all')){
                return checkedCate.includes(item.category);
            }else{
                if(checkedCate.length === 0){
                    for (let index = 0; index < checkedPrice.length; index++) {
                        const priceItem = checkedPrice[index];
                        var tempItem = priceItem.split('-');
                        var priceStart = tempItem[0];
                        var priceEnd = tempItem[1];
                        if(item.price >= priceStart && item.price <= priceEnd) return item;
                    }
                }else if(checkedPrice.length === 0 ){
                    return checkedCate.includes(item.category)
                }else{
                    for (let index = 0; index < checkedPrice.length; index++) {
                        const priceItem = checkedPrice[index];
                        var tempItem = priceItem.split('-');
                        var priceStart = tempItem[0];
                        var priceEnd = tempItem[1];
                        if(item.price >= priceStart && item.price <= priceEnd && checkedCate.includes(item.category)) return item;
                    }
                }
            }
        })

        setListItem(temp);
    }

    function getListByName(value) {
        setIsload(true);
        getItemByName(value)
            .then(res =>{
                setListItem(res, [])
                setTempList(res, [])
                setIsload(false);
                window.scrollTo({
                    top:'869',
                    behavior:'smooth'
                });
            })
            .catch( err =>{
                console.log(err);
                setIsload(false);
                window.scrollTo({
                    top:'869',
                    behavior:'smooth'
                });
        });
    }  

    function handleDisplayPopup(){
        setDisplayPopup(!displayPopup)
    }

    return ( 
        <div class="homepage">
            <Side getListCate={getListCate}></Side>
            <Main handleDisplayPopup={handleDisplayPopup} getListByName={getListByName} isLoad={isLoad} listItem={listItem}></Main>
            <BookPopup displayPopup={displayPopup} handleDisplayPopup={handleDisplayPopup}></BookPopup>
        </div>
        
    );
}
export default Home;    