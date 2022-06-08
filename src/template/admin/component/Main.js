import ProductManager from "./ProductManager";

function MainAdmin(props) {
    return ( 
        <div className="admin-main">
            <ProductManager listAccount={props.listAccount} listTracking={props.listTracking}></ProductManager>
        </div>
     );
}

export default MainAdmin;