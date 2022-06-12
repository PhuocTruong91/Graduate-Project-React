import { createStore } from 'redux';

//creare reducer
var isSignInSuccess = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isWarningSignin = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var contentWarning = (state = '', action) =>{
    switch (action.type) {
        case 'SET':
            return action.data;
        default:
            break;
    }
    return state;
}

var isLoadReducer = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}
var isBookPopup = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}
var isCheckEmail = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isPopupAccount = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

var isDeleteAccount = (state = false, action) =>{
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        case 'DISPLAY_YES':
            return true;
        case 'DISPLAY_NO':
            return false;
        default:
            break;
    }
    return state;
}

//create store
export var isSignInSuccessStore = createStore(isSignInSuccess);
export var isLoadStore = createStore(isLoadReducer);
export var isBookPopupStore = createStore(isBookPopup);
export var isCheckEmailStore = createStore(isCheckEmail);
export var isWarningSigninStore = createStore(isWarningSignin);
export var contentWarningStore = createStore(contentWarning);
export var isPopupAccountStore = createStore(isPopupAccount);
export var isDeleteAccountStore = createStore(isDeleteAccount);

