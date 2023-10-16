import React, { useState } from 'react';
import style from "./ModalStyle.css";
import Swal from 'sweetalert2';

function SingUp({ isOpen, isClose }) {
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checkPassword, setcheckPassword] = React.useState("");

  //오류 메시지
  const [idMessage, setIdMessage] = React.useState("");
  const [nameMessage, setNameMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [checkPasswordMessage, setCheckPasswordMessage] = React.useState("");

  //유효성 검사
  const [isId, setIsId] = React.useState(false);
  const [isname, setIsName] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isCheckPassword, setIsCheckPassword] = React.useState(false);

  //최종
  function SignUp() {
    console.log(final_register())
    if (final_register() === true) {
      console.log(id) //DB 연동하면 넣을 자리
      console.log(password) //DB연동하면 넣을 자리
      console.log(name) //DB 연동하면 넣을자리
      // F12 누르면 console.log로 찍힌거 보입니다~
      onReset()
      isClose()
    } //회원가입 완료
    else {
      Swal.fire({
        icon : 'error',
        title : '회원가입에 실패하였습니다.',
        text : '양식에 맞춰 다시 입력해주세요.'
    })
    }
  } //회원가입 버튼

  function onReset() {
    setId("")
    setName("")
    setPassword("")
    setcheckPassword("")
    setIdMessage("")
    setNameMessage("")
    setPasswordMessage("")
    setCheckPasswordMessage("")
    setIsId("")
    setIsPassword("")
    setIsCheckPassword("")
  } //input reset

  //아이디
  function onChangeId(e) {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    if (!idRegExp.test(currentId)) {
      setIdMessage("올바른 이메일을 입력해주세요.");
      setIsId(false)
    } else {
      setIdMessage("사용 가능한 이메일 입니다.");
      setIsId(true);
    }
  };

  //이름
  function onChangeName(e) {
    const currentName = e.target.value;
    setName(currentName);
    if (currentName.length < 2 || currentName.length > 5) {
      setNameMessage("이름은 2~5자로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다.");
      setIsName(true);
    }
  };

  //비밀번호
  function onChangePassword(e) {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("영어 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요.");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };
  //비밀번호체크
  function onChangeCheckPassword(e) {
    const currentCheck = e.target.value;
    setcheckPassword(currentCheck);
    if (currentCheck !== password) {
      setCheckPasswordMessage("비밀번호가 다릅니다.");
      setIsCheckPassword(false);
    } else {
      setCheckPasswordMessage("비밀번호가 같습니다.");
      setIsCheckPassword(true);
    }
  };

  function final_register() {  //회원가입에 필요함!!
    if (isId === true && isname === true && isPassword === true && isCheckPassword === true) {
      return true
    } //회원가입 완료
    else {
      return false
    }
  }

  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div class='Modal'></div>
      <div class='ModalBody'>
        <div style={{ textAlign: 'left' }}>
          <label style={{ fontSize: '30px' }}>지금 페이지 컴파일의</label>
          <br></br>
          <label style={{ fontSize: '30px' }}>회원이 되세요</label>
        </div>
        <p class='ModalP' style={{top : '16%'}}>이름</p>
        <input type='text' class='ModalInput' name='name' style={{top: '22%', left : '7.5%'}}
          value={name} onChange={onChangeName}></input>
        {
          isname === true
            ? <p class='message' style={{top : '27%'}}>{nameMessage}</p>
            : <p class='messageError'style={{top : '27%'}}>{nameMessage}</p>
        }
        <p class='ModalP' style={{top : '31%'}}>아이디</p>
        <input type='text' class='ModalInput' name='id' style={{top: '37%', left : '7.5%'}}
          value={id} onChange={onChangeId}></input>
        {
          isId === true
            ? <p className="message" style={{top : '42%'}}>{idMessage}</p>
            : <p className="messageError" style={{top : '42%'}}>{idMessage}</p>
        }
        <p class='ModalP' style={{top : '46%'}}>비밀번호</p>
        <input type='text' class='ModalInput' name='password' style={{top: '52%', left : '7.5%'}}
          value={password} onChange={onChangePassword}></input>
        {
          isPassword === true
            ? <p class='message' style={{top : '57%'}}>{passwordMessage}</p>
            : <p class='messageError' style={{top : '57%'}}>{passwordMessage}</p>
        }
        <p class='ModalP' style={{top : '61%'}}>비밀번호 확인</p>
        <input type='password' class='ModalInput' name='CheckPassword' style={{top: '67%', left : '7.5%'}}
          value={checkPassword} onChange={onChangeCheckPassword}
          disabled={!isPassword}></input>
        {
          isCheckPassword === true
            ? <p className="message" style={{top : '72%'}}>{checkPasswordMessage}</p>
            : <p className="messageError" style={{top : '72%'}}>{checkPasswordMessage}</p>
        }

        <div>
          <button type='button' id='ModalSingUpBtn' onClick={()=>SignUp()}>회원가입</button>
        </div>
        <div>
          <button type='button' id='ModalCloseBtn'
            onClick={() => { isClose(); onReset(); }}>로그인</button>
        </div>
      </div>
    </div>
  )
}

export default SingUp