import 'animate.css';
import './App.css';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideBar from './Components';
import Mail from './Components/Mail';
import FolderSideBar from './Components/SideBar/FolderSideBar';
import MainSideBar from './Components/SideBar/MainSideBar';

import DashBoard from './page/DashBoard';
import Login from './page/LoginPage';
import LoadingPage from './page/LoadingPage';

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate('/');
    // if (!isLogin) {
    //   navigate('/login');
    // }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main/*" element={<DashBoard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
