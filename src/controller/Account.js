import {mainDomain} from './config';
import {isLoadStore} from '../redux/display'
import {isSignInSuccessStore, isBookPopupStore, isDeleteAccountStore, isPopupAccountStore} from '../redux/display'
import {userStore, resStore, expectedItemStore, listAccountStore} from '../redux/user'
import axios from 'axios';

export function createAccount(data) {
    var baseUrl = mainDomain + 'account/create';
    isLoadStore.dispatch({type: 'DISPLAY_YES'});
    axios.post(baseUrl, data)
        .then(function (res) {
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
            if(res.data.success){
                isSignInSuccessStore.dispatch({type: 'DISPLAY_YES'})
                isPopupAccountStore.dispatch({type: 'DISPLAY_NO'});
                getListAccount();
            }
        })
        .catch(function (error) {
            console.log(error)
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
        });
}

export function updateAccount(data) {
    var baseUrl = mainDomain + 'account/update';
    isLoadStore.dispatch({type: 'DISPLAY_YES'});
    axios.post(baseUrl, data)
        .then(function (res) {
            if(res.data.success){
                console.log('Success');
                getListAccount();
            }
        })
        .catch(function (error) {
            console.log(error)
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
        });
}

export function deleteAccount(id) {
    var baseUrl = mainDomain + 'account/delete?id=' + id;
    isLoadStore.dispatch({type: 'DISPLAY_YES'});
    axios.post(baseUrl)
        .then(function (res) {
            if(res.data.success){
                console.log('Success');
                isDeleteAccountStore.dispatch({type: 'DISPLAY_NO'});
                getListAccount();
            }
        })
        .catch(function (error) {
            console.log(error)
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
        });
}

export function logIn(data) {
    var baseUrl = mainDomain + 'account';
    isLoadStore.dispatch({type: 'DISPLAY_YES'});
    axios.post(baseUrl, data)
    .then(function (res) {
        resStore.dispatch({type: 'SET_RES', data: res.data})
        if(res.data.isValid === true){
            userStore.dispatch({type: 'SET_USER', data: res.data.user})
            expectedItemStore.dispatch({type: 'SET', data: res.data.user});
        }
        isLoadStore.dispatch({type: 'DISPLAY_NO'});
        })
        .catch(function (error) {
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
            console.log(error)
        });
}

export function bookItem(data){
    var baseUrl = mainDomain + 'booking';
    isLoadStore.dispatch({type: 'DISPLAY_YES'});
    axios.post(baseUrl, data)
        .then(function (res) {
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
            getUser();
        })
        .catch(function (error) {
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
            console.log(error)
        });
}

export function getUser(){
    var baseUrl = mainDomain + 'user?userId=' + (window.user ? window.user._id : '');
    isLoadStore.dispatch({type: 'DISPLAY_YES'});
    if(!window.user === true) return;
    axios.get(baseUrl)
        .then(function (res) {
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
            isBookPopupStore.dispatch({type: 'DISPLAY_NO'})
            expectedItemStore.dispatch({type: 'SET', data: res.data.result});
        })
        .catch(function (error) {
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
            console.log(error)
        });
}

export function getListAccount(){
    var baseUrl = mainDomain + 'list/account';
    axios.get(baseUrl)
        .then(function (res){
            listAccountStore.dispatch({type: 'SET', data: res.data});
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
            isPopupAccountStore.dispatch({type: 'DISPLAY_NO'});
        })
        .catch( function(err){
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
            console.log(err)
        }
    )
}