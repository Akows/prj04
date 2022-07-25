import React, { useState } from "react";
import axios from 'axios';

import "../style/Itemcontainer.css";

const Itemcontainer = () => {

	const [data, setData] = useState(null);
	const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        axios
		.get("https://jsonplaceholder.typicode.com/todos/")
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
    }, []);


    // 에러가 발생했을 때
    if (error) {
        return '에러 발생!';
    }

    return (
        <div className='itemcontainer-body'>
            <div className='itemcontainer-body-content'>

                {data&&data.map(datas => {
                    return (
                        <div className='itemcontainer-body-content-list' key={datas.id}>
                            <div className='itemcontainer-body-content-list-text'>
                                {datas.title}
                            </div>

                            <div className='itemcontainer-body-content-list-photo'>
                                {datas.id}
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default Itemcontainer;