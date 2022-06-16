function MainList(props) {
    return ( 
        <div className="list-favourite">
            <p className="title">Danh sách yêu thích</p>
            {
                window.user.expectedItem ? 
                    <div className="list-favourite_container">
                        {
                            window.user.expectedItem.map( (item) => {return (
                                <p>{item.name}</p>
                            )})
                        }
                    </div>
                :
                ''
            }
        </div>
     );
}

export default MainList;