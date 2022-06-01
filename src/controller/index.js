import axios from 'axios';

var domain = 'https://graduate-nodejs.herokuapp.com/'

export function  getItem(data = {}){
    var result ={}

    var baseUrl = domain + 'products?';
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

export function  getItemByName(data = ''){
    var result ={}
    var baseUrl = domain + 'search?name=' + data;
    
    result = axios.get(baseUrl)
    .then(res => {
        return res.data.result;
    })
    .catch(err => {
        console.log(err);
    })
    return result;
}