import PopupSuccess from './PopupSuccess'
import CheckEmail from './CheckEmail'
import PopupWarning from './PopupWarning'
import '../../css/popup.scss'
import BeatLoader from "react-spinners/BeatLoader";
import React from 'react';
import {isLoadStore} from './../../redux/display'

function Index() {
    var [isLoad, setIsload] = React.useState(isLoadStore.getState());
    isLoadStore.subscribe(() => {setIsload(isLoadStore.getState())});
    
    return (  
        <div>
            <PopupSuccess></PopupSuccess>
            <PopupWarning></PopupWarning>
            <CheckEmail></CheckEmail>
            { isLoad ? 
				<div class="loader">
					<BeatLoader color="#fff" size={30} />
				</div>  
				:
				''
			}
        </div>
    );
}

export default Index;
