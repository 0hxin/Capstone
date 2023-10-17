import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Baner() {
    const location = useLocation();
    const userId = location.state.userId;
    console.log(userId);

    const navigate = useNavigate();
    function LogOut() {
        navigate('/');
    }

    function PageMove() {
        navigate('/Fazy_Compile', { state: { userId: userId } });
    }
    return (
        <div>
            <header>
                <div style={{ float: 'left', margin: '5px 0px 20px 20px' }}>
                    <label class='Title' style={{ fontSize: '55px', cursor: 'pointer' }}
                        onClick={PageMove}>fazy compile</label>
                </div>
                <div style={{ float: 'right', margin: '70px 10px 0px 0px', fontSize: '18px' }}>
                    <label style={{ marginRight: '6px' }}>{userId}</label>
                    <label class='logout' onClick={LogOut}>로그아웃</label>
                </div>
                <div style={{ clear: 'both' }}>
                    <hr></hr>
                </div>
            </header>
        </div>
    )
}

export default Baner