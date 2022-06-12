import ProductManager from "./ProductManager";
import UserManager from './UserManager';

function MainAdmin(props) {
    return ( 
        <div className="admin-main">
            {
                props.showValue === 'data' ? 
                    <ProductManager listAccount={props.listAccount} listTracking={props.listTracking} listProduct={props.listProduct}></ProductManager> :
                    <UserManager listAccount={props.listAccount}></UserManager>
            }
            
        </div>
     );
}

export default MainAdmin;