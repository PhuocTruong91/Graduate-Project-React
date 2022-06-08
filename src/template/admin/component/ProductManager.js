import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import {listTrackingStore} from '../../../redux/listTracking'
import React from 'react';

function ProductManager(props) {
    const [listTracking, setListTracking] = React.useState(listTrackingStore.getState());

    var lastItem = listTracking ? listTracking[listTracking.length - 1] : {};
    var penultimateItem = listTracking ? listTracking[listTracking.length - 2] : {};
    // var compareTotal = lastItem.data_total ? (lastItem.data_total / penultimateItem.data_total > 1 ? true : false) : '';
    // var compareInsert = lastItem.data_total ? (lastItem.data_total / penultimateItem.data_total > 1 ? true : false) : '';
    // var compareUpdate = lastItem.data_total ? (lastItem.data_total / penultimateItem.data_total > 1 ? true : false) : '';
    listTrackingStore.subscribe(() =>{
        setListTracking(listTrackingStore.getState())
        console.log(listTrackingStore.getState())
    })

    return ( 
        <div className="product-manager">
            <div className="product-manager_container">
                <section className="latest-info-data">
                    <div class="latest-info-data_item">
                        <div>
                            <p className='title'>Total</p>
                            <p className="percent"> <CaretUpOutlined /> {lastItem && penultimateItem? (lastItem.data_total / penultimateItem.data_total).toFixed(1): ''} %</p>
                        </div>
                        <p className="amount">{lastItem ? lastItem.data_total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : ''}</p>
                    </div>
                    <div class="latest-info-data_item">
                        <div>
                            <p className='title'>New data</p>
                            <p className="percent"> <CaretUpOutlined /> 10 %</p>
                        </div>
                        <p className="amount">90</p>
                    </div>
                    <div class="latest-info-data_item">
                        <div>
                            <p className='title'>New data</p>
                            <p className="percent"> <CaretUpOutlined /> 10 %</p>
                        </div>
                        <p className="amount">90</p>
                    </div>
                </section>
                <section className="daily-data"></section>
                <section className="total-data"></section>
            </div>
        </div>
     );
}

export default ProductManager;