import React from 'react';
import {listTrackingStore} from '../../redux/listTracking'
import Side from './component/Side'
import Main from './component/Main'
import '../../css/admin.scss';

function Admin() {
    const [listTracking, setListTracking] = React.useState(listTrackingStore.getState());

    listTrackingStore.subscribe(() =>{
        setListTracking(listTrackingStore.getState())
        console.log(listTrackingStore.getState())
    })
    return ( 
        <div className="admin">
            <Side></Side>
            <Main></Main>
        </div>
    );
}

export default Admin