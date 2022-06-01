import React from "react";
import Pagination from "react-js-pagination";
import SweetPagination from "sweetpagination";
import ReactPaginate from "react-paginate";

function MainItem(props) {
    var list = props.listItem;
    var listFilter = list.filter((item) => {
        return item.img !== null;
    });

    const [currentPage, setCurrentPage] = React.useState(0);
    const PER_PAGE = 8;
    const offset = PER_PAGE * currentPage;
    const currentPageData = listFilter
        .slice(offset, offset + PER_PAGE)
        .map((item, index) => {
            return (
            <div class="item" cate={item.category}>
                <img src={item.img} />
                <p>{item.display}</p>
                <p class="name">{item.name}</p>
                <p class="price">
                {item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}{" "}
                vnd
                </p>
                <a class="btn btn-detail" href={item.link} target="_blank">
                Xem chi tiết
                </a>
                <p value={item.price} onClick={props.handleDisplayPopup} class="btn btn-remind">
                Đặt lời nhắc
                </p>
            </div>
            );
        });
    const pageCount = Math.ceil(listFilter.length / PER_PAGE);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    return listFilter.length > 0 ? (
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
