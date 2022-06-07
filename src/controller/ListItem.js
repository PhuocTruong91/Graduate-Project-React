import {mainDomain} from './config';
import axios from 'axios';

export function  getItem(data = {}){
    var result ={}

    var baseUrl = mainDomain + 'products?';
    if(data.store) baseUrl = baseUrl + 'store=' + data.store;
    if(data.cate) baseUrl = baseUrl + '&cate=' + data.cate;
    if(data.id) baseUrl = baseUrl + '&id=' + data.id;
    if(data.name) baseUrl = baseUrl + '&name=' + data.name;

    result = axios.get(baseUrl)
    .then(res => {
        return res.data.result;
    })
    .catch(err => {
        console.log(err);
    })
    return result;
}

export async function getItemByName(data = ''){
    var result ={}
    var baseUrl = mainDomain + 'search?name=' + data;
    
    result = await axios.get(baseUrl)
    .then(res => {
        return res.data.result;
    })
    .catch(err => {
        console.log(err);
    })
    return result;
}