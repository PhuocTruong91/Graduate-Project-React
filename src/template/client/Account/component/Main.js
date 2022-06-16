import MainInfo from './MainInfo';
import MainList from './MainList';

function MainAccount(props) {
    return ( 
        <div className="main">
            {
                props.showData === 'info' ?  <MainInfo></MainInfo> : <MainList></MainList>
            }
        </div>
     );
}

export default MainAccount;