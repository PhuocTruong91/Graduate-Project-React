import tgdd from '../../../../images/tgdd.png'
import phone from '../../../../images/loa.png'

function MainItem() {
    return (  
        <div class="shop tgdd">
            <img src={tgdd}/>
            <div class="group-item">
                <div class="item">
                    <img src={phone}/>
                    <p class="name">iPhone 13 Pro Max 128GB</p>
                    <p class="price">30.190.000₫</p>
                    <p class="btn btn-detail">Xem chi tiết</p>
                    <p class="btn btn-remind">Đặt lời nhắc</p>
                </div>
                <div class="item">
                    <img src={phone}/>
                    <p class="name">iPhone 13 Pro Max 128GB</p>
                    <p class="price">30.190.000₫</p>
                    <p class="btn btn-detail">Xem chi tiết</p>
                    <p class="btn btn-remind">Đặt lời nhắc</p>
                </div>
                <div class="item">
                    <img src={phone}/>
                    <p class="name">iPhone 13 Pro Max 128GB</p>
                    <p class="price">30.190.000₫</p>
                    <p class="btn btn-detail">Xem chi tiết</p>
                    <p class="btn btn-remind">Đặt lời nhắc</p>
                </div>
                <div class="item">
                    <img src={phone}/>
                    <p class="name">iPhone 13 Pro Max 128GB</p>
                    <p class="price">30.190.000₫</p>
                    <p class="btn btn-detail">Xem chi tiết</p>
                    <p class="btn btn-remind">Đặt lời nhắc</p>
                </div>
            </div>
        </div>
    );
}

export default MainItem;