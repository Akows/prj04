import React from "react";
import { Link } from "react-router-dom";

import "../style/Contentsbox.css";

import albedoimg from '../assets/Character_Albedo_Thumb.webp';
import aloyimg from '../assets/Character_Aloy_Thumb.webp';
import amberimg from '../assets/Character_Amber_Thumb.webp';

const Contentsbox = (props) => {
	return (
        <>
            {props && props.data.map(datas => {

                var imgsrc = '';

                if (datas === 'albedo') 
                    imgsrc = albedoimg;
                else if (datas === 'aloy') 
                    imgsrc = aloyimg;
                else if (datas === 'amber') 
                    imgsrc = amberimg;
                
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