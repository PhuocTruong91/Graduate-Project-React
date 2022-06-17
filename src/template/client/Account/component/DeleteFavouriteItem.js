function DeleteFavouriteItem(props) {
    return ( 
        <div className={"popup-delete popup fade " + (props.display ? '' : 'un-fade')}>
            <div className="container">
                <input type="hidden" id="id"></input>
                <p className='title'>Bạn có chắc chắn muốn hủy theo dõi sản phẩm này</p>
                <div className='group-btn'>
                    <p className="btn-basic blue" onClick={props.handleDelete}>Xác nhận</p>
                    <p className="btn-basic white" onClick={props.closePopup}>Huỷ</p>
                </div>
                <svg onClick={props.closePopup} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3047 5.80322L5.69809 16.4098" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.69531 5.80322L16.3019 16.4098" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
     );
}

export default DeleteFavouriteItem;