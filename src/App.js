import React from 'react';
import Home from './template/client/Home/Home';
import Admin from './template/admin/Admin';
import IndexPopup from './template/popup/IndexPopup';
import './css/common.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />}></Route>
					<Route path='admin' element={<Admin />}></Route>
				</Routes>
			</BrowserRouter>
			<IndexPopup></IndexPopup>
		</div>
  	);
}

export default App;
