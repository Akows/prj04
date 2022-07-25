import React from 'react';

import "../style/Mainpage.css";

import Appbar from '../components/Appbar';
import Itemcontainer from '../components/Itemcontainer';

const Mainpage = () => {
	return (
			<div className='main-outer'>

				<Appbar/>

				<Itemcontainer>

				</Itemcontainer>

			</div>
		);
	}

export default Mainpage;