import $ from 'jquery';

function SideItem(prop) {
    function handleOnchange(event) {
        prop.getListCate(event.target.value, event.target.name);
    }

    return (  
        <div class="item">
            <p class="title">{prop.title}</p>
            <div class="group-item">
                {prop.listItem.map((item, index) => {
                    return (
                        <div class="item-checkbox">
                            {prop.cate === 'shop' ? 
                                (
                                <input type='checkbox' value={item.value} name={prop.cate + '_' + item.value}/>
                                ) : 
                                (<input onChange={handleOnchange} type='radio' value={item.value} name={prop.cate}/>)
                            }
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SideItem;