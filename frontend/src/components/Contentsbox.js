import React from "react";
import { Link } from "react-router-dom";

import "../style/Contentsbox.css";

import albedoimg from '../assets/Character_Albedo_Thumb.webp';
import aloyimg from '../assets/Character_Aloy_Thumb.webp';
import amberimg from '../assets/Character_Amber_Thumb.webp';
import aratakiittoimg from '../assets/Character_Arataki_Itto_Thumb.webp';
import ayakaimg from '../assets/Character_Kamisato_Ayaka_Thumb.webp';
import barbaraimg from '../assets/Character_Barbara_Thumb.webp';
import beidouimg from '../assets/Character_Beidou_Thumb.webp';
import bennettimg from '../assets/Character_Bennett_Thumb.webp';
import chongyunimg from '../assets/Character_Chongyun_Thumb.webp';
import dilucimg from '../assets/Character_Diluc_Thumb.webp';
import dionaimg from '../assets/Character_Diona_Thumb.webp';
import eulaimg from '../assets/Character_Eula_Thumb.webp';
import fischlimg from '../assets/Character_Fischl_Thumb.webp';
import ganyuimg from '../assets/Character_Ganyu_Thumb.webp';
import gorouimg from '../assets/Character_Gorou_Thumb.webp';
import hutaoimg from '../assets/Character_Hu_Tao_Thumb.webp';
import jeanimg from '../assets/Character_Jean_Thumb.webp';
import kaeyaimg from '../assets/Character_Kaeya_Thumb.webp';
import kazuhaimg from '../assets/Character_Kaedehara_Kazuha_Thumb.webp';
import keqingimg from '../assets/Character_Keqing_Thumb.webp';
import kleeimg from '../assets/Character_Klee_Thumb.webp';
import kokomiimg from '../assets/Character_Sangonomiya_Kokomi_Thumb.webp';
import lisaimg from '../assets/Character_Lisa_Thumb.webp';
import monaimg from '../assets/Character_Mona_Thumb.webp';
import ningguangimg from '../assets/Character_Ningguang_Thumb.webp';
import noelleimg from '../assets/Character_Noelle_Thumb.webp';
import qiqiimg from '../assets/Character_Qiqi_Thumb.webp';
import raidenimg from '../assets/Character_Raiden_Shogun_Thumb.webp';
import razorimg from '../assets/Character_Razor_Thumb.webp';
import rosariaimg from '../assets/Character_Rosaria_Thumb.webp';
import saraimg from '../assets/Character_Kujou_Sara_Thumb.webp';
import sayuimg from '../assets/Character_Sayu_Thumb.webp';
import shenheimg from '../assets/Character_Shenhe_Thumb.webp';
import sucroseimg from '../assets/Character_Sucrose_Thumb.webp';
import tartagliaimg from '../assets/Character_Tartaglia_Thumb.webp';
import thomaimg from '../assets/Character_Thoma_Thumb.webp';
import travelerimg from '../assets/Character_Traveler_Thumb.png';
import ventiimg from '../assets/Character_Venti_Thumb.webp';
import xianglingimg from '../assets/Character_Xiangling_Thumb.webp';
import xiaoimg from '../assets/Character_Xiao_Thumb.webp';
import xingqiuimg from '../assets/Character_Xingqiu_Thumb.webp';
import xinyanimg from '../assets/Character_Xinyan_Thumb.webp';
import yaemikoimg from '../assets/Character_Yae_Miko_Thumb.webp';
import yanfeiimg from '../assets/Character_Yanfei_Thumb.webp';
import yoimiyaimg from '../assets/Character_Yoimiya_Thumb.webp';
import yunjinimg from '../assets/Character_Yun_Jin_Thumb.webp';
import zhongliimg from '../assets/Character_Zhongli_Thumb.webp';

