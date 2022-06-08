import React from 'react';
import {listTrackingStore} from '../../redux/listTracking'
import {listAccountStore} from '../../redux/user'
import {isLoadStore} from '../../redux/display'
import Side from './component/Side'
import Main from './component/Main'
import '../../css/admin.scss';
import {getListTracking} from '../../controller/ListTracking'
import {getListAccount} from '../../controller/Account'

function Admin() {
    const [listTracking, setListTracking] = React.useState(listTrackingStore.getState());
    const [listAccount, setListAccount] = React.useState(listAccountStore.getState());
    const [isLoad, setIsload] = React.useState(isLoadStore.getState());

    // isLoadStore.subscribe(() => {setIsload(isLoadStore.getState())});
    // if (document.readyState === 'complete') {
    //     getListTracking();
    //     getListAccount();
    // }

    listTrackingStore.subscribe(() =>{
        setListTracking(listTrackingStore.getState())
    })
    listAccountStore.subscribe(() =>{
        setListAccount(listAccountStore.getState())
    })
    
    return ( 
        <div>
            { isLoad ? 
                ''
                :
                <div className="admin">
                    <Side></Side>
                    <Main listAccount={listAccount} listTracking={listTracking}></Main>
                </div>
            }
        </div>
    );
}

export default Admin