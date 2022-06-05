import React from "react";
import ReactPaginate from "react-paginate";
import noimg from '../../../../images/noimg.png';
import {expectedItemStore} from '../../../../redux/user';

function MainItem(props) {
    var list = props.listItem;
    var arrName = [];
    var arrShop = [];
    const [listFavourite, setListFavourite] = React.useState(expectedItemStore.getState());

    expectedItemStore.subscribe(() => {
        setListFavourite(expectedItemStore.getState());
    })

    if(listFavourite){
        listFavourite.map( function (item) {
            arrName.push(item.name ? item.name : '');
            arrShop.push(item.shop ? item.shop : '');
        })
    }

    const [currentPage, setCurrentPage] = React.useState(0);
    const PER_PAGE = 10;
    const offset = PER_PAGE * currentPage;
    const currentPageData = list
        .slice(offset, offset + PER_PAGE)
        .map((item, index) => {
        return (
            <div class="item" cate={item.category} id={item._id}>
                {arrName.includes(item.name) && arrShop.includes(item.store ? item.store : null)?
                <svg class="heart" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.84 2.61012C19.3292 2.09912 18.7228 1.69376 18.0554 1.4172C17.3879 1.14064 16.6725 0.998291 15.95 0.998291C15.2275 0.998291 14.5121 1.14064 13.8446 1.4172C13.1772 1.69376 12.5708 2.09912 12.06 2.61012L11 3.67012L9.94 2.61012C8.9083 1.57842 7.50903 0.998826 6.05 0.998826C4.59096 0.998826 3.19169 1.57842 2.16 2.61012C1.1283 3.64181 0.548706 5.04108 0.548706 6.50012C0.548706 7.95915 1.1283 9.35842 2.16 10.3901L3.22 11.4501L11 19.2301L18.78 11.4501L19.84 10.3901C20.351 9.87936 20.7563 9.27293 21.0329 8.60547C21.3095 7.93801 21.4518 7.2226 21.4518 6.50012C21.4518 5.77763 21.3095 5.06222 21.0329 4.39476C20.7563 3.7273 20.351 3.12087 19.84 2.61012V2.61012Z" fill="#0066FF"/>
                </svg> 
                : ''}
                <img src={item.img ? item.img : noimg} alt='item'/>
                <p>{item.display}</p>
                <p class="name">{item.name}</p>
                <p class="price">
                    {item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}{" "}
                    VNĐ
                </p>
                <a class="btn btn-detail" href={item.link} target="_blank">
                    Xem chi tiết
                </a>
                <p
                    value={item.price}
                    name={item.name}
                    img={item.img}
                    price={item.price}
                    link={item.link}
                    onClick={props.handleDisplayPopup}
                    id={item._id}
                    shop={item.store}
                    class="btn btn-remind"
                >
                    Đặt lời nhắc
                </p>
                </div>
        );
    });
    const pageCount = Math.ceil(list.length / PER_PAGE);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    return list.length > 0 ? (
        <div id={"shop" + props.store} class={"shop " + props.store}>
        <div class="logo-contanier">
            <img class="logo-img" src={props.img} alt={props.store} />
        </div>
        <div class="group-item">{currentPageData}</div>
        <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            previousLinkClassName="pagination__link"
            nextLinkClassName="pagination__link"
            disabledClassName="pagination__link--disabled"
            activeClassName="pagination__link--active"
        ></ReactPaginate>
        </div>
    ) : (
        ""
    );
}

export default MainItem;
