import React from 'react';

import "../style/Loading.css";
import "../style/PublicCSS.css";

import imgsrc from '../assets/genshin-impact-logo.png';

const Loading = () => {
    return (
        <div className='loading-outer'>
            <div className='loading-imgdiv'>
                <img 
                    className='loading-img'
                    src={imgsrc} 
                    alt='이미지 파일 오류!'/>
            </div>

            <div className='loading-text'>
                <p>
                    Loading..
                </p>
            </div>
        </div>
    )
};

export default Loading;
