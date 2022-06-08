import React from 'react';
import {listTrackingStore} from '../../redux/listTracking'
import {listAccountStore} from '../../redux/user'
import {isLoadStore} from '../../redux/display'
import Side from './component/Side'
import Main from './component/Main'
import LoginAdmin from './LoginAdmin'
import '../../css/admin.scss';
import {getListTracking} from '../../controller/ListTracking'
import {getListAccount} from '../../controller/Account'

function Admin() {
    const [listTracking, setListTracking] = React.useState(listTrackingStore.getState());
    const [listAccount, setListAccount] = React.useState(listAccountStore.getState());
    const [isLogin, setIslogin] = React.useState(false);
    const [err, setErr] = React.useState(false);

    listAccountStore.subscribe(() =>{
        setListAccount(listAccountStore.getState())
    });

    listTrackingStore.subscribe(() =>{
        setListTracking(listTrackingStore.getState())
    });
    
    function getListData (){
        getListTracking();
        getListAccount();
    };

    function handleSignIn () {
        var user = document.querySelector('#userAdmin').value;
        var pass = document.querySelector('#passAdmin').value;
        isLoadStore.dispatch({type: 'DISPLAY_YES'});
        listAccount.map((item) => {
            if(item.type === 'admin'){
                if (item.username === user && item.password === pass){
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
            { isLogin ? 
                <div className="admin">
                    <Side></Side>
                    <Main listAccount={listAccount} listTracking={listTracking}></Main>
                </div>
                :
                <LoginAdmin err={err} handleSignIn={handleSignIn} getListData={getListData} listAccount={listAccount}></LoginAdmin>
            }
        </div>
    );
}

export default Admin