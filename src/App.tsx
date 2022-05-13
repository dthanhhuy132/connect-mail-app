import './App.css';

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideBar from './Components';
import Mail from './Components/Mail';
import FolderSideBar from './Components/SideBar/FolderSideBar';
import MainSideBar from './Components/SideBar/MainSideBar';

import DashBoard from './page/DashBoard';
import Login from './page/LoginPage';

function App() {
  const [isLogin, seIsLogin] = useState(false)
  let navigate = useNavigate();

  useEffect(() => {
    if(!isLogin) {
        navigate("/login");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login seIsLogin={seIsLogin}/>} />
        <Route path="/main/*" element={<DashBoard />}></Route>
        
      
      </Routes>
    </div>
  );
}

export default App;
