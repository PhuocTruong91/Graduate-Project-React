import SideItem from './SideItem';
import {listItemStore, actionType} from '../../../../redux/listItem';
import {isWarningSigninStore, contentWarningStore} from '../../../../redux/display';

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
                    name :'Máy tính bảng',
                    value: 'TABLET'
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
                    name :'Từ 13 - 18 triệu',
                    value: '13000000-18000000'
                },
                {
                    name :'Trên 18 triệu',
                    value: '18000000-10000000000'
                },
                {
                    name :"Tất cả",
                    value: 'all'
                }
            ]
        },
    ];
    function handleSearch(){
        var value = document.getElementById('searchInput').value;
        if(value.length === 0 ){
            isWarningSigninStore.dispatch({type: 'DISPLAY_YES'});
            contentWarningStore.dispatch({type: 'SET', data: 'Nhập giá trị trước khi tìm kiếm'})
        }else{
            listItemStore.dispatch({type: actionType.getbyname, name: value, isMain: true})
        }
    }
    return ( 
        <div class="side-option">
            <div class="input">
                <input id="searchInput" name="search" type="text"/>
                <svg id="iconSearch" onClick={handleSearch} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.68571 0C8.45888 0 10.1594 0.704386 11.4132 1.9582C12.667 3.21202 13.3714 4.91255 13.3714 6.68571C13.3714 8.34171 12.7646 9.864 11.7669 11.0366L12.0446 11.3143H12.8571L18 16.4571L16.4571 18L11.3143 12.8571V12.0446L11.0366 11.7669C9.82342 12.8024 8.28073 13.3713 6.68571 13.3714C4.91255 13.3714 3.21202 12.667 1.9582 11.4132C0.704386 10.1594 0 8.45888 0 6.68571C0 4.91255 0.704386 3.21202 1.9582 1.9582C3.21202 0.704386 4.91255 0 6.68571 0V0ZM6.68571 2.05714C4.11429 2.05714 2.05714 4.11429 2.05714 6.68571C2.05714 9.25714 4.11429 11.3143 6.68571 11.3143C9.25714 11.3143 11.3143 9.25714 11.3143 6.68571C11.3143 4.11429 9.25714 2.05714 6.68571 2.05714Z" fill="#B3B4B5"/>
                </svg>
            </div>
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