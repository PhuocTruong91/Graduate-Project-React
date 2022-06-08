import axios from "axios";
import {mainDomain} from './config';
import {isLoadStore} from '../redux/display';
import {listTrackingStore} from '../redux/listTracking';

export async function  getListTracking(){
    var result ={}
    var baseUrl = mainDomain + 'list/tracking';
    result = await axios.get(baseUrl)
    .then(res => {
        if(res.data.success === true){
            listTrackingStore.dispatch({type: 'SET', data: res.data.result})
        }
    })
    .catch(err => {
        console.log(err);
    })
    return result;
}