import React from 'react';
import Header from './template/common/Header/Header';
import Home from './template/client/Home/Home';
import IndexPopup from './template/popup/IndexPopup';
import './css/common.scss';

function App() {
  	return (
		<div>
			<Header></Header>
			<div class="content-body">
				<Home></Home>
			</div>
			<IndexPopup></IndexPopup>
		</div>
  	);
}

export default App;
