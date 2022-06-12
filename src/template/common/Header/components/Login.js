import React from 'react';
import {logIn} from '../../../../controller/Account';
import {checkEmail} from '../../../../controller/Email';
import {resStore} from '../../../../redux/user';
import {codeConfirmStore} from '../../../../redux/email';
import {listAccountStore} from '../../../../redux/user';
import {getListAccount} from '../../../../controller/Account';

function Login(props) {
    const [signin, setSignin] = React.useState(true);
    const [disableSignup, setDisableSignup] = React.useState(true);
    const [disableSignin, setDisableSignin] = React.useState(true);
    const [err, setError] = React.useState(false);
    const [res, setRes] = React.useState(resStore.getState());
    const [listAccount, setListAccount] = React.useState(listAccountStore.getState());
    const [errEmail, setErrEmail] = React.useState(false);
    const [errUser, setErrUser] = React.useState(false);

    function handleClick(){
        setSignin(!signin);
        getListAccount();
    }

    async function handleSignUp(){
        var obj = {
            name : document.querySelector('.sign-up #name').value,
            username: document.querySelector('.sign-up #username').value,
            email: document.querySelector('.sign-up #email').value,
            phone: document.querySelector('.sign-up #phone').value,
            password: document.querySelector('.sign-up #password').value,
            type: 'user',
        }
        var listEmail = [];
        var listUser = [];
        listAccount.map((item) => {
            listEmail.push(item.email);
            listUser.push(item.username);
        })

        if(listEmail.includes(obj.email) || listUser.includes(obj.username)){
            if(listEmail.includes(obj.email)){
                setErrEmail(true);  
            } 
            if(listUser.includes(obj.username)){
                setErrUser(true);
            } 
        }else{
            setErrEmail(false);
            setErrUser(false);
            var number = (Math.floor(Math.random() * 9999999) + 1000000).toString();
            checkEmail(obj.email, number)
            codeConfirmStore.dispatch({type: 'CREATE', data: {codeConfirm: number, obj: obj}});
        }
    }


    function handleSignIn(){
        var obj = {
            username : document.querySelector('.sign-in #username').value,
            pass: document.querySelector('.sign-in #password').value,
        }
        logIn(obj);
    }

    function checkSignup(){
        var username = document.querySelector('.sign-up #username').value;
        var email = document.querySelector('.sign-up #email').value;
        var phone = document.querySelector('.sign-up #phone').value;
        var password = document.querySelector('.sign-up #password').value;
        var name = document.querySelector('.sign-up #name').value;

        var pattern = '.*@.*mail.com';
        var resultEmail = (email).match(pattern);

        if(username.length > 0 && email.length > 0 && phone.length > 0 && password.length > 0 && name.length > 0 && resultEmail !== null){
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

    listAccountStore.subscribe(() =>{
        setListAccount(listAccountStore.getState());
    })
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
        <div id="loginContainer"  className={(props.display === true ? '' : 'un-fade') + " fade"}>
            <div className="content">
                <div className={"sign-in fade " + (signin === true ? '' : 'un-fade d-none')}>
                    <p className="title">Đăng nhập</p>
                    {err === true ? <p className="error">{res.errcontent}</p> : ''}
                    <input id="username" onChange={checkSignin} placeholder="Tên đăng nhập"/>
                    <input type="password" onChange={checkSignin} placeholder="Mật khẩu" id="password"/>
                    <p id="btnLogin" onClick={handleSignIn} className={"btn-first " + (disableSignin ? 'invalid' : '')}>Đăng nhập</p>
                    <div className="line">Chưa có tài khoản?</div>
                    <p className="btn-second" onClick={handleClick}>Đăng ký</p>
                </div>
                <div className={"sign-up fade " + (signin === true ? 'un-fade d-none' : '')}>
                    <p className="title">Đăng ký</p>
                    <input id="name" onChange={checkSignup} placeholder="Họ và tên"/>
                    <div className="group-error">
                        <input id="email" onChange={checkSignup} placeholder="Email"/>
                        {errEmail === true ? <p className="error-text email">Email đã tồn tại</p> : ''}
                    </div>
                    <input id="phone" onChange={checkSignup} placeholder="Số điện thoại"/>
                    <div className="group-error">
                        <input id="username" onChange={checkSignup} placeholder="Tên đăng nhập"/>
                        {errUser === true ? <p className="error-text user">Tên đăng nhập đã tồn tại</p> : ''}
                    </div>
                    <input type="password" onChange={checkSignup} placeholder="Mật khẩu" id="password"/>
                    <p id="btnSignUp"  className={"btn-first " + (disableSignup ? 'invalid' : '')} onClick={handleSignUp}>Đăng ký</p>
                    <div className="line">Đã có tài khoản?</div>
                    <p className="btn-second" onClick={handleClick}>Đăng nhập</p>
                </div>
            </div>
        </div>
    );
}

export default Login;