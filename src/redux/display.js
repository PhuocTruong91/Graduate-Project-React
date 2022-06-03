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

//create store
export var isSignInSuccessStore = createStore(isSignInSuccess);
export var isLoadStore = createStore(isLoadReducer);
export var isBookPopupStore = createStore(isBookPopup);
