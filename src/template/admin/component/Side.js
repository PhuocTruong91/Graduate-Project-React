import {Link} from 'react-router-dom';
import React from 'react';

function Side(props) {
    var listOption = [
        {
            name: 'Quản lý dữ liệu',
            link: '/product',
            value: 'data',
        },
        {
            name: 'Quản lý người dùng',
            link: '/user',
            value: 'user',
        },
    ];

    return (  
        <div className="side-admin">
            <div className="container">
                <div className="user-info">
                    <svg width="30" height="30" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16667 0.758911C7.96288 0.758911 6.77089 0.985115 5.65873 1.42461C4.54658 1.8641 3.53606 2.50827 2.68485 3.32035C0.965771 4.96041 0 7.18481 0 9.50421C0 11.8236 0.965771 14.048 2.68485 15.6881C3.53606 16.5001 4.54658 17.1443 5.65873 17.5838C6.77089 18.0233 7.96288 18.2495 9.16667 18.2495C11.5978 18.2495 13.9294 17.3281 15.6485 15.6881C17.3676 14.048 18.3333 11.8236 18.3333 9.50421C18.3333 8.35576 18.0962 7.21855 17.6356 6.15753C17.1749 5.0965 16.4997 4.13242 15.6485 3.32035C14.7973 2.50827 13.7867 1.8641 12.6746 1.42461C11.5624 0.985115 10.3705 0.758911 9.16667 0.758911ZM4.6475 14.9963C5.04167 14.2092 7.44333 13.4396 9.16667 13.4396C10.89 13.4396 13.2917 14.2092 13.6858 14.9963C12.4019 15.9722 10.8083 16.5027 9.16667 16.5004C7.46167 16.5004 5.89417 15.9407 4.6475 14.9963ZM14.9967 13.7282C13.6858 12.2065 10.505 11.6905 9.16667 11.6905C7.82833 11.6905 4.6475 12.2065 3.33667 13.7282C2.3615 12.5166 1.83303 11.0317 1.83333 9.50421C1.83333 5.64753 5.12417 2.50797 9.16667 2.50797C13.2092 2.50797 16.5 5.64753 16.5 9.50421C16.5 11.0958 15.9317 12.5651 14.9967 13.7282ZM9.16667 4.25703C7.38833 4.25703 5.95833 5.6213 5.95833 7.31788C5.95833 9.01447 7.38833 10.3787 9.16667 10.3787C10.945 10.3787 12.375 9.01447 12.375 7.31788C12.375 5.6213 10.945 4.25703 9.16667 4.25703ZM9.16667 8.62968C8.80199 8.62968 8.45226 8.49147 8.1944 8.24546C7.93653 7.99945 7.79167 7.66579 7.79167 7.31788C7.79167 6.96997 7.93653 6.63631 8.1944 6.3903C8.45226 6.14429 8.80199 6.00609 9.16667 6.00609C9.53134 6.00609 9.88108 6.14429 10.1389 6.3903C10.3968 6.63631 10.5417 6.96997 10.5417 7.31788C10.5417 7.66579 10.3968 7.99945 10.1389 8.24546C9.88108 8.49147 9.53134 8.62968 9.16667 8.62968Z" fill="black"/>
                    </svg>
                    <p className="title">{sessionStorage.admin ? JSON.parse(sessionStorage.admin).name : ''}</p>
                </div>
                <div className="admin-option">
                    {
                        listOption ? listOption.map((item) => {return (
                            <div className="admin-option_item" value={item.value} onClick={props.handleSelectShow}>
                                <p value={item.value}>{item.name}</p>
                            </div>
                        )}) : ''
                    }
                </div>
            </div>
        </div>
    );
}

export default Side;