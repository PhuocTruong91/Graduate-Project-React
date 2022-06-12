import { createStore } from 'redux';

//creare reducer
var typePopupAccount = (state = false, action) =>{
    switch (action.type) {
        case 'SET':
            return action.data;
        default:
            break;
    }
    return state;
}

export const typePopupAccountStore= createStore(typePopupAccount);