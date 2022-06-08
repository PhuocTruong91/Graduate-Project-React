import {isCheckEmailStore} from '../../redux/display';
import {codeConfirmStore} from '../../redux/email';

import { createAccount} from '../../controller/Account';

import React from 'react';

function CheckEmailPopup(props) {
    const [display, setDisplay] = React.useState(isCheckEmailStore.getState());
    const [codeConfirm, setCodeConfirm] = React.useState(codeConfirmStore.getState().codeConfirm);
    const [obj, setObj] = React.useState(codeConfirmStore.getState().obj);

    isCheckEmailStore.subscribe(() =>{
        setDisplay(isCheckEmailStore.getState());
    })
    codeConfirmStore.subscribe(() =>{
        setCodeConfirm(codeConfirmStore.getState().codeConfirm);
        setObj(codeConfirmStore.getState().obj);
    })
   

    function closePopup (){
        isCheckEmailStore.dispatch({type: 'DISPLAY_NO'});
    }
    function checkCode (){
        if(document.querySelector('.checkemail #codeConfirm').value === codeConfirm){
            createAccount(obj);
        }else{
            console.log(false)
        }
    }
    return ( 
        <div className={"popup checkemail fade " + (display ? '' : 'un-fade')}>
            <div class="container">
                <p className="title"> Nhập mã xác nhận</p>
                <input id="codeConfirm" className='input-basic'></input>
                <p className="btn-basic blue" onClick={checkCode}>Xác nhận</p>
                <svg onClick={closePopup} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3047 5.80322L5.69809 16.4098" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.69531 5.80322L16.3019 16.4098" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
     );
}

export default CheckEmailPopup;