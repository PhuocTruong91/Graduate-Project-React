import React from 'react';
import {createAccount, logIn} from '../../../../controller/Account';
import {resStore} from '../../../../redux/user';

function Login(props) {
    const [signin, setSignin] = React.useState(true);
    const [disableSignup, setDisableSignup] = React.useState(true);
    const [disableSignin, setDisableSignin] = React.useState(true);
    const [err, setError] = React.useState(false);
    const [res, setRes] = React.useState(resStore.getState());

    function handleClick(){
        setSignin(!signin);
    }

    function handleSignUp(){
        var obj = {
            name : document.querySelector('.sign-up #name').value,
            username: document.querySelector('.sign-up #username').value,
            email: document.querySelector('.sign-up #email').value,
            phone: document.querySelector('.sign-up #phone').value,
            password: document.querySelector('.sign-up #password').value,
        }
        createAccount(obj)
    }

    function handleSignIn(){
        var obj = {
            username : document.querySelector('.sign-in #username').value,
            pass: document.querySelector('.sign-in #password').value,
        }
        logIn(obj)
    }

    function checkSignup(){
        var username = document.querySelector('.sign-up #username').value;
        var email = document.querySelector('.sign-up #email').value;
        var phone = document.querySelector('.sign-up #phone').value;
        var password = document.querySelector('.sign-up #password').value;
        var name = document.querySelector('.sign-up #name').value;
        if(username.length > 0 && email.length > 0 && phone.length > 0 && password.length > 0 && name.length > 0){
            setDisableSignup(false)
        }else{
            setDisableSignup(true)
        }
    }

    function checkSignin(){
        var username = document.querySelector('.sign-in #username').value;
        var pass= document.querySelector('.sign-in #password').value;
        if(username.length > 0 && pass.length > 0){
            setDisableSignin(false)
        }else{
            setDisableSignin(true)
        }
    }

    resStore.subscribe(() => {
        setRes(resStore.getState());
        var response = resStore.getState();

        if(response){
            if(response.isValid === false){
                setError(true);
            }
        }
    })

    return (  
        <div id="loginContainer"  class={(props.display === true ? '' : 'un-fade') + " fade"}>
            <div class="content">
                <div class={"sign-in fade " + (signin === true ? '' : 'un-fade d-none')}>
                    <p class="title">Đăng nhập</p>
                    {err === true ? <p class="error">{res.errcontent}</p> : ''}
                    <input id="username" onChange={checkSignin} placeholder="Tên đăng nhập"/>
                    <input type="password" onChange={checkSignin} placeholder="Mật khẩu" id="password"/>
                    <p id="btnLogin" onClick={handleSignIn} class={"btn-first " + (disableSignin ? 'invalid' : '')}>Đăng nhập</p>
                    <div class="line">Chưa có tài khoản?</div>
                    <p class="btn-second" onClick={handleClick}>Đăng ký</p>
                </div>
                <div class={"sign-up fade " + (signin === true ? 'un-fade d-none' : '')}>
                    <p class="title">Đăng ký</p>
                    <input id="name" onChange={checkSignup} placeholder="Họ và tên"/>
                    <input id="email" onChange={checkSignup} placeholder="Email"/>
                    <input id="phone" onChange={checkSignup} placeholder="Số điện thoại"/>
                    <input id="username" onChange={checkSignup} placeholder="Tên đăng nhập"/>
                    <input type="password" onChange={checkSignup} placeholder="Mật khẩu" id="password"/>
                    <p id="btnSignUp"  class={"btn-first " + (disableSignup ? 'invalid' : '')} onClick={handleSignUp}>Đăng ký</p>
                    <div class="line">Đã có tài khoản?</div>
                    <p class="btn-second" onClick={handleClick}>Đăng nhập</p>
                </div>
            </div>
        </div>
    );
}

export default Login;