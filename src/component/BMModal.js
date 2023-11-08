import React, { useState } from 'react'
import style from "./ModalStyle.css";
import { IoIosCloseCircle } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { CiSaveDown2 } from 'react-icons/ci';

function BMModal({ isOpen, isClose, isuserId }) {
    // console.log("+" + isuserId); //아이디 잘 넘어옵니당
    const [isCommentFile, setCommentFile] = useState(true); //네모박스 보이게 안보이게
    function openCommentFile() {
        setCommentFile(false);
    }
    function closeCommentFile(){
        setCommentFile(true);
    }
    function isReset(){ //x표시 눌렀을 때
        setCommentFile(true);
        isClose();
    }
    return (
        <div style={{ display: isOpen ? "block" : "none" }}>
            <div class='Modal'></div>
            <div class='BMModalBody'>
                <div>
                    <label class='BMTitle'>저장하려는 파일을 선택해주세요.</label>
                    <IoIosCloseCircle class='BMIcon' onClick={() => isReset()} />
                </div>
                <div style={{ clear: 'both' }}>
                    <hr class='BMHr'></hr>
                </div>
                {/* 네모박스 플러스 클릭 전 */}
                <div style={{ display: isCommentFile ? "block" : "none", textAlign: 'center' }}>
                    <div class='ModalBox'  onClick={() => openCommentFile()}>
                        <AiOutlinePlus class='BMPlus' />
                    </div>
                </div>

                {/* 네모박스 플러스 클릭 후 */}
                <div style={{ display: isCommentFile ? "none" : "block" }}>
                    <div class='BMComment'>name</div>
                    <div style={{ clear: 'both' }}>
                        <textarea class='BMInput' placeholder='파일 이름' type='text'></textarea>
                    </div>
                    <div class='BMComment'>comment</div>
                    <div style={{ clear: 'both' }}>
                        <textarea class='BMInput' placeholder='파일에 대한 설명을 입력해주세요' type='text' style={{ height: '150px' }}></textarea>
                    </div>
                    <div style={{ float: 'right' }}>
                        <button class='BMBtn_back' onClick={()=> closeCommentFile() }>
                            뒤로 가기
                        </button>
                        <button class='BMBtn_save'>
                            <CiSaveDown2 size='25px' />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BMModal