import React from 'react';

import Side from './components/Side'
import Main from './components/Main'
import { getItem, getItemByName } from '../../../controller';
import '../../../css/home.scss'


function Home() {
    var [listItem, setListItem] = React.useState([]);
    var [isLoad, setIsload] = React.useState(false);

    function getListCate(data, type){
        setIsload(true);
        if (type === 'cate'){
            getItem({cate: data})
            .then(res =>{
                setListItem(res, [])
                setIsload(false);
            })
            .catch( err =>{
                console.log(err);
                setIsload(false);
            });
        }
        if (type === 'price'){
           console.log('nothing to do')
           setIsload(false);
        }
    }

    function getListByName() {
        var value = document.getElementById('searchInput').value;
        setIsload(true);
        getItemByName(value)
            .then(res =>{
                setListItem(res, [])
                setIsload(false);
            })
            .catch( err =>{
                console.log(err);
                setIsload(false);
        });
    }  

    return ( 
        <div class="homepage">
            <Side getListCate={getListCate}></Side>
            <Main getListByName={getListByName} isLoad={isLoad} listItem={listItem}></Main>
        </div>
        
    );
}

export default Home;    