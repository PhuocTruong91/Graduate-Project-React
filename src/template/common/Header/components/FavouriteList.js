function FavouriteList(props) {
    return ( 
        <div className={"favourite-list fade " + (props.displayFavouriteList ? '' : 'in-active')}>
            <div class="favourite-list_container">
                {
                    props.listFavourite ? 
                    props.listFavourite.map ( (item) => {
                        return(
                            <a href={item.link} target="_blank" rel="noreferrer">
                                <div class="favourite-item">
                                    <img src={item.img}></img>
                                    <div className="group-info">
                                        <p className="title">{item.name}</p>
                                        <div className="group-price old">
                                            <p>Giá hiện tại</p>
                                            <p>{item.presentPrice ? item.presentPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : ''} VNĐ</p>
                                        </div>
                                        <div className="group-price new">
                                            <p>Giá mong muốn</p>
                                            <p>{item.priceExpected ? item.priceExpected.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : ''} VNĐ</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        )
                    }) 
                    : ''
                }
                
            </div>
        </div> 
    );
}

export default FavouriteList;