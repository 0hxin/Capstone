import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import StartPage from './component/StartPage';
import LoginPage from './component/SingIn';
import SingUpPage from './component/SingUp';
import MainPage from './component/Main';
import BookMark from './component/BookMark';
import SaveFile from './component/SaveFile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<StartPage/>}></Route>
          <Route path='/SingIn' element={<LoginPage/>}></Route>
          <Route path='/SingUp' element={<SingUpPage/>}></Route>
          <Route path = '/Fazy_Compile' element={<MainPage/>}></Route>
          <Route path='/BookMark' element={<BookMark/>}></Route>
          <Route path='/SaveFile' element={<SaveFile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
