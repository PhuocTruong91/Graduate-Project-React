import Header from "../../common/Header/Header";
import MainAccount from './component/Main';
import SideAccount from './component/Side';

import React from 'react';

function Account(props) {
    const [showData, setShowData] = React.useState('info');

    function handleClick (event) {
        setShowData(event.target.attributes.value.value);
    }


    return ( 
        <div className="account">
            <Header type="account"></Header>
            <div className="content">
                <SideAccount showData={showData} handleClick={handleClick}></SideAccount>
                <MainAccount showData={showData}></MainAccount>
            </div>
        </div>
     );
}

export default Account;