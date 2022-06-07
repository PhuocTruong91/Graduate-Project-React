import axios from "axios";
import {mainDomain} from './config';
import {isLoadStore} from '../redux/display';
import {listTrackingStore} from '../redux/listTracking';

getListTracking()

async function  getListTracking(){
    var result ={}
    var baseUrl = mainDomain + '/list/tracking';
    isLoadStore.dispatch({type: 'DISPLAY_YES'});

    result = await axios.get(baseUrl)
    .then(res => {
        if(res.data.success === true){
            listTrackingStore.dispatch({type: 'SET', data: res.data.result})
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
        }
    })
    .catch(err => {
        console.log(err);
    })
    return result;
}