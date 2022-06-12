import DataTable from 'react-data-table-component';

function Section3(props) {
    const listProduct = props.listProduct;
    const newList = [];
    listProduct.forEach(item =>{
        delete item.img;
        delete item.info;
        delete item.link;

        switch (item.store) {
            case 'TZ':
                item.store = 'Topzone'
                break;
            case 'TGDD':
                item.store = 'Thế giới di động'
                break;
            case 'FPT':
                item.store = 'FPT'
                break;
            case 'HH':
                item.store = 'Hoàng Hà'
                break;
            case 'VT':
                item.store = 'Viettel'
                break;
            default:
                break;
        }

        item.price = item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        newList.push(item);
    });
    const columns = [
        {
            name: 'Id',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'Tên sản phẩm',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Giá sản phẩm',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'Shop',
            selector: row => row.store,
            sortable: true,
        },
        {
            name: 'Danh mục',
            selector: row => row.category,
            sortable: true,
        },
    ];
    
    const data = newList;

    return (
        <section className="total-data">
            <p className='section-title'>Thông tin sản phẩm</p>
            <DataTable
                columns={columns}
                data={data}
                pagination
            />
        </section>
    );

}

export default Section3;
