import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductManager from "./ProductManager";
import UserManager from "./UserManager";

function MainAdmin(props) {
    return ( 
        <div className="admin-main">
            <ProductManager listTracking={props.listTracking}></ProductManager>
        </div>
     );
}

export default MainAdmin;