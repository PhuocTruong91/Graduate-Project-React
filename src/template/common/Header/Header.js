import * as React from "react";

import logo from '../../../images/logo.png';
import '../../../css/header.scss';
import Login from './components/Login';
import FavouriteList from './components/FavouriteList';
import {listItemStore, actionType} from '../../../redux/listItem';
import {userStore, expectedItemStore} from '../../../redux/user';
import {contentWarningStore, isWarningSigninStore} from '../../../redux/display';

function Header() {
    const [isLogin, setIslogin] = React.useState(false);
    const [display, setDisplay] = React.useState(false);
    const [displayFavouriteList, setDisplayFavouriteList] = React.useState(false);
    const [user, setUser] = React.useState(userStore.getState());
    const [listFavourite, setListFavourite] = React.useState(expectedItemStore.getState());

    expectedItemStore.subscribe(() => {
        setListFavourite(expectedItemStore.getState());
    })

    //remove duplicate item

    userStore.subscribe(() => {
        if(userStore.getState()){
            setUser(userStore.getState());
            window.user = userStore.getState();
            setIslogin(true);
            setDisplay(!display);
            document.getElementById("header").classList.add("on-top");
        }
   
    })


    document.addEventListener('scroll', function (){
        if(window.scrollY > 120){
            document.getElementById("header").classList.remove("on-top")
        }else{
            document.getElementById("header").classList.add("on-top")
        }
    })

    function handleSearchBanner(){
        var value = document.getElementById('searchBanner').value;
        if(value.length === 0 ){
            isWarningSigninStore.dispatch({type: 'DISPLAY_YES'});
            contentWarningStore.dispatch({type: 'SET', data: 'Nhập giá trị trước khi tìm kiếm'})
        }else{
            listItemStore.dispatch({type: actionType.getbyname, name: value})
        }
    }
    
    function toggleLogin(){
        setDisplay(!display)
        if(document.getElementById("loginContainer").classList.contains('un-fade')){
            document.getElementById("header").classList.remove("on-top")
        }else{
            document.getElementById("header").classList.add("on-top")
        }
    }

    function toggleFavouriteList(){
        setDisplayFavouriteList(!displayFavouriteList);
    }
    return (
        <div className="container">
            <div id="header" className="header on-top">
                <div className="left">
                    <img src={logo}/>
                    <div className="nav-link">
                        <p>Trang chủ</p>
                        <p>Dịch vụ</p>
                        <p>Ưu đãi</p>
                        <p>Hỗ trợ</p>
                    </div>
                </div>
                { isLogin ?  
                    <div className="user-info">
                        <p>{window.user ? user.name : ''}</p>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16667 0.758911C7.96288 0.758911 6.77089 0.985115 5.65873 1.42461C4.54658 1.8641 3.53606 2.50827 2.68485 3.32035C0.965771 4.96041 0 7.18481 0 9.50421C0 11.8236 0.965771 14.048 2.68485 15.6881C3.53606 16.5001 4.54658 17.1443 5.65873 17.5838C6.77089 18.0233 7.96288 18.2495 9.16667 18.2495C11.5978 18.2495 13.9294 17.3281 15.6485 15.6881C17.3676 14.048 18.3333 11.8236 18.3333 9.50421C18.3333 8.35576 18.0962 7.21855 17.6356 6.15753C17.1749 5.0965 16.4997 4.13242 15.6485 3.32035C14.7973 2.50827 13.7867 1.8641 12.6746 1.42461C11.5624 0.985115 10.3705 0.758911 9.16667 0.758911ZM4.6475 14.9963C5.04167 14.2092 7.44333 13.4396 9.16667 13.4396C10.89 13.4396 13.2917 14.2092 13.6858 14.9963C12.4019 15.9722 10.8083 16.5027 9.16667 16.5004C7.46167 16.5004 5.89417 15.9407 4.6475 14.9963ZM14.9967 13.7282C13.6858 12.2065 10.505 11.6905 9.16667 11.6905C7.82833 11.6905 4.6475 12.2065 3.33667 13.7282C2.3615 12.5166 1.83303 11.0317 1.83333 9.50421C1.83333 5.64753 5.12417 2.50797 9.16667 2.50797C13.2092 2.50797 16.5 5.64753 16.5 9.50421C16.5 11.0958 15.9317 12.5651 14.9967 13.7282ZM9.16667 4.25703C7.38833 4.25703 5.95833 5.6213 5.95833 7.31788C5.95833 9.01447 7.38833 10.3787 9.16667 10.3787C10.945 10.3787 12.375 9.01447 12.375 7.31788C12.375 5.6213 10.945 4.25703 9.16667 4.25703ZM9.16667 8.62968C8.80199 8.62968 8.45226 8.49147 8.1944 8.24546C7.93653 7.99945 7.79167 7.66579 7.79167 7.31788C7.79167 6.96997 7.93653 6.63631 8.1944 6.3903C8.45226 6.14429 8.80199 6.00609 9.16667 6.00609C9.53134 6.00609 9.88108 6.14429 10.1389 6.3903C10.3968 6.63631 10.5417 6.96997 10.5417 7.31788C10.5417 7.66579 10.3968 7.99945 10.1389 8.24546C9.88108 8.49147 9.53134 8.62968 9.16667 8.62968Z" fill="#1F2125"/>
                        </svg>
                        <div onClick={toggleFavouriteList} className="remind">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6666 1.66663H4.99992C4.55789 1.66663 4.13397 1.84222 3.82141 2.15478C3.50885 2.46734 3.33325 2.89127 3.33325 3.33329V16.6666C3.33325 17.1087 3.50885 17.5326 3.82141 17.8451C4.13397 18.1577 4.55789 18.3333 4.99992 18.3333H14.9999C15.4419 18.3333 15.8659 18.1577 16.1784 17.8451C16.491 17.5326 16.6666 17.1087 16.6666 16.6666V6.66663L11.6666 1.66663Z" stroke="#1F2125" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.6667 1.66663V6.66663H16.6667" stroke="#1F2125" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.3334 10.8334H6.66675" stroke="#1F2125" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.3334 14.1666H6.66675" stroke="#1F2125" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.33341 7.5H7.50008H6.66675" stroke="#1F2125" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {listFavourite &&  listFavourite.length > 0? <p>{listFavourite.length}</p> : ''}
                        </div>
                    </div> : 
                    <p id="login-header" className="login" onClick={toggleLogin}>Đăng nhập</p>
                }
            </div> 
            <div id="background" className="background">
                    <div className="group-search">
                        <p className="title">Find your product ...</p>
                        <input id="searchBanner"/>
                        <div onClick={handleSearchBanner} id="label" className="label">
                            <p  className="search-label">tìm kiếm</p>
                        </div>
                    </div>
            </div>
            <Login display={display}/>
            <FavouriteList displayFavouriteList={displayFavouriteList} listFavourite={listFavourite}></FavouriteList>
        </div>
    );
}

export default Header;
