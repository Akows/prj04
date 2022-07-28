import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import "../style/Contents.css";

import star1 from '../assets/Icon_1_Star.webp';
import star2 from '../assets/Icon_2_Stars.webp';
import star3 from '../assets/Icon_3_Stars.webp';
import star4 from '../assets/Icon_4_Stars.webp';
import star5 from '../assets/Icon_5_Stars.webp';

import mondemblem from '../assets/Emblem_Mondstadt.webp';
import liyueemblem from '../assets/Emblem_Liyue.webp';
import inazumaemblem from '../assets/Emblem_Inazuma.webp';
import noraemblem from '../assets/Nora_Emblem.webp';

import bow from '../assets/Icon_Bow.webp';
import catalyst from '../assets/Icon_Catalyst.webp';
import claymore from '../assets/Icon_Claymore.webp';
import polearm from '../assets/Icon_Polearm.webp';
import sword from '../assets/Icon_Sword.webp';

import anemo from '../assets/Element_Anemo.svg';
import cryo from '../assets/Element_Cryo.svg';
import dendro from '../assets/Element_Dendro.svg';
import electro from '../assets/Element_Electro.svg';
import hydro from '../assets/Element_Hydro.svg';
import pyro from '../assets/Element_Pyro.svg';
import geo from '../assets/Element_Geo.svg';
import CharactersInfoSkill from './CharactersInfoSkill';

const Contents = () => {

    const [data, setData] = useState([]);
	const [error, setError] = useState(false);

    const location = useLocation();
	const name = location.state.name;
	const url = location.state.url;
    const imgsrc = location.state.imgsrc;

    React.useEffect(() => {
        axios
		.get(`https://api.genshin.dev/${url}/${name}`)
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
    }, [url, name]);

    if (error !== false)
    {
        return '에러가 발생하였습니다.';
    }

    // 등급 이미지 체크
    var raritysrc = '';

    if (data.rarity === 1) {
        raritysrc = star1;
    }
    else if (data.rarity === 2) {
        raritysrc = star2;
    }
    else if (data.rarity === 3) {
        raritysrc = star3;
    }
    else if (data.rarity === 4) {
        raritysrc = star4;
    }
    else if (data.rarity === 5) {
        raritysrc = star5;
    }

    // 소속 이미지 체크
    var nationsrc = '';

    if (data.nation === 'Mondstadt') {
        nationsrc = mondemblem;
    }
    else if (data.nation === 'Liyue') {
        nationsrc = liyueemblem;
    }
    else if (data.nation === 'Inazuma') {
        nationsrc = inazumaemblem;
    }
    else if (data.name === 'Aloy') {
        nationsrc = noraemblem;
    }

    // 무기종류 이미지 체크
    var weaponsrc = '';

    if (data.weapon === 'Bow' || data.type === 'Bow') {
        weaponsrc = bow;
    }
    else if (data.weapon === 'Catalyst' || data.type === 'Catalyst') {
        weaponsrc = catalyst;
    }
    else if (data.weapon === 'Claymore' || data.type === 'Claymore') {
        weaponsrc = claymore;
    }
    else if (data.weapon === 'Polearm' || data.type === 'Polearm') {
        weaponsrc = polearm;
    }
    else if (data.weapon === 'Sword' || data.type === 'Sword') {
        weaponsrc = sword;
    }

    // 캐릭터 속성 이미지 체크
    var visionsrc = '';

    if (data.vision === 'Anemo') {
        visionsrc = anemo;
    }
    else if (data.vision === 'Cryo') {
        visionsrc = cryo;
    }
    else if (data.vision === 'Dendro') {
        visionsrc = dendro;
    }
    else if (data.vision === 'Electro') {
        visionsrc = electro;
    }
    else if (data.vision === 'Hydro') {
        visionsrc = hydro;
    }
    else if (data.vision === 'Pyro') {
        visionsrc = pyro;
    }
    else if (data.vision === 'Geo') {
        visionsrc = geo;
    }

    // const aa = data.skillTalents[0].name;


    if (url === 'characters')
    {
        return (
            <>
                <div className='contents-body-outer'>
                    <div className='contents-body-upper'>
                        <div className='contents-body-imgrarity'>
                            <img src={imgsrc} className='contents-body-imgrarity-img' alt='이미지 파일 오류!'/>
                            <img src={raritysrc} className='contents-body-imgrarity-rarityimg'  alt='이미지 파일 오류!'/>
                        </div>
                        <div className='contents-body-name'>
                            {data.name} <br/>
                            <img src={visionsrc} className='contents-body-imgrarity-elementimg' alt='이미지 파일 오류!'/>
                            <img src={weaponsrc} className='contents-body-imgrarity-elementimg' alt='이미지 파일 오류!'/>
                        </div>
                    </div>
                    <div className='contents-body-middle'>
                        <div className='contents-body-nataff'>
                            <div className='contents-body-nation'>
                                {data.nation}
                                <img src={nationsrc} className='contents-body-imgrarity-nationimg' alt='이미지 파일 오류!'/>
                            </div>
                            <div className='contents-body-affiliation'>
                                {data.affiliation}
                            </div>
                        </div>
                        <div className='contents-body-desbir'>
                            <div className='contents-body-description'>
                                {data.description}
                            </div>
                            <div className='contents-body-birthday'>
                                {data.birthday}
                            </div>
                        </div>
                    </div>
                    <div className='contents-body-lower'>

                        <CharactersInfoSkill data={data.skillTalents}/>

                        <div className='contents-body-skill'>


                            {/* {data && data.skillTalents.map(datas => {
                                return (
                                    <>
                                        {datas.name}
                                    </>
                                );
                            })} */}

                        </div>

                        <div className='contents-body-passive'>

                        </div>

                        <div className='contents-body-constel'>

                        </div>



                    </div>
                </div>
            </>
        );
    }

    if (url === 'weapons')
    {
        return (
            <>
                <div className='contents-body-outer'>
                    <div className='contents-body-upper'>
                        <div className='contents-body-imgrarity'>
                            <img src={imgsrc} className='contents-body-imgrarity-img' alt='이미지 파일 오류!'/>
                            <img src={raritysrc} className='contents-body-imgrarity-rarityimg'  alt='이미지 파일 오류!'/>
                        </div>

                        <div className='contents-body-name'>
                            {data.name} <br/>
                            <img src={weaponsrc} className='contents-body-imgrarity-elementimg' alt='이미지 파일 오류!'/>
                        </div>
                    </div>

                    <div className='contents-body-middle'>
                        zz
                    </div>

                    <div className='contents-body-lower'>
                        zz
                    </div>

                </div>
            </>
        );
    }

}

export default Contents;