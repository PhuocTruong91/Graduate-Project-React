import {mainDomain} from './config';
import {isLoadStore, isCheckEmailStore} from '../redux/display'
import axios from 'axios';

export function checkEmail(email, number){
    var baseUrl = mainDomain + 'checkemail?email=' + email + '&number=' + number;
    isLoadStore.dispatch({type: 'DISPLAY_YES'});
    axios.get(baseUrl)
        .then(function (res) {
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
            isCheckEmailStore.dispatch({type: 'DISPLAY_YES'});
        })
        .catch(function (error) {
            console.log(error)
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
    });
}