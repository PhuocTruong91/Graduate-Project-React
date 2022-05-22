import phone from '../../../../images/loa.png'

function MainItem(props) {
    var list = props.listItem;
    return (  
        <div class={'shop ' + props.store}>
            <div class="logo-contanier">
                <img class="logo-img" src={props.img}/>
            </div>
            <div class="group-item">
                {list ?     
                    list.map(function(item){
                        if(item.category = 'PHONE'){
                            return (
                                <div class="item">
                                    <img src={item.img}/>
                                    <p class="name">{item.name}</p>
                                    <p class="price">{item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} vnd</p>
                                    <p class="btn btn-detail">Xem chi tiết</p>
                                    <p class="btn btn-remind">Đặt lời nhắc</p>
                                </div>
                            )
                        }
                    })
                    :
                    ''}
            </div>
        </div>
    );
}

export default MainItem;