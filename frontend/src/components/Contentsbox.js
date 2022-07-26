import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import "../style/Contentsbox.css";

// import albedoimg from '../assets/Character_Albedo_Thumb.webp';
// import aloyimg from '../assets/Character_Aloy_Thumb.webp';
// import amberimg from '../assets/Character_Amber_Thumb.webp';

const Contentsbox = () => {

    const [data, setData] = useState([]);
	const [error, setError] = useState(false);

    React.useEffect(() => {
        axios
		.get("https://api.genshin.dev/characters")
		.then(response => {
			//정상적으로 데이터를 불러오면, setData 함수를 이용하여 data 변수에 데이터를 넣는다.
			setData(response.data);
			console.log('setData Complete!');
            // console.log(response.data);
		})
		.catch(Error => {
			//데이터가 정상적으로 불러오지 못하면, setError 함수를 이용하여 error 변수의 값을 true로 전환한다.
			setError(true);
			console.log('setData Error!');
			// console.log(Error);
		});
    }, []);

    // 에러가 발생할 경우 '에러 발생' 문구만 화면에 띄워주기. 
    if (error !== false)
    {
        return '에러가 발생하였습니다.';
    }

    // const src = [albedoimg, aloyimg, amberimg];

    // for (var i = 1; i <= 48; i++)
    // {
    //     data.push(src[i]);
    // }


    console.log(data);

	return (
        <>
            {data && data.map(datas => {
                return (
                    <div className='itemcontainer-body-content-list' key={datas}>
                        <div className='itemcontainer-body-content-list-photo'>
                            <img src={''} height="110" width='110' style={{borderRadius:'20px'}} alt='이미지 파일 오류!'/>
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