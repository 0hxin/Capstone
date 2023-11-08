import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Baner from './Baner';
import { VscDebugStart } from 'react-icons/vsc';
import EXFileModal from './EXFileModal';

function SaveFile(props) {
    const location = useLocation();
    const userId = location.state.userId;
    const title = location.state.title;
    console.log(userId);
    console.log(title); //제목 넘어와용

    const navigate = useNavigate();
    function PageMove() {
        navigate('/BookMark', { state: { userId: userId } });
    }

    const [isEXFileOpen, setEXFileIsOpen] = useState(false);
    function openEXFile() {
        setEXFileIsOpen(true);
    }
    function closeEXFile() {
        setEXFileIsOpen(false);
    }


    return (
        <div>
            <div>
                <Baner />
            </div>
            <nav>
                <div style={{ float: 'left' }}>
                    <div class='Language'>CPP</div>
                    {/* 여기에 뭔 언어로 저장했는지 */}
                </div>
                <div style={{ float: 'right', marginRight: '-10px' }}>
                    <button class='ComBtn' onClick={()=>PageMove()}>
                        돌아가기
                    </button>
                </div>
            </nav>
            <section>
                <div class='SaveContent'>
                    <div class='SaveTitle'>
                        title
                    </div>
                    <div class='SaveHistory'>
                        <div class='SaveTime'>시간
                            <button class='SaveDebug' onClick={openEXFile}>
                                <VscDebugStart />
                            </button>
                        </div>
                        <div class='SaveChat'>어쩌구저쩌구</div>
                    </div>
                    <div class='SaveHistory'>
                        <div class='SaveTime'>시간
                            <button class='SaveDebug' onClick={openEXFile}>
                                <VscDebugStart />
                            </button>
                        </div>
                        <div class='SaveChat'>어쩌구저쩌구</div>
                    </div>
                </div>
            </section>
            <EXFileModal isOpen={isEXFileOpen} isClose={closeEXFile}/>
        </div>
    )
}

export default SaveFile