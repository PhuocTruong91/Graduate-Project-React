import React from 'react';
import {isUpdateProductStore} from '../../redux/display';
import {updateProduct} from '../../controller/Product'
function UpdateProduct(props) {
    const [display, setDisplay] = React.useState(isUpdateProductStore.getState());

    isUpdateProductStore.subscribe(function () {setDisplay(isUpdateProductStore.getState())})

    function closePopup (){
        isUpdateProductStore.dispatch({type: 'DISPLAY_NO'})
    }

    function handleUpdate(){
        var id = document.querySelector('.popup-update-product #id').value;
        var price = document.querySelector('.popup-update-product #price').value;
        updateProduct(id,price);
    }
    return ( 
        <div className={"popup-update-product popup fade " + (display ? '' : 'un-fade')}>
            <div className="container">
                <p className='title' id="title">Cập nhật giá sản phẩm</p>
                <input className="input-basic" placeholder='Id sản phẩm' id="id"></input>
                <input className="input-basic" placeholder='Giá sản phẩm' id="price"></input>
                <p className ="btn-basic blue" onClick={handleUpdate}>Xác nhận</p>
                <svg onClick={closePopup} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3047 5.80322L5.69809 16.4098" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.69531 5.80322L16.3019 16.4098" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
}

export default UpdateProduct;