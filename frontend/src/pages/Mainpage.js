import React, { useState } from 'react';

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
				<CharactersInfo/>
			</div>
		);
	}

export default Mainpage;