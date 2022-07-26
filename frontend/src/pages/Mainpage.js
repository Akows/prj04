import React, { useState } from 'react';

import "../style/Mainpage.css";

import Appbar from '../components/Appbar';
import Contentscontainer from '../components/Contentscontainer';
import Loading from './Loading';

const Mainpage = () => {

	const [loading, setLoading] = useState(true);

    React.useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 500)
    });

	return loading ? <Loading/> :
		(
			<div className='main-outer'>
				<Appbar/>
				<Contentscontainer/>
			</div>
		);
	}

export default Mainpage;