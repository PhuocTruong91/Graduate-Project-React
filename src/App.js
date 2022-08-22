import React from 'react';
import Home from './template/client/Home/Home';
import Admin from './template/admin/Admin';
import Account from './template/client/Account/Account';
import IndexPopup from './template/popup/IndexPopup';
import './css/common.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  	return (
		<div>
			<BrowserRouter basename='/Graduate-Project-React'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/admin' element={<Admin />}></Route>
					<Route path='/account' element={<Account />}></Route>
				</Routes>
			</BrowserRouter>
			<IndexPopup></IndexPopup>
		</div>
  	);
}

export default App;
