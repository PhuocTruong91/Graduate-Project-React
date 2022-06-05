import { createStore } from "redux";

var userReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_USER':
            state = action.data;
            return state;
        default:
            return state;
        }
}
var resReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_RES':
            state = action.data;
            return state;
        default:
            return state;
        }
}
var expectedItemReducer = (state = [], action) => {
    switch(action.type){
        case 'SET':
            var tempState = action.data.expectedItem;
            return tempState;
        default:
            return  state;
    }
}
var listAccount = (state = [], action) => {
    switch(action.type){
        case 'SET':
            return action.data;
        default:
            return  state;
    }
}

export var userStore = createStore(userReducer);
export var resStore = createStore(resReducer);
export var expectedItemStore = createStore(expectedItemReducer);
export var listAccountStore = createStore(listAccount);