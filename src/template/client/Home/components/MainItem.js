import React from "react";
import Pagination from "react-js-pagination";
import SweetPagination from "sweetpagination";

function MainItem(props) {
  var list = props.listItem;
  const [currentPageData, setCurrentPageData] = React.useState(list);

  React.useEffect(function (){
    setCurrentPageData(list)
  }, [list])
  console.log(list)
  return list.length > 0 ? (
    <div id={"shop" + props.store} class={"shop " + props.store}>
      <div class="logo-contanier">
        <img class="logo-img" src={props.img} alt={props.store} />
      </div>
      <div class="group-item">
        {list
          ? list.map(function (item) {
              if (item.img) {
                return (
                  <div class="item" cate={item.category}>
                    <img src={item.img} />
                    <p>{item.display}</p>
                    <p class="name">{item.name}</p>
                    <p class="price">
                      {item.price
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}{" "}
                      vnd
                    </p>
                    <a class="btn btn-detail" href={item.link} target="_blank">Xem chi tiết</a>
                    <p onClick={props.handleDisplayPopup} class="btn btn-remind">Đặt lời nhắc</p>
                  </div>
                );
              }
            })
          : ""}
      </div>
      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={1}
        getData={currentPageData}
        navigation={true}
      />
    </div>
  ) : (
    ""
  );
}

export default MainItem;
