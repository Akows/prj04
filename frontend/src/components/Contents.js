import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import "../style/Contents.css";

import albedoimg from '../assets/Character_Albedo_Thumb.webp';
import aloyimg from '../assets/Character_Aloy_Thumb.webp';
import amberimg from '../assets/Character_Amber_Thumb.webp';

const Contents = () => {

    const [data, setData] = useState([]);
	const [error, setError] = useState(false);

    const location = useLocation();
	const name = location.state.name;

    React.useEffect(() => {
        axios
		.get(`https://api.genshin.dev/characters/${name}`)
		.then(response => {
			//정상적으로 데이터를 불러오면, setData 함수를 이용하여 data 변수에 데이터를 넣는다.
			setData(response.data);
			console.log('Complete!');
            // console.log(response.data);
		})
		.catch(Error => {
			//데이터가 정상적으로 불러오지 못하면, setError 함수를 이용하여 error 변수의 값을 true로 전환한다.
			setError(true);
			console.log('Error!');
			// console.log(Error);
		});
    }, [name]);

    if (error !== false)
    {
        return '에러가 발생하였습니다.';
    }

    var imgsrc = '';

    if (data.name === 'Albedo') {
        imgsrc = albedoimg;
    }
    else if (data.name === 'Aloy') {
        imgsrc = aloyimg;
    }
    else if (data.name === 'Amber') {
        imgsrc = amberimg;
    }

    var vision = '';


    if (data.vision === 'Geo') {
        vision = 'G';
    }

    console.log(data);

	return (
        <>
            <img src={imgsrc} height="110" width='110' style={{borderRadius:'20px'}} alt='이미지 파일 오류!'/>

            <br/>
            <br/>

            {data.name}

            <br/>
            <br/>

            {vision}

            <br/>
            <br/>

            {data.affiliation}

        </>
	);
}

export default Contents;