import React from 'react';
import {isWarningSigninStore, contentWarningStore} from '../../redux/display';
import warning from '../../images/warning.png'
function PopupSuccess(props) {
    const [display, setDisplay] = React.useState(isWarningSigninStore.getState());
    const [content, setContent] = React.useState(contentWarningStore.getState());

    isWarningSigninStore.subscribe(function () {setDisplay(isWarningSigninStore.getState())})
    contentWarningStore.subscribe(() => {
        setContent(contentWarningStore.getState());
    })
    function closePopup (){
        isWarningSigninStore.dispatch({type: 'DISPLAY_NO'})
    }
    return ( 
        <div class={"popup-result fade " + (display ? '' : 'un-fade')}>
            <div class="container">
                <img src={warning} alt='success icon'></img>
                <p>{content}</p>
                <svg onClick={closePopup} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3047 5.80322L5.69809 16.4098" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.69531 5.80322L16.3019 16.4098" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    );
}

export default PopupSuccess;