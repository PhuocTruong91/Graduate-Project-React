import axios from 'axios';

axios.get(`https://graduate-nodejs.herokuapp.com/products`)
    .then(res => {
        const result = res.data.result;
})