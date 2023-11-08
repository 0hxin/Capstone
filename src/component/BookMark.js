import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Baner from './Baner';

function BookMark() {
  const location = useLocation();
  const userId = location.state.userId;
  console.log(userId);

  const [title, setTitle] = React.useState("제목"); //임시로 제목으로 했어요. 원랜비어져야함

  // function DBTitle(){
  //   setTitle("제목") //여기에 디비 넣어야할듯요
  // }

  function ClickTitle(Istitle){
    setTitle(Istitle);
  }
  const navigate = useNavigate();
    function PageMove(click) {
      ClickTitle(click);
      navigate('/SaveFile', { state: { userId: userId, title:title} });
    }

  return (
    <div>
      <div>
        <Baner/>
      </div>
      <nav>
        <div>
          <label class = 'BookMark_EX'>작성 중인 코드를 선택하거나 새 코드를 작성해보세요!</label>
        </div>
      </nav>
      <div class='BMsection'>
        <div class='BM_Box' onClick={()=>PageMove(title)}>
          {/* 플러스 버튼은 if문으로 해야할거 같아용 */}
          <div class = 'BM_Title' value={title} name='title'>
            {title}
            {/* title엔 디비에 넣은 파일 타이틀 */}
          </div>
          <div class = 'BM_Ex'>
            <label>내용</label>
          </div>
        </div>
        <div class='BM_Box'></div>
        <div class='BM_Box'></div>
        <div class='BM_Box'></div>
      </div>
    </div>
  )
}

export default BookMark