import axios from "axios";
import React, { useState } from "react";

const ListIMG = (props) => {

    const [data, setData] = useState([]);
	const [error, setError] = useState(false);

    // React.useEffect(() => {
    //     axios
	// 	.get(`https://api.genshin.dev/${props.url}/${props.name}/icon`)
	// 	.then(response => {
	// 		//정상적으로 데이터를 불러오면, setData 함수를 이용하여 data 변수에 데이터를 넣는다.
	// 		setData(response.data);
	// 		console.log('Complete!');
    //         // console.log(response.data);
	// 	})
	// 	.catch(Error => {
	// 		//데이터가 정상적으로 불러오지 못하면, setError 함수를 이용하여 error 변수의 값을 true로 전환한다.
	// 		setError(true);
	// 		console.log('Error!');
	// 		// console.log(Error);
	// 	});
    // }, [props.url, props.name]);

    React.useEffect(() => {
        axios.get(`https://api.genshin.dev/${props.url}/${props.name}/icon`, {responseType: 'blob'})
            .then(res => {
                const myFile = new File([res.data], 'imageName')
                const reader = new FileReader()
                reader.onload = ev => {
                    const previewImage = String(ev.target?.result)
                    setData(previewImage)
                }
                reader.readAsDataURL(myFile)
            })
            .catch(Error => {
                setError(true);
                console.log('Error!');
            });
    }, [props.url, props.name]);

    if (error !== false)
    {
        return '에러 발생!.';
    }

    return (
        <>
            <div className='itemcontainer-body-content-list-img'>
                <img src={data} className='itemcontainer-body-content-list-img' alt='이미지 파일 오류!'/>
            </div>

            
            
        </>

    );
}

export default ListIMG;