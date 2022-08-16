import axios from "axios";
import React, { useState } from "react";
import Loading from "../pages/Loading";
import "../style/CharactersInfo.css";

import Contentsbox from "./Contentsbox";

const CharactersInfo = () => {

    const [data, setData] = useState([]);
	const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const url = 'characters';

    let startNum = 0;
    let endNum = 7;

    const readData = () => {
        axios
		.get("https://api.genshin.dev/characters")
		.then(response => {
            setData(response.data.slice(startNum, endNum));
            setLoading(false);
            setError(false);
		});
        endNum += 3;
    };

    const handleScroll = (event) => {
        // // 스크롤 바의 위치 (최상단 지점)
        // console.log('top : ', event.target.documentElement.scrollTop);
        // // 실제 내부 픽셀의 길이
        // console.log('window : ', window.innerHeight);
        // // 스크롤의 총 길이
        // console.log('height : ', event.target.documentElement.scrollHeight);

        if (window.innerHeight + event.target.documentElement.scrollTop + 1 >= event.target.documentElement.scrollHeight) {
            readData();
        }
    };

    React.useEffect(() => {
        readData();
        window.addEventListener('scroll', handleScroll);
    }, []);

    // React.useEffect(() => {
    //     axios
	// 	.get("https://api.genshin.dev/characters")
	// 	.then(response => {
	// 		//정상적으로 데이터를 불러오면, setData 함수를 이용하여 data 변수에 데이터를 넣는다.
	// 		setData(response.data);
    //         setLoading(false);
	// 		console.log('setData Complete!');
    //         // console.log(response.data);
	// 	})
	// 	.catch(Error => {
	// 		//데이터가 정상적으로 불러오지 못하면, setError 함수를 이용하여 error 변수의 값을 true로 전환한다.
	// 		setError(true);
	// 		console.log('setData Error!');
	// 		// console.log(Error);
	// 	});
    // }, []);

    // 에러가 발생할 경우 '에러 발생' 문구만 화면에 띄워주기. 
    if (error !== false){
        return '에러가 발생하였습니다.';
    }
    else if (loading !== false){
        return <Loading/>;
    }
    else {
        return (
            <div className='itemcontainer-body'>
                <div className='itemcontainer-body-content'>
                    <Contentsbox 
                    data={data} 
                    url={url} 
                    />
                </div>
            </div>
        );
    }
}

export default CharactersInfo;