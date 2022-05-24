import axios from 'axios';

export function  getItem(data = {}){
    var result ={}

    var baseUrl = 'https://graduate-nodejs.herokuapp.com/products?';
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
    var baseUrl = 'https://graduate-nodejs.herokuapp.com/search?name=' + data;
    
    console.log(baseUrl)
    result = axios.get(baseUrl)
    .then(res => {
        console.log(res.data.result)
        return res.data.result;
    })
    .catch(err => {
        console.log(err);
    })
    return result;
}