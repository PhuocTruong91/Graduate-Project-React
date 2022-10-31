import React from 'react';
import Home from './template/client/Home/Home';
import Admin from './template/admin/Admin';
import Account from './template/client/Account/Account';
import IndexPopup from './template/popup/IndexPopup';
import './css/common.scss';
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
			{/* <MessengerCustomerChat
				pageId="106761812238913"
				appId="2508642169281267"
			/> */}
			{/* <MessengerCustomerChat
				pageId="100086242666455"
				appId="441659350368423"
			/> */}
			<MessengerCustomerChat
				pageId="106172958935015"
				appId="2960111497624310"
			/>
		</div>
  	);
}

export default App;
