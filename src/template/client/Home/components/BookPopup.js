import React from 'react';
import {bookItem} from '../../../../controller/Account';
import { isBookPopupStore } from '../../../../redux/display';

function BookPopup(props) {
    const [isvalid, setIsvalid] = React.useState(true);
    const [isHaveData, setIsHaveData] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const [displayPopup, setDisplaypopup] = React.useState(isBookPopupStore.getState());
    var pattern = /^[0-9]*$/i;

    function handleOnchange (event) {
        var result = (event.target.value.replace(/\./g,'')).match(pattern);
        if(result !== null){
            setIsvalid(true)
        }else{
            setIsvalid(false)
        }
        if(event.target.value.length > 0){
            setIsHaveData(true)
        }else{
            setIsHaveData(false)
        }
        setInputValue(event.target.value.toString().replace(/\./g,'').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."))
    }

    function handleBookItem(){
        var data = {
            idUser: window.user ? window.user._id : '',
            idProduct: props.id,
            presentPrice: props.price,
            priceExpected: inputValue.replace(/\./g,''),
            link: props.link,
            name: props.name,
            img: props.img,
        }
        bookItem(data);
        setInputValue('');
    }

    function handleClosePopup () {
        isBookPopupStore.dispatch({type: 'DISPLAY_NO'})
    }

    isBookPopupStore.subscribe( () =>{
        setDisplaypopup(isBookPopupStore.getState())
    })
    return ( 
        <div class={"book-popup fade " + (displayPopup ?  '' : 'un-fade')} data-id={props.id}>
            <div class="book-popup_container">
                <p class="title">Đặt lời nhắc</p>
                <div class="present-product">
                    <p>Tên sản phẩm</p>
                    <p>{props.name}</p>
                </div>
                <div class="present-price">
                    <p class="present-price_title">Giá hiện tại</p>
                    <p>{(props.price ? props.price
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : '') + ' '}
                       VNĐ</p>
                </div>
                <div class="expected-price">
                    <p class="expected-price_title">Giá mong muốn</p>
                    <input onChange={handleOnchange} id="priceInput" value={inputValue} />
                    <span>VNĐ</span>
                    {!isvalid ? <p class="error-text">Giá trị không phù hợp</p> : ''}
                </div>
                <div class="group-button">
                    <p class="cancel" onClick={handleClosePopup}>Hủy</p>
                    <p class={"accept " + (!isvalid || !isHaveData? 'invalid' : '')} onClick={handleBookItem}>Đồng ý</p>
                </div>
            </div>
        </div>
     );
}

export default BookPopup;