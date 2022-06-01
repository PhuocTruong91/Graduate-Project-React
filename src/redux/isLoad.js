import { createStore } from 'redux';

//creare reducer
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

//create store
export var isLoadStore = createStore(isLoadReducer);

