import axios from 'axios';
import {isLoadStore} from '../redux/isLoad'

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

export async function  getItemByName(data = ''){
    var result ={}
    var baseUrl = domain + 'search?name=' + data;
    
    result = await axios.get(baseUrl)
    .then(res => {
        return res.data.result;
    })
    .catch(err => {
        console.log(err);
    })
    return result;
}

export function createAccount(data) {
    var baseUrl = domain + 'create';
    isLoadStore.dispatch({type: 'TOGGLE'});
    axios.post(baseUrl, data)
        .then(function (res) {
            isLoadStore.dispatch({type: 'TOGGLE'});
            if(res.data.success){
                alert('Tạo tài khoản thành công')
            }else{
                alert('Tạo tài khoản không thành công')
            }
        })
        .catch(function (error) {
            isLoadStore.dispatch({type: 'TOGGLE'});
            alert('Tạo tài khoản không thành công')
        });
}