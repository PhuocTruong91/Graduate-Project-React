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
                            <input onChange={handleOnchange} type='checkbox' value={item.value} name={prop.cate}/>
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SideItem;