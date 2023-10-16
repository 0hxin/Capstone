import React, { useState } from 'react'
import style from "./MainStyle.css";
import SingUp from './SingUp';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function SingIn(props) {
    const [isSingUpOpen, setSingUpIsOpen] = useState(false);
    function openSingUp() {
        setSingUpIsOpen(true);
    }
    function closeSingUp() {
        setSingUpIsOpen(false);
    }

    const [id, setId] = React.useState("")
    const [pw, setPw] = React.useState("")

    const [isid, setisId] = React.useState(false)
    const [ispw, setisPw] = React.useState(false)

    function onChangeId(e) {
        const currentId = e.target.value;
        setId(currentId);
        const idRegExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

        if (!idRegExp.test(currentId)) {
            setisId(false)
        } else {
            setisId(true);
        }
    };

    function onChangePassword(e) {
        const currentPassword = e.target.value;
        setPw(currentPassword);
        const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/
        if (!passwordRegExp.test(currentPassword)) {
            setisPw(false);
        } else {
            setisPw(true);
        }
    };

    const navigate = useNavigate();
    function PageMove() {
        if (isid === true && ispw === true) {
            navigate('/Fazy_Compile', { state: { userId: id } })
        }
        else{
            Swal.fire({
                icon : 'error',
                title : '로그인에 실패하였습니다.',
                text : '올바른 이메일 및 비밀번호를 입력해주세요.'
            })
            setId("");
            setPw("");
        }
    }

    return (
        <div>
            <div class="loginBox">
                <div class="Title" style={{ fontSize: '60px', marginTop: '6px', marginBottom: '26px' }}>fazy compile</div>
                <p style={{ marginLeft: '-355px', marginBottom: '3px', fontSize: '20px', fontWeight: 'bold' }}>
                    <label>
                        이메일
                    </label>
                </p>
                <input type='text' class='SingInInput' style={{ marginBottom: '10px' }}
                    name='id' value={id} onChange={onChangeId}></input>

                <p style={{ marginLeft: '-338px', marginBottom: '3px', fontSize: '20px', fontWeight: 'bold' }}>
                    <label>
                        비밀번호
                    </label>
                </p>
                <input type='password' class='SingInInput'
                    name='pw' value={pw} onChange={onChangePassword}></input>

                <div style={{ marginTop: '45px' }}>
                    <button class="loginBtn" onClick={PageMove}>로그인</button>
                </div>
            </div>
            <div style={{ marginTop: '5px' }}>
                <label style={{ color: 'gray' }}>Winding이 처음이신가요?</label>
                <label style={{ marginLeft: '10px', fontWeight: 'bold' }} onClick={openSingUp}>회원가입</label>
                <SingUp isOpen={isSingUpOpen} isClose={closeSingUp}></SingUp>
            </div>
        </div>
    )
}

export default SingIn;