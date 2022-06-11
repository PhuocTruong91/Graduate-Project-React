import ProductManager from "./ProductManager";

function MainAdmin(props) {
    return ( 
        <div className="admin-main">
            <ProductManager listAccount={props.listAccount} listTracking={props.listTracking} listProduct={props.listProduct}></ProductManager>
        </div>
     );
}

export default MainAdmin;