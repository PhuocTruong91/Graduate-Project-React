import React from 'react';

function MainInfo(props) {

    const [showPass, setShowPass] = React.useState(false);

    function handleClick () {
        setShowPass(!showPass);
    }
    return ( 
        <div className="user-info">
            <p className="title">Thông tin cá nhân</p>
            {
                sessionStorage.user ? 
                    <div className="user-info_container">
                        <div className="item">
                            <p>Tên người dùng:</p>
                            <input className="input-basic" value={JSON.parse(sessionStorage.user).name} disabled/>
                        </div>
                        <div className="item">
                            <p>Số điện thoại:</p>
                            <input className="input-basic" value={JSON.parse(sessionStorage.user).phone} disabled/>
                        </div>
                        <div className="item">
                            <p>Email:</p>
                            <input className="input-basic" value={JSON.parse(sessionStorage.user).email} disabled/>
                        </div>
                        <div className="item">
                            <p>Tên đăng nhập:</p>
                            <input className="input-basic" value={JSON.parse(sessionStorage.user).username} disabled/>
                        </div>
                        <div className="item">
                            <p>Mật khẩu:</p>
                            <input type={showPass ? '' : 'password'} className="input-basic" value={JSON.parse(sessionStorage.user).password} disabled/>
                            {
                                showPass ? 
                                    <svg onClick={handleClick} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_140_246)">
                                        <path d="M10.0016 10.0017C9.80704 10.2105 9.57244 10.378 9.31178 10.4941C9.05111 10.6102 8.76972 10.6727 8.4844 10.6777C8.19907 10.6828 7.91566 10.6303 7.65106 10.5234C7.38646 10.4165 7.1461 10.2575 6.94431 10.0557C6.74252 9.85388 6.58345 9.61352 6.47657 9.34892C6.36969 9.08432 6.31721 8.8009 6.32224 8.51558C6.32728 8.23025 6.38973 7.94887 6.50587 7.6882C6.62202 7.42754 6.78947 7.19293 6.99825 6.99839M12.7074 12.7076C11.4966 13.6305 10.0222 14.1418 8.49992 14.1667C3.54159 14.1667 0.708252 8.50006 0.708252 8.50006C1.58934 6.85807 2.81139 5.42349 4.29242 4.29256L12.7074 12.7076ZM7.01242 3.00339C7.49999 2.88926 7.99917 2.83222 8.49992 2.83339C13.4583 2.83339 16.2916 8.50006 16.2916 8.50006C15.8616 9.30445 15.3488 10.0617 14.7616 10.7596L7.01242 3.00339Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M0.708252 0.708374L16.2916 16.2917" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_140_246">
                                        <rect width="17" height="17" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    : 
                                    <svg onClick={handleClick} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_140_243)">
                                        <path d="M0.666748 7.5C0.666748 7.5 3.33341 2.5 8.00008 2.5C12.6667 2.5 15.3334 7.5 15.3334 7.5C15.3334 7.5 12.6667 12.5 8.00008 12.5C3.33341 12.5 0.666748 7.5 0.666748 7.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8 9.375C9.10457 9.375 10 8.53553 10 7.5C10 6.46447 9.10457 5.625 8 5.625C6.89543 5.625 6 6.46447 6 7.5C6 8.53553 6.89543 9.375 8 9.375Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_140_243">
                                        <rect width="16" height="15" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                            }
                        </div>
                    </div>
                : 
                ''
            }
        </div>
     );
}

export default MainInfo;