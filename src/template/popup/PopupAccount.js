import React from 'react';
import {isPopupAccountStore} from '../../redux/display';
import {typePopupAccountStore} from '../../redux/admin';
import {updateAccount, createAccount} from '../../controller/Account'
import {listAccountStore} from '../../redux/user';
function PopupAccount (props) {
    const [display, setDisplay] = React.useState(isPopupAccountStore.getState());
    const [checkInput, setCheckInput] = React.useState(false);
    const [typePopup, setTypePopup] = React.useState(typePopupAccountStore.getState());
    const [listAccount, setListAccount] = React.useState(listAccountStore.getState());
    const [errEmail, setErrEmail] = React.useState(false);
    const [errUser, setErrUser] = React.useState(false);

    isPopupAccountStore.subscribe(() => {
        setDisplay(isPopupAccountStore.getState());
    });
    typePopupAccountStore.subscribe(() => {
        setTypePopup(typePopupAccountStore.getState());
    });
    listAccountStore.subscribe(() => {
        setListAccount(listAccountStore.getState());
    });

    function closePopup (){
        isPopupAccountStore.dispatch({type: 'DISPLAY_NO'});
    }

    function handleClick (){
        var obj = {
            _id: document.querySelector('.popup-account #id').value,
            name : document.querySelector('.popup-account #name').value,
            username: document.querySelector('.popup-account #username').value,
            email: document.querySelector('.popup-account #email').value,
            phone: document.querySelector('.popup-account #phone').value,
            password: document.querySelector('.popup-account #password').value,
        }

        var listEmail = [];
        var listUser = [];
        listAccount.map((item) => {
            listEmail.push(item.email);
            listUser.push(item.username);
        })

        if(typePopup === 'ADD'){
            delete obj._id;
            obj.type = document.getElementById("typeUser").value;
            
            if(listEmail.includes(obj.email) || listUser.includes(obj.username)){
                if(listEmail.includes(obj.email)){
                    setErrEmail(true);  
                }
                if(listUser.includes(obj.username)){
                    setErrUser(true);
                }
            }else{
                createAccount(obj);
                setErrEmail(false);
                setErrUser(false);
            }
        }else{
            if(obj.name === '') delete obj.name;
            if(obj.username === '') delete obj.username;
            if(obj.email === '') delete obj.email;
            if(obj.phone === '') delete obj.phone;
            if(obj.password === '') delete obj.password;
            updateAccount(obj);
        }
    }
    
    function checkSignup(){
        setTypePopup(document.querySelector('.popup-account #type').value);
        if(typePopup === 'ADD'){
            var username = document.querySelector('.popup-account #username').value;
            var email = document.querySelector('.popup-account #email').value;
            var phone = document.querySelector('.popup-account #phone').value;
            var password = document.querySelector('.popup-account #password').value;
            var name = document.querySelector('.popup-account #name').value;
    
            if(username.length > 0 && email.length > 0 && phone.length > 0 && password.length > 0 && name.length > 0){
                setCheckInput(true)
            }else{
                setCheckInput(false)
            }
        }else{
            setCheckInput(true)
        }
    }

    return ( 
        <div className={"popup-account popup fade " + (display ? '' : 'un-fade')}>
            <div className="container">
                <p className='title' id="title"></p>
                <input onChange={checkSignup} type='hidden' id="id"></input>
                <input onChange={checkSignup} type='hidden' id="type"></input>
                <input onChange={checkSignup} className='input-basic' id='name' placeholder='Tên người dùng'></input>
                <div className='group-error'>
                    <input onChange={checkSignup} className='input-basic' id='email' placeholder='Email'></input>
                    {
                        errEmail ? <p className='error-text'>Email đã tồn tại</p> : ''
                    }
                </div>
                <input onChange={checkSignup} className='input-basic' id='phone' placeholder='Số điện thoại' maxLength='10'></input>
                <div className='group-error'>
                    <input onChange={checkSignup} className='input-basic' id='username' placeholder='Tên đăng nhập'></input>
                    {
                        errUser ? <p className='error-text'>Tên đăng nhập đã tồn tại</p>: ''
                    }
                </div>
                <input onChange={checkSignup} className='input-basic' id='password' placeholder='Mật khẩu'></input>
                { 
                   typePopup === 'ADD' ? 
                   <select id="typeUser">
                        <option value='user'>USER</option>
                        <option value='admin'>ADMIN</option>
                   </select> :
                   ''
                }
                
                <svg onClick={closePopup} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3047 5.80322L5.69809 16.4098" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.69531 5.80322L16.3019 16.4098" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className={"btn-basic blue " + (checkInput ? '' : 'invalid')} onClick={handleClick}>Xác nhận</p>
            </div>
        </div>
    );
}

export default PopupAccount;