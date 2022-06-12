function SideItem(prop) {
    function handleOnchange(event) {
        prop.getListCate(event.target.value, event.target.name);
    }

    return (  
        <div className="item">
            <p className="title">{prop.title}</p>
            <div className="group-item">
                {prop.listItem.map((item, index) => {
                    return (
                        <div key={index} className="item-checkbox">
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