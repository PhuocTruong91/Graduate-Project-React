import React from 'react';
function BookPopup(props) {
    const [isvalid, setIsvalid] = React.useState(true);
    const [inputValue, setInputValue] = React.useState('');
    var pattern = /^[0-9]*$/i;

    function handleOnchange (event) {
        var result = (event.target.value.replace(/\./g,'')).match(pattern);
        if(result !== null){
            setIsvalid(true)
        }else{
            setIsvalid(false)
        }
        setInputValue(event.target.value.toString().replace(/\./g,'').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."))
    }
    return ( 
        <div class={"book-popup fade " + (props.displayPopup ?  '' : 'un-fade')}>
            <div class="book-popup_container">
                <p class="title">Đặt lời nhắc</p>
                <div class="present-price">
                    <p class="present-price_title">Giá hiện tại</p>
                    <p>{(props.price ? props.price
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : '') + ' '}
                       VNĐ</p>
                </div>
                <div class="expected-price">
                    <p class="expected-price_title">Giá mong muốn</p>
                    <input onChange={handleOnchange} id="priceInput" value={inputValue} />
                    <span>VNĐ</span>
                    {!isvalid ? <p class="error-text">Giá trị không phù hợp</p> : ''}
                </div>
                <div class="group-button">
                    <p class="cancel" onClick={props.handleDisplayPopup}>Hủy</p>
                    <p class="accept">Đồng ý</p>
                </div>
            </div>
        </div>
     );
}

export default BookPopup;