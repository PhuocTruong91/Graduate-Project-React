import {expectedItemStore} from '../../../../redux/user';
import {DeleteItem} from '../../../../controller/Account';
import DeleteFavouriteItem from './DeleteFavouriteItem';
import React from 'react';
import warning from '../../../../images/warning.png'
import {Link} from 'react-router-dom';

function MainList(props) {
    const [listFavourite, setListFavourite] = React.useState(expectedItemStore.getState());
    const [display, setDisplay] = React.useState(false);
    const [id, setId] = React.useState('id');

   
    function togglePopup (event){
        setDisplay(!display);
        setId(event.target.attributes.value.value);
    }

    function closePopup(){
        setDisplay(false);
    }

    function handleDelete (){
        DeleteItem(window.user._id,id);
        setDisplay(false);
    }

    expectedItemStore.subscribe(() => {
        setListFavourite(expectedItemStore.getState());
    })

    function parseDate(date){
        var result = new Date(date)
        return result.toLocaleDateString()
    }
    return ( 
        <div className="list-favourite">
            {listFavourite.length > 0 ? <p className="title">Danh sách yêu thích</p> : ''}
            {
                listFavourite.length > 0? 
                    <div className="list-favourite_container">
                        <div className="group-item">
                            {
                                listFavourite.map( (item) => {return (
                                    <div className="item">
                                        <a href={item.link} target="_blank">
                                            <img src={item.img}></img>
                                        </a>
                                        <a href={item.link} target="_blank">
                                            <div className="info">
                                                <p className="name">{item.name}</p>
                                                <div className="line-info">
                                                    <p>Gía hiện tại:</p>
                                                    <p>{item.presentPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</p>
                                                </div>
                                                <div className="line-info">
                                                    <p>Gía mong muốn:</p>
                                                    <p>{item.priceExpected.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</p>
                                                </div>
                                                <div className="line-info">
                                                    <p>Ngày đặt lời nhắc:</p>
                                                    <p className="create-time">{parseDate(item.createdAt)}</p>
                                                </div>
                                            </div>
                                        </a>
                                        <p className="remove-remind" onClick={togglePopup} value={item.idProduct}>
                                            Xóa lời nhắc
                                            <svg value={item.idProduct} width="20px" height="20px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.0708 6.08826H5.0708H21.0708" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M8.0708 6.08826V4.08826C8.0708 3.55782 8.28151 3.04912 8.65659 2.67404C9.03166 2.29897 9.54037 2.08826 10.0708 2.08826H14.0708C14.6012 2.08826 15.1099 2.29897 15.485 2.67404C15.8601 3.04912 16.0708 3.55782 16.0708 4.08826V6.08826M19.0708 6.08826V20.0883C19.0708 20.6187 18.8601 21.1274 18.485 21.5025C18.1099 21.8775 17.6012 22.0883 17.0708 22.0883H7.0708C6.54037 22.0883 6.03166 21.8775 5.65659 21.5025C5.28151 21.1274 5.0708 20.6187 5.0708 20.0883V6.08826H19.0708Z" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M10.0708 11.0883V17.0883" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M14.0708 11.0883V17.0883" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </p>
                                    </div>
                                )})
                            }
                        </div>
                    </div>
                :
                <div class="nodata">
                    <img src={warning} alt="warning"></img>
                    <p>Chưa có lời nhắc nào được tạo, hãy tạo lời nhắc cho sản phẩm yêu thích của bạn</p>
                    <Link to='/Graduate-Project-React' className='btn-basic blue'>Quay lại trang chủ</Link>
                </div>
            }
            <input type="hidden" id="deleteId"></input>
            <DeleteFavouriteItem handleDelete={handleDelete} display={display} closePopup={closePopup}></DeleteFavouriteItem>
        </div>
     );
}

export default MainList;