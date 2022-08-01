import React from 'react';

import "../style/Loading.css";
import "../style/PublicCSS.css";

const Loading = () => {
    return (
        <div className='loading-outer'>
            <div className='loading-text'>
                <p>
                    Loading..
                </p>
            </div>
        </div>
    )
};

export default Loading;
