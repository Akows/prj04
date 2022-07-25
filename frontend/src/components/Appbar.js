import "../style/Appbar.css";

const Appbar = () => {
    return (

        <div className='appbar-head'>
            <div className='appbar-head-upper'>
                <div className='appbar-head-upper-menubtu'>
                    <button className='appbar-head-upper-button'>
                        btu1
                    </button>
                </div>
                <div className='appbar-head-upper-apptitle'>
                    <p>Genshindex</p>
                </div>
                <div className='appbar-head-upper-etcbtu'>
                    <button className='appbar-head-upper-etcbutton'>
                        btu2
                    </button>
                    <button className='appbar-head-upper-etcbutton'>
                        btu3
                    </button>
                    <button className='appbar-head-upper-etcbutton'>
                        btu4
                    </button>
                </div>
            </div>
            <div className='appbar-head-lower'>
                <div className='appbar-head-lower-area1'>
                    <button className='appbar-head-lower-button'>
                        btu1
                    </button>
                </div>
                <div className='appbar-head-lower-area2'>
                    <button className='appbar-head-lower-button'>
                        btu2
                    </button>
                </div>
                <div className='appbar-head-lower-area3'>
                    <button className='appbar-head-lower-button'>
                        btu3
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Appbar;