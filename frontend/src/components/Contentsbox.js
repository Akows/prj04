import React from "react";

import "../style/Contentsbox.css";

import ContentsImg from "./ContentsImg";

const Contentsbox = (props) => {
	return (
        <>
            {props && props.data.map(datas => {
                return (
                    <div className='itemcontainer-body-outer' key={datas}>
                        <div className='itemcontainer-body-content-list'>
                            
                            <ContentsImg name={datas} url={props.url}/>
                            
                            <div className='itemcontainer-body-content-list-text'>
                                <div className='itemcontainer-body-content-list-name'>
                                    {datas}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
	);
}

export default Contentsbox;