import React from "react";

function LoginAdmin(props) {
    const textInput = React.useRef(null);

    React.useEffect(() => {
        textInput.current.focus();
    }, []);

    return ( 
        <div className="login-admin">
            <div className="login-admin_container">
                <p className="title"> Đăng nhập</p>
                { props.err ? <p class="err">Sai tên đăng nhập hoặc mật khẩu</p> : ''}
                <input className="input-basic" onFocus={props.getListData} id="userAdmin" placeholder="Tên đăng nhập" ref={textInput} ></input>
                <input type="password" className="input-basic" id="passAdmin" placeholder="Mật khẩu"></input>
                <p className="btn-basic blue" onClick={props.handleSignIn}>Đăng nhập</p>
            </div>
        </div>
     );
}

export default LoginAdmin;