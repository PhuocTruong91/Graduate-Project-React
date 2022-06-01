import { createStore } from 'redux';
import { getItemByName } from '../controller';
import { isLoadStore } from './isLoad';

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
                    window.scrollTo({
                        top:'869',
                        behavior:'smooth'
                    });     
                }) 
            return state;
        default:
            break;
    }

    return state;
}

//create store
export const listItemStore = createStore(listItemReducer);
