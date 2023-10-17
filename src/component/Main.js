import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiBookmark, CiSaveDown2 } from 'react-icons/ci';
import Baner from './Baner';
import { ReactDOM } from 'react-dom/client';
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import {EditorView} from "@codemirror/view";

function Main(props) {
    const location = useLocation();
    const userId = location.state.userId;
    console.log(userId);

    const navigate = useNavigate();
    function PageMove() {
        navigate('/BookMark', { state: { userId: userId } });
    }

    return (
        <div>
            <div>
                <Baner />
            </div>
            <nav>
                <div style={{ float: 'left', margin: '-5px 0px 20px -5px' }}>
                    <CiBookmark class='IconBadge' size='25px' style={{ top: '6px' }}
                        onClick={PageMove} />
                    <label style={{ marginLeft: '5px', fontWeight: 'bold', fontSize: '20px' }}>
                        저장 목록
                    </label>
                </div>
                <div style={{ float: 'right', marginTop: '-6px' }}>
                    <button class='ComBtn'>
                        컴파일
                    </button>
                    <button class='SaveBtn'>
                        <CiSaveDown2 size='25px' />
                    </button>
                </div>
                <div class='DPArrange'>
                    <select>
                        <optgroup label='Choose'>
                            <option name='Cpp' value={'Cpp'} selected>CPP</option>
                            <option name='Java' value={'Java'}>Java</option>
                            <option name='Python' value={'Python'}>Python</option>
                        </optgroup>
                    </select>
                </div>
            </nav>
            <section>
                <div class='CodeMirror'>
                    <CodeMirror/>
                </div>
                <div class='CodeSide'>
                    <div class='WhiteLabel'>입력 (Input)</div>
                    <textarea type='text' class='InputText'/>
                    <div class='WhiteLabel'>출력 (Output)</div>
                    <textarea type='text' class='OutputText'/>
                </div>
            </section>
        </div>
    )
}

export default Main