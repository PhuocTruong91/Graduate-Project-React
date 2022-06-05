import { createStore } from 'redux';

//creare reducer
var codeConfirm = (state = '', action) =>{
    switch (action.type) {
        case 'CREATE':
            return action.data;
        default:
            break;
    }
    return state;
}

//create store
export const codeConfirmStore = createStore(codeConfirm);
