import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiBookmark } from 'react-icons/ci';
import DropDown from './DropDown';

function Main(props) {
    const location = useLocation();
    const userId = location.state.userId;
    console.log(userId);

    const navigate = useNavigate();
    function PageMove(){
        navigate('/BookMark', {state : {userId : userId}});
    }

    return (
        <div>
            <header>
                <div style={{ float: 'left', marginTop: '20px', marginLeft: '15px' }}>
                    <CiBookmark class='IconBadge' size='25px' style={{ top: '6px' }}
                        onClick={PageMove} />
                    <label style={{ marginLeft: '5px', fontWeight: 'bold', fontSize: '20px' }}>
                        저장 목록
                    </label>
                </div>
                <div style={{float : 'right', marginRight : '15px'}}>
                    <label class='Title' style={{fontSize : '50px'}}>fazy compile</label>
                </div>
            </header>
            <nav>
                <div style={{float : 'left', marginTop : '10px'}}>
                    <DropDown/>
                </div>
            </nav>
        </div>
    )
}

export default Main