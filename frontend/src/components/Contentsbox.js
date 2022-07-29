import React from "react";
import { Link } from "react-router-dom";

import "../style/Contentsbox.css";



import ContentsImg from "./ContentsImg";

const Contentsbox = (props) => {
	return (
        <>
            {props && props.data.map(datas => {
                return (
                    <div className='itemcontainer-body-outer' key={datas}>
                        <Link to={`/${datas}`} state={{name: datas, imgsrc: imgsrc, url: props.url}} >
                        <div className='itemcontainer-body-content-list'>
                            <div className='itemcontainer-body-content-list-photo'>

                                <ContentsImg name={datas} url={props.url}/>

                                {/* <img src={imgsrc} className='itemcontainer-body-content-list-img' alt='이미지 파일 오류!'/> */}
                            </div>
                            <div className='itemcontainer-body-content-list-text'>
                                <div className='itemcontainer-body-content-list-name'>
                                    {datas}
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                );
            })}
        </>
	);
}

export default Contentsbox;