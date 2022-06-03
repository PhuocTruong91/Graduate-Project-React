import {mainDomain} from './config';
import {isLoadStore} from '../redux/display'
import {isSignInSuccessStore, isBookPopupStore} from '../redux/display'
import {userStore, resStore, expectedItemStore} from '../redux/user'
import axios from 'axios';

export function createAccount(data) {
    var baseUrl = mainDomain + 'create';
    isLoadStore.dispatch({type: 'TOGGLE'});
    axios.post(baseUrl, data)
        .then(function (res) {
            isLoadStore.dispatch({type: 'TOGGLE'});
            if(res.data.success){
                isSignInSuccessStore.dispatch({type: 'DISPLAY_YES'})
            }
            console.log(res)
        })
        .catch(function (error) {
            console.log(error)
            isLoadStore.dispatch({type: 'TOGGLE'});
        });
}

export function logIn(data) {
    var baseUrl = mainDomain + 'account';
    isLoadStore.dispatch({type: 'TOGGLE'});
    axios.post(baseUrl, data)
        .then(function (res) {
            isLoadStore.dispatch({type: 'TOGGLE'});
            userStore.dispatch({type: 'SET_USER', data: res.data.user})
            resStore.dispatch({type: 'SET_RES', data: res.data})
            getUser();
        })
        .catch(function (error) {
            isLoadStore.dispatch({type: 'TOGGLE'});
            console.log(error)
        });
}

export function bookItem(data){
    var baseUrl = mainDomain + 'booking';
    isLoadStore.dispatch({type: 'TOGGLE'});
    axios.post(baseUrl, data)
        .then(function (res) {
            isLoadStore.dispatch({type: 'TOGGLE'});
            isBookPopupStore.dispatch({type: 'TOGGLE'})
            getUser();
        })
        .catch(function (error) {
            isLoadStore.dispatch({type: 'TOGGLE'});
            console.log(error)
        });
}

export function getUser(){
    var baseUrl = mainDomain + 'user?userId=' + (window.user ? window.user._id : '');
   
    if(!window.user === true) return;
    isLoadStore.dispatch({type: 'TOGGLE'});
    axios.get(baseUrl)
        .then(function (res) {
            isLoadStore.dispatch({type: 'TOGGLE'});
            expectedItemStore.dispatch({type: 'SET', data: res.data.result});
        })
        .catch(function (error) {
            isLoadStore.dispatch({type: 'TOGGLE'});
            console.log(error)
        });
}