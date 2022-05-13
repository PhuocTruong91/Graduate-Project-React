import React from 'react';
import Header from './template/common/Header/Header';
import Home from './template/client/Home/Home';

function App() {
  	return (
		<div>
			<Header></Header>
			<div class="content-body">
				<Home></Home>
			</div>
		</div>
  	);
}

export default App;
