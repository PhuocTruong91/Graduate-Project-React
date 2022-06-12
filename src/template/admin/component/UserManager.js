import React from 'react';
import {typePopupAccountStore} from '../../../redux/admin';
import { isPopupAccountStore, isWarningSigninStore, contentWarningStore, isDeleteAccountStore } from '../../../redux/display';
import { getListAccount } from '../../../controller/Account';

function UserManager(props) {
    var listAccount = props.listAccount;
    var [data, setData] = React.useState({});

    function selectItem(event){
        var list = document.querySelectorAll('tr');
        var data = JSON.parse(event.target.attributes.value.value);

        list.forEach(item => {
            item.classList.remove('active');
        })
        event.target.closest('tr').classList.add('active');
        setData(data);
        getListAccount();
    }
    
    function sortType (a,b){
        return (a.type > b.type) ? 1 :  -1;
    }
    listAccount.sort(sortType);

    function updateAccount(){
        if(data._id !== undefined){
            document.querySelector('.popup-account .container #title').innerText = 'Cập nhật thông tin nguời dùng';
            document.querySelector('.popup-account #type').value = 'UPDATE';
            document.querySelector('#id').value = data._id;
            document.querySelector('#name').value = data.name;
            document.querySelector('#username').value = data.username;
            document.querySelector('#email').value = data.email;
            document.querySelector('#phone').value = data.phone;
            document.querySelector('#password').value = data.password;
            typePopupAccountStore.dispatch({type: 'SET', data: 'UPDATE'});
            isPopupAccountStore.dispatch({type: 'DISPLAY_YES'});
        }else{
            isWarningSigninStore.dispatch({type: 'DISPLAY_YES'});
            contentWarningStore.dispatch({type: 'SET', data: 'Chọn trường dữ liệu cần cập nhật'});
        }
    }

    function addAccount(){
        document.querySelector('.popup-account .container #title').innerText = 'Thêm người dùng';
        document.querySelector('.popup-account #type').value = 'ADD';
        document.querySelector('.popup-account #id').value = '';
        document.querySelector('.popup-account #name').value = '';
        document.querySelector('.popup-account #username').value = '';
        document.querySelector('.popup-account #email').value = '';
        document.querySelector('.popup-account #phone').value = '';
        document.querySelector('.popup-account #password').value = '';
        typePopupAccountStore.dispatch({type: 'SET', data: 'ADD'});
        isPopupAccountStore.dispatch({type: 'DISPLAY_YES'});
    }

    function deleteAccount(){
        if(data._id !== undefined){
            document.querySelector('.popup-delete #id').value = data._id;
            isDeleteAccountStore.dispatch({type: 'DISPLAY_YES'});
            setData({})
        }else{
            isWarningSigninStore.dispatch({type: 'DISPLAY_YES'});
            contentWarningStore.dispatch({type: 'SET', data: 'Chọn trường dữ liệu cần xoá'});
        }
    }
    return ( 
        <div className="user-manager">
            <section className="total-user">
                <p className='section-title'>Tổng hợp nguời dùng</p>
                <table>
                    <tr className='title'>
                        <td>ID</td>
                        <td>Tên người dùng</td>
                        <td>Email</td>
                        <td>Số điện thoại</td>
                        <td>Tên đăng nhập</td>
                        <td>Mật khẩu</td>
                        <td>Loại người dùng</td>
                    </tr>
                    {
                        listAccount.map( (item) => { return(
                            <tr className='user' value={item.id} onClick={selectItem}>
                                <td value={JSON.stringify(item)}>{item._id}</td>
                                <td value={JSON.stringify(item)}>{item.name}</td>
                                <td value={JSON.stringify(item)}>{item.email}</td>
                                <td value={JSON.stringify(item)}>{item.phone}</td>
                                <td value={JSON.stringify(item)}>{item.username}</td>
                                <td value={JSON.stringify(item)}>{item.password}</td>
                                <td value={JSON.stringify(item)}>{item.type ? item.type.toUpperCase() : ''}</td>
                            </tr>
                        )
                        })
                    }
                </table>
                <div className="group-button">
                    <p className="btn-basic add" onClick={addAccount}>Thêm</p>
                    <p className="btn-basic update" onClick={updateAccount}>Cập nhật</p>
                    <p className="btn-basic delete" onClick={deleteAccount}>Xoá</p>
                </div>
            </section>
        </div>
     );
}

export default UserManager;