import React from 'react';
import {createAccount} from '../../../../controller/index'

function Login(props) {
    const [signin, setSignin] = React.useState(true);
    const [disableSignup, setDisableSignup] = React.useState(true);

    function handleClick(){
        setSignin(!signin);
        console.log(signin)
    }

    function handleSignUp(){
        var obj = {
            username: document.querySelector('.sign-up #username').value,
            email: document.querySelector('.sign-up #email').value,
            phone: document.querySelector('.sign-up #phone').value,
            password: document.querySelector('.sign-up #password').value,
        }
        createAccount(obj)
    }

    function checkSignup(){
        var username = document.querySelector('.sign-up #username').value;
        var email = document.querySelector('.sign-up #email').value;
        var phone = document.querySelector('.sign-up #phone').value;
        var password = document.querySelector('.sign-up #password').value;
        if(username.length > 0 && email.length > 0 && phone.length > 0 && password.length > 0){
            setDisableSignup(false)
        }
    }
    return (  
        <div id="loginContainer"  class={(props.display === true ? '' : 'un-fade') + " fade"}>
            <div class="content">
                <div class={"sign-in fade " + (signin === true ? '' : 'un-fade d-none')}>
                    <p class="title">Đăng nhập</p>
                    <input id="username" placeholder="Tên đăng nhập"/>
                    <input type="password" placeholder="Mật khẩu" id="password"/>
                    <p id="btnLogin" class="btn-first">Đăng nhập</p>
                    <div class="line">Chưa có tài khoản?</div>
                    <p class="btn-second" onClick={handleClick}>Đăng ký</p>
                </div>
                <div class={"sign-up fade " + (signin === true ? 'un-fade d-none' : '')}>
                    <p class="title">Đăng ký</p>
                    <input id="username" onChange={checkSignup} placeholder="Tên đăng nhập"/>
                    <input id="email" onChange={checkSignup} placeholder="Email"/>
                    <input id="phone" onChange={checkSignup} placeholder="Số điện thoại"/>
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