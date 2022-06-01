function Login(props) {
    return (  
        <div id="loginContainer"  class={(props.display === true ? '' : 'un-fade') + " fade"}>
            <div class="content">
                <p class="title">Đăng nhập</p>
                <input id="username"/>
                <input type="password" id="password"/>
                <p id="btnLogin">Đăng nhập</p>
                <div class="line">Chưa có tài khoản?</div>
                <p id="btnSignin">Đăng ký</p>
            </div>
        </div>
    );
}

export default Login;