import React, { useState } from 'react';
import style from "./MainStyle.css";
import { Link } from 'react-router-dom';


function StartPage(props) {
    return (
        <div>
            <div class="Title">fazy compile</div>
            <div class="box">
                <label style={{ fontSize: '25px' }}>부담없이 시작하는 코딩의 첫 걸음</label>
            </div>
            <div class="box2">
                <Link to="/SingIn">
                    <button class="startBtn">시작하기</button>
                </Link>
            </div>
        </div>
    )
}

export default StartPage;