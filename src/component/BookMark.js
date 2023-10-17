import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Baner from './Baner';

function BookMark() {
  const location = useLocation();
  const userId = location.state.userId;
  console.log(userId);

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
      </div>
    </div>
  )
}

export default BookMark