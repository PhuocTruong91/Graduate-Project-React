import { createStore } from 'redux';
import { getItemByName } from '../controller/ListItem';
import { isLoadStore } from './display';

export var actionType = {
    getbyname: 'GET_BY_NAME',
}

//creare reducer
var listItemReducer =  async (state = [], action) =>{
    switch (action.type) {
        case actionType.getbyname:
            isLoadStore.dispatch({type: 'TOGGLE'});
            await getItemByName(action.name)
                .then(res =>{
                    state = res;
                    isLoadStore.dispatch({type: 'TOGGLE'});
                    if(!action.isMain){
                        window.scrollTo({
                            top: (document.getElementById("background").getBoundingClientRect().bottom - 80).toString(),
                            behavior:'smooth'
                        });
                    }
                }) 
            return state;
        default:
            break;
    }

    return state;
}

//create store
export const listItemStore = createStore(listItemReducer);
