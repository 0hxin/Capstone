import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function BookMark() {
  const location = useLocation();
  const userId = location.state.userId;
  console.log(userId);

  const navigate = useNavigate();
  function PageMove(){
      navigate('/');
  }

  return (
    <div>
      <header>
        <div style={{ float: 'left', margin : '5px 0px 20px 20px' }}>
          <label class='Title' style={{ fontSize: '55px' }}>fazy compile</label>
        </div>
        <div style={{ float: 'right', margin: '70px 10px 0px 0px', fontSize : '18px' }}>
          <label style={{ marginRight: '6px' }}>{userId}</label>
          <label class='logout' onClick={PageMove}>로그아웃</label>
        </div>
        <div style={{ clear : 'both'}}>
          <hr></hr>
        </div>
      </header>
      <nav>
        <div>
          <label class = 'BookMark_EX'>작성 중인 코드를 선택하거나 새 코드를 작성해보세요!</label>
        </div>
      </nav>
      <section>
        <div class='BM_Box'>
          {/* 플러스 버튼은 if문으로 해야할거 같아용 */}
          <div class = 'BM_Title'>
            <label>제목</label>
          </div>
          <div class = 'BM_Ex'>
            <label>내용</label>
          </div>
        </div>
        <div class='BM_Box'></div>
        <div class='BM_Box'></div>
        <div class='BM_Box'></div>
      </section>
    </div>
  )
}

export default BookMark