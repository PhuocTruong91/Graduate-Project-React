import React from 'react';
import {listTrackingStore} from '../../redux/listTracking'
import {listAccountStore} from '../../redux/user'
import {listAllItemStore} from '../../redux/listItem'
import {isLoadStore} from '../../redux/display'
import Side from './component/Side'
import Main from './component/Main'
import LoginAdmin from './LoginAdmin'
import '../../css/admin.scss';
import {getListTracking} from '../../controller/ListTracking'
import {getListAccount} from '../../controller/Account'
import {getAllItem} from '../../controller/ListItem'

function Admin() {
    const [listTracking, setListTracking] = React.useState(listTrackingStore.getState());
    const [listAccount, setListAccount] = React.useState(listAccountStore.getState());
    const [listProduct, setListProduct] = React.useState(listAllItemStore.getState());
    const [showValue, setShowValue] = React.useState('data');
    const [isLogin, setIslogin] = React.useState(false);
    const [err, setErr] = React.useState(false);

    function handleSelectShow(event) {
        var data = event.target.attributes.value.value;
        setShowValue(data);
    }

    listAccountStore.subscribe(() =>{
        setListAccount(listAccountStore.getState())
    });

    listTrackingStore.subscribe(() =>{
        setListTracking(listTrackingStore.getState())
    });
    
    listAllItemStore.subscribe(() =>{
        setListProduct(listAllItemStore.getState())
    });
    
    function getListData (){
        getListTracking();
        getListAccount();
        getAllItem();
    };

    function handleSignIn () {
        var user = document.querySelector('#userAdmin').value;
        var pass = document.querySelector('#passAdmin').value;
        isLoadStore.dispatch({type: 'DISPLAY_YES'});
        console.log(listAccount)
        listAccount.map((item) => {
            if(item.type === 'admin'){
                if (item.username === user && item.password === pass){
                    window.admin = item;
                    setTimeout(() => {
                        isLoadStore.dispatch({type: 'DISPLAY_NO'});
                        setIslogin(true);
                        setErr(false);
                    }, 1500);
                    
                }else{
                    setTimeout(() => {
                        isLoadStore.dispatch({type: 'DISPLAY_NO'});
                        setIslogin(false);
                        setErr(true);
                    }, 1500);
                }
            }
        });
        setTimeout(() => {
            setErr(true);
            isLoadStore.dispatch({type: 'DISPLAY_NO'});
        }, 1500);
    }

    return ( 
        <div>
            { window.admin ? 
                <div className="admin">
                    <Side handleSelectShow={handleSelectShow}></Side>
                    <Main showValue={showValue} listAccount={listAccount} listTracking={listTracking} listProduct={listProduct}></Main>
                </div>
                :
                <LoginAdmin err={err} handleSignIn={handleSignIn} getListData={getListData} listAccount={listAccount}></LoginAdmin>
            }
        </div>
    );
}

export default Admin