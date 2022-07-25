import axios from 'axios';
import React, { useState } from 'react';

import "../style/Contents.css";

const Contents = (name) => {

    const [data, setData] = useState(null);
	const [error, setError] = useState(false);

    React.useEffect(() => {
        axios
		.get(`https://api.genshin.dev/characters/${name}`)
		.then(response => {
			//정상적으로 데이터를 불러오면, setData 함수를 이용하여 data 변수에 데이터를 넣는다.
			setData(response.data);
			console.log('data download complete.');
		})
		.catch(Error => {
			//데이터가 정상적으로 불러오지 못하면, setError 함수를 이용하여 error 변수의 값을 true로 전환한다.
			setError(true);
			console.log('Error detected.');
			console.log(Error);
		});
    }, [name]);

    if (error !== false)
    {
        return '에러가 발생하였습니다.';
    }

	return (
        <>
            {data && data.map(datas => {
                return (
                    <>
                    {datas.name}
                    </>
                );
            })}
        </>
	);
}

export default Contents;