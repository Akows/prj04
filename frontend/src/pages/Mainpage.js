import React, { useState } from 'react';

import "../style/Mainpage.css";

import Appbar from '../components/Appbar';
import CharactersInfo from '../components/CharactersInfo';
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
				<CharactersInfo/>
			</div>
		);
	}

export default Mainpage;