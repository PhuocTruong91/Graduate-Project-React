import {mainDomain} from './config';
import axios from 'axios';
import {isLoadStore, isUpdateProductStore} from '../redux/display';

export function updateProduct(id, price){
    var result ={}

    var baseUrl = mainDomain + 'product/update?id=' + id + '&price=' + price;
    isLoadStore.dispatch({type: 'DISPLAY_YES'});
    result = axios.post(baseUrl)
    .then(res => {
        isLoadStore.dispatch({type: 'DISPLAY_NO'});
        isUpdateProductStore.dispatch({type: 'DISPLAY_NO'});
        return res.data.result;
    })
    .catch(err => {
        isLoadStore.dispatch({type: 'DISPLAY_NO'});
        isUpdateProductStore.dispatch({type: 'DISPLAY_NO'});
        console.log(err);
    })
    return result;
}