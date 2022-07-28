import "../style/Appbar.css";
import "../style/PublicCSS.css";

import menuimg from '../assets/menu.png';
import { Link } from "react-router-dom";

const Appbar = () => {
    return (

        <div className='appbar-head'>

            <div className='appbar-head-upper'>
                <div className='appbar-head-upper-menubtu'>
                    <button className='appbar-head-upper-button'>
                        <img src={menuimg} alt={'이미지 오류!'} className='appbar-head-upper-buttonimg' />
                    </button>
                </div>
                <div className='appbar-head-upper-apptitle'>
                    <Link to="/">
                    <div className='appbar-head-upper-titletext'>
                        Genshindex
                    </div>
                    </Link>
                </div>
            </div>

            <div className='appbar-head-lower'>
                <div className='appbar-head-lower-area1'>
                    <Link to="/characters">
                    <button className='appbar-head-lower-button'>
                        Characters
                    </button>
                    </Link>
                </div>
                <div className='appbar-head-lower-area2'>
                    <Link to="/weapons">
                    <button className='appbar-head-lower-button'>
                        Weapons
                    </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Appbar;