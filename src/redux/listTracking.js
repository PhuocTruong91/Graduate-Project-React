import { createStore } from "redux";
import {getListTracking} from '../controller/ListTracking'

var listTrackingReducer = (state = [], action) => {
    switch(action.type){
        case 'SET':
            return action.data;
        default:
            return  state;
    }
}

export const listTrackingStore = createStore(listTrackingReducer);