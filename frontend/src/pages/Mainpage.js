import React from 'react';

import "../style/Mainpage.css";

import Appbar from '../components/Appbar';
import Contentscontainer from '../components/Contentscontainer';

const Mainpage = () => {
	return (
			<div className='main-outer'>
				<Appbar/>
				<Contentscontainer/>
			</div>
		);
	}

export default Mainpage;