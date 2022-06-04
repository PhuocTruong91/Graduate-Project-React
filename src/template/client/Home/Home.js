import React from 'react';

import Side from './components/Side'
import Main from './components/Main'
import BookPopup from './components/BookPopup'
import { isLoadStore, isBookPopupStore } from '../../../redux/display';
import { listItemStore } from '../../../redux/listItem';
import '../../../css/home.scss';

function Home() {
    var [listItem, setListItem] = React.useState([]);
    var [tempList, setTempList] = React.useState([]);
    var [isLoad, setIsload] = React.useState(isLoadStore.getState());
    var [pricePopup, setPricePopup] = React.useState();
    var [namePopup, setNamePopup] = React.useState();
    var [idItem, setIdItem] = React.useState();
    var [img, setImg] = React.useState();
    var [link, setLink] = React.useState();
    
    isLoadStore.subscribe(() => {setIsload(isLoadStore.getState())});
    listItemStore.subscribe( function() {
        listItemStore.getState().then( (res) => {
            setListItem(res);
            setTempList(res);
        })
    })

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

    function handleDisplayPopup(event){
        if(window.user){
            if(event && event.target.attributes.value){
                setPricePopup(event.target.attributes.value.value);
                setNamePopup(event.target.attributes.name.value);
                setIdItem(event.target.attributes.id.value);
                setImg(event.target.attributes.img.value);
                setLink(event.target.attributes.link.value);
            }
            isBookPopupStore.dispatch({type: 'DISPLAY_YES'});
            document.getElementById('priceInput').value = '';
        }else{
            alert('Bạn phải đăng nhập để sử dụng chức năng này');
        }
    }

    return ( 
        <div id="homepage" class="homepage">
            <Side getListCate={getListCate}></Side>
            <Main handleDisplayPopup={handleDisplayPopup} isLoad={isLoad} listItem={listItem}></Main>
            <BookPopup link={link} img={img} id={idItem} price={pricePopup} name={namePopup}></BookPopup>
        </div>
        
    );
}
export default Home;    