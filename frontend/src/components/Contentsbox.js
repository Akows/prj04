import React, { useState } from "react";
import axios from 'axios';

import "../style/Contentsbox.css";

import albedoimg from '../assets/Character_Albedo_Thumb.webp';
import { Link } from "react-router-dom";

const Contentsbox = () => {

    const [data, setData] = useState(null);
	const [error, setError] = useState(false);

    React.useEffect(() => {
        axios
		.get("https://api.genshin.dev/characters")
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

    let imgsrc = "기본 이미지 경로";

    if (data === 'albedo')
    {
        imgsrc = albedoimg;
    }

    if (error !== false)
    {
        return '에러가 발생하였습니다.';
    }

	return (
        <>
            {data && data.map(datas => {
                return (
                    <div className='itemcontainer-body-content-list' key={datas}>
                        <div className='itemcontainer-body-content-list-photo'>
                            <img src={imgsrc} height="110" width='110' style={{borderRadius:'20px'}} alt='이미지 파일 오류!'/>
                        </div>

                        <div className='itemcontainer-body-content-list-text'>
                            <Link to={`/${datas}`} state={{name: datas}} >
                                {datas}
                            </Link>
                        </div>
                    </div>
                );
            })}
        </>
	);
}

export default Contentsbox;