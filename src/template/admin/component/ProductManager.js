import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import Section2 from './Section2'
import Section3 from './Section3'
import React from 'react';

function ProductManager(props) {
    const listTracking = props.listTracking;

    var lastItem = listTracking ? listTracking[listTracking.length - 1] : {};
    var penultimateItem = listTracking ? listTracking[listTracking.length - 2] : {};
    var compareTotal = lastItem && penultimateItem ? (lastItem.data_total / penultimateItem.data_total > 1 ? true : false) : '';
    var compareInsert = lastItem.insert_total && penultimateItem.insert_total ? (lastItem.insert_total / penultimateItem.insert_total > 1 ? true : false) : '';
    var compareUpdate = lastItem.update_total && penultimateItem.update_total ? (lastItem.update_total / penultimateItem.update_total > 1 ? true : false) : '';

    return ( 
        <div className="product-manager">
            <div className="product-manager_container">
                <section className="latest-info-data">
                    <p className='section-title'>Cập nhật ngày {new Date().toLocaleDateString()}</p>
                    <div>
                        <div class="latest-info-data_item">
                            <div>
                                <p className='title'>Tổng cộng dữ liệu</p>
                                <p className={"percent " + (compareTotal > 0 ? 'increase' : 'decrease')}> {compareTotal > 0 ? <CaretUpOutlined /> : <CaretDownOutlined/>} {lastItem && penultimateItem? (lastItem.data_total / penultimateItem.data_total).toFixed(1): ''} %</p>
                            </div>
                            <p className="amount">{lastItem ? lastItem.data_total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : ''}</p>
                        </div>
                        <div class="latest-info-data_item">
                            <div>
                                <p className='title'>Dữ liệu được thêm</p>
                                <p className={"percent " + (compareInsert > 0 ? 'increase' : 'decrease')}> {compareInsert > 0 ? <CaretUpOutlined /> : <CaretDownOutlined/>} {lastItem && penultimateItem? (lastItem.insert_total / penultimateItem.insert_total).toFixed(1): ''} %</p>
                            </div>
                            <p className="amount">{lastItem.insert_total}</p>
                        </div>
                        <div class="latest-info-data_item">
                            <div>
                                <p className='title'>Dữ liệu được cập nhật</p>
                                <p className={"percent " + (compareUpdate > 0 ? 'increase' : 'decrease')}> {compareUpdate > 0 ? <CaretUpOutlined /> : <CaretDownOutlined/>} {lastItem && penultimateItem? (lastItem.update_total / penultimateItem.update_total).toFixed(1): ''} %</p>
                            </div>
                            <p className="amount">{lastItem.update_total}</p>
                        </div>
                    </div>
                </section>
                <Section2 listTracking={listTracking}></Section2>
                <Section3 listTracking={listTracking} listProduct={props.listProduct}></Section3>
            </div>
        </div>
     );
}

export default ProductManager;