const Contentsbox = (props) => {
	return (
        <>
            {props && props.data.map(datas => {

                var imgsrc = '';

                // 자바스크립트 switch문 사용 예시
                // switch(datas) {
                //     case 'albedo': 
                //         imgsrc = albedoimg; 
                //         break;
                //     case 'aloy': 
                //         imgsrc = aloyimg;
                //         break;
                //     case 'amber': 
                //         imgsrc = amberimg;
                //         break;
                // }

                // if-else if문 사용시.
                if (datas === 'albedo') 
                    imgsrc = albedoimg;
                else if (datas === 'aloy') 
                    imgsrc = aloyimg;
                else if (datas === 'amber') 
                    imgsrc = amberimg;
                else if (datas === 'arataki-itto')
                    imgsrc = aratakiittoimg;
                else if (datas === 'ayaka')
                    imgsrc = ayakaimg;
                else if (datas === 'barbara')
                    imgsrc = barbaraimg;
                else if (datas === 'beidou')
                    imgsrc = beidouimg;
                else if (datas === 'bennett')
                    imgsrc = bennettimg ;
                else if (datas === 'chongyun')
                    imgsrc = chongyunimg ;
                else if (datas === 'diluc')
                    imgsrc = dilucimg;
                else if (datas === 'diona')
                    imgsrc = dionaimg;
                else if (datas === 'eula')
                    imgsrc = eulaimg;
                else if (datas === 'fischl')
                    imgsrc = fischlimg;
                else if (datas === 'ganyu')
                    imgsrc = ganyuimg;
                else if (datas === 'gorou')
                    imgsrc = gorouimg;
                else if (datas === 'hu-tao')
                    imgsrc = hutaoimg;
                else if (datas === 'jean')
                    imgsrc = jeanimg;
                else if (datas === 'kaeya')
                    imgsrc = kaeyaimg;
                else if (datas === 'kazuha')
                    imgsrc = kazuhaimg;
                else if (datas === 'keqing')
                    imgsrc = keqingimg;
                else if (datas === 'klee')
                    imgsrc = kleeimg;
                else if (datas === 'kokomi')
                    imgsrc = kokomiimg;
                else if (datas === 'lisa')
                    imgsrc = lisaimg;
                else if (datas === 'mona')
                    imgsrc = monaimg;
                else if (datas === 'ningguang')
                    imgsrc = ningguangimg;
                else if (datas === 'noelle')
                    imgsrc = noelleimg;
                else if (datas === 'qiqi')
                    imgsrc = qiqiimg;
                else if (datas === 'raiden')
                    imgsrc = raidenimg;
                else if (datas === 'razor')
                    imgsrc = razorimg;
                else if (datas === 'rosaria')
                    imgsrc = rosariaimg;
                else if (datas === 'sara')
                    imgsrc = saraimg;
                else if (datas === 'sayu')
                    imgsrc = sayuimg;
                else if (datas === 'shenhe')
                    imgsrc = shenheimg;
                else if (datas === 'sucrose')
                    imgsrc = sucroseimg;
                else if (datas === 'tartaglia')
                    imgsrc = tartagliaimg;
                else if (datas === 'thoma')
                    imgsrc = thomaimg;
                else if (datas === 'traveler-anemo')
                    imgsrc = travelerimg;
                else if (datas === 'traveler-electro')
                    imgsrc = travelerimg;
                else if (datas === 'traveler-geo')
                    imgsrc = travelerimg;
                else if (datas === 'venti')
                    imgsrc = ventiimg;
                else if (datas === 'xiangling')
                    imgsrc = xianglingimg;
                else if (datas === 'xiao')
                    imgsrc = xiaoimg;
                else if (datas === 'xingqiu')
                    imgsrc = xingqiuimg;
                else if (datas === 'xinyan')
                    imgsrc = xinyanimg;
                else if (datas === 'yae-miko')
                    imgsrc = yaemikoimg;
                else if (datas === 'yanfei')
                    imgsrc = yanfeiimg;
                else if (datas === 'yoimiya')
                    imgsrc = yoimiyaimg;
                else if (datas === 'yun-jin')
                    imgsrc = yunjinimg;
                else if (datas === 'zhongli')
                    imgsrc = zhongliimg;

                return (
                    <div className='itemcontainer-body-content-list' key={datas}>
                        <div className='itemcontainer-body-content-list-photo'>
                            <img src={imgsrc} height="110" width='110' style={{borderRadius:'20px'}} alt='이미지 파일 오류!'/>
                        </div>

                        <div className='itemcontainer-body-content-list-text'>
                            <Link to={`/${datas}`} state={{name: datas, imgsrc: imgsrc}} >
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