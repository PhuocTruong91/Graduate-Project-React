import $ from 'jquery';

function SideItem(prop) {
    return (  
        <div class="item">
            <p class="title">{prop.title}</p>
            <div class="group-item">
                {prop.listItem.map(item => {
                    return (
                        <div class="item-checkbox">
                            <input type="checkbox" value={item.value} name={prop.cate + '_' + item.value}/>
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SideItem;