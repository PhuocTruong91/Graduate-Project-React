import SideItem from './SideItem'

function Side(props) {
    var list = [
        {
            title: 'Danh mục',
            cate: 'cate',
            listItem: [
                {
                    name :'Điện thoại',
                    value: 'PHONE'
                }, 
                {
                    name :'Máy tính',
                    value: 'LAPTOP'
                },
                {
                    name :'Loa & Tai nghe',
                    value: 'SOUND'
                },
                {
                    name :'Phụ kiện',
                    value: 'ACCESSORIES'
                },
                {
                    name :'Đồng hồ',
                    value: 'WATCH'
                }, 
                {
                    name :'Tất cả',
                    value: 'all'
                },
            ]
        },
        {
            title: 'Giá',
            cate: 'price',
            listItem: [
                {
                    name :'Dưới 2 triệu',
                    value: '0-2000000'
                },
                {
                    name :'Từ 2 - 4 triệu',
                    value: '2000000-4000000'
                },
                {
                    name :'Từ 4 - 7 triệu',
                    value: '4000000-7000000'
                },
                {
                    name :'Từ 7 - 13 triệu',
                    value: '7000000-13000000'
                },
                {
                    name :'Trên 13 triệu',
                    value: '13000000-100000000'
                },
                {
                    name :"Tất cả",
                    value: 'all'
                }
            ]
        },
    ];

    return ( 
        <div class="side-option">
            {
                list.map( (item,index) => {
                    return <SideItem getListCate={props.getListCate} key={index} title={item.title} cate={item.cate} listItem={item.listItem}></SideItem>
                    }
                )
            }
        </div> 
    );
}

export default Side;