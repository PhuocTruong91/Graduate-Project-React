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
            idUser: sessionStorage.user ? JSON.parse(sessionStorage.user)._id : '',
            idProduct: props.id,
            presentPrice: props.price,
            priceExpected: inputValue.replace(/\./g,''),
            link: props.link,
            name: props.name,
            img: props.img,
            shop: props.shop
        }
        bookItem(data);
    }

    function handleClosePopup () {
        isBookPopupStore.dispatch({type: 'DISPLAY_NO'})
    }

    isBookPopupStore.subscribe( () =>{
        setDisplaypopup(isBookPopupStore.getState())
        if(isBookPopupStore.getState() === false) setInputValue('');
    })
    return ( 
        <div className={"book-popup fade " + (displayPopup ?  '' : 'un-fade')} data-id={props.id}>
            <div className="book-popup_container">
                <p className="title">Đặt lời nhắc</p>
                <div className="present-product">
                    <p>Tên sản phẩm</p>
                    <p>{props.name}</p>
                </div>
                <div className="present-price">
                    <p className="present-price_title">Giá hiện tại</p>
                    <p>{(props.price ? props.price
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : '') + ' '}
                       VNĐ</p>
                </div>
                <div className="expected-price">
                    <p className="expected-price_title">Giá mong muốn</p>
                    <input onChange={handleOnchange} id="priceInput" value={inputValue} />
                    <span>VNĐ</span>
                    {!isvalid ? <p className="error-text">Giá trị không phù hợp</p> : ''}
                </div>
                <div className="group-button">
                    <p className="cancel" onClick={handleClosePopup}>Hủy</p>
                    <p className={"accept " + (!isvalid || !isHaveData? 'invalid' : '')} onClick={handleBookItem}>Đồng ý</p>
                </div>
            </div>
        </div>
     );
}

export default BookPopup;