import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../style/ContentsImg.css";

import akuoumaru from '../assets/Weapon_Akuoumaru.webp';
import calamity_queller from '../assets/Weapon_Calamity_Queller.webp';
import cinnabar_spindle from '../assets/Weapon_Cinnabar_Spindle.webp';
import eberlasting_moonglow from '../assets/Weapon_Everlasting_Moonglow.webp';
import haran_geppaku_futsu from '../assets/Weapon_Haran_Geppaku_Futsu.webp';
import kaguras_verity from '../assets/Weapon_Kaguras_Verity.webp';
import mouuns_moon from '../assets/Weapon_Mouuns_Moon.webp';
import oathsworn_eye from '../assets/Weapon_Oathsworn_Eye.webp';
import polar_star from '../assets/Weapon_Polar_Star.webp';
import prototype_archaic from '../assets/Weapon_Prototype_Archaic.webp';
import redhorn_stonethresher from '../assets/Weapon_Redhorn_Stonethresher.webp';
import royal_spear from '../assets/Weapon_Royal_Spear.webp';
import wavebreakers_fin from '../assets/Weapon_Wavebreakers_Fin.webp';

const ContentsImg = (props) => {

    const [data, setData] = useState([]);
    // const [error, setError] = useState(false);

    // API 호출시 고화질 이미지를 불러오는 경로는 icon-big, 그런데 무기 이미지에는 저화질 icon 경로만 존재함. 
    // 따라서 url을 판별하여 무기 이미지는 저화질 이미지를 불러와주어야하므로 imgsize 변수와 if문을 이용하여 경로를 변경하도록 함.
    var imgsize = 'icon-big';

    if (props.url === 'weapons') {
        imgsize = `icon`;
    }

    // 캐릭터 이미지들은 대부분 big-icon을 가지고 있으나, 4개 캐릭터는 icon만 존재함.
    // 따라서 마찬가지의 방법으로 경로를 손보아 이미지 출력이 정상적으로 되도록 조치함.
    if (props.name === 'thoma' || props.name === 'traveler-anemo' || props.name === 'traveler-electro' || props.name === 'traveler-geo') {
        imgsize = `icon`;
    }

    // 일부 무기의 경우 API에 이미지 데이터가 존재하지 않음.
    // 따라서 이 경우 이미지 데이터를 프로젝트 구조 내부에 배치하여 직접 연결하도록 조치함.
    React.useEffect(() => {
        axios.get(`https://api.genshin.dev/${props.url}/${props.name}/${imgsize}`, {responseType: 'blob'})
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
                // setError(true);
                // console.log('Error!');
            });

            if (props.name === 'akuoumaru')
            setData(akuoumaru);
            else if (props.name === 'calamity-queller')
            setData(calamity_queller);
            else if (props.name === `cinnabar -spindle`)
            setData(cinnabar_spindle);
            else if (props.name === 'eberlasting-moonglow')
            setData(eberlasting_moonglow);
            else if (props.name === 'haran-geppaku-futsu')
            setData(haran_geppaku_futsu);
            else if (props.name === 'kaguras-verity')  
            setData(kaguras_verity);
            else if (props.name === `mouun's-moon`)
            setData(mouuns_moon);
            else if (props.name === 'oathsworn-eye')
            setData(oathsworn_eye);
            else if (props.name === 'polar-star')
            setData(polar_star);
            else if (props.name === 'prototype-archaic')
            setData(prototype_archaic);
            else if (props.name === 'redhorn-stonethresher')
            setData(redhorn_stonethresher);
            else if (props.name === 'royal-spear')
            setData(royal_spear);
            else if (props.name === `wavebreaker's-fin`)
            setData(wavebreakers_fin);

    }, [props.url, props.name, imgsize]);

    // 에러가 발생할 경우 '에러 발생' 문구만 화면에 띄워주기. 
    // if (error !== false)
    // {
    //     return '에러가 발생하였습니다.';
    // }

    return (
        <Link to={`/${props.name}`} state={{name: props.name, imgsrc: data, url: props.url}} >
            <div className='contentsimg-photo'>
                <img src={data} className='contentsimg-image' alt=''/>
            </div>
        </Link>
    );
}

export default ContentsImg;