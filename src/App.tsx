import 'animate.css';
import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import DashBoard from './page/DashBoard';
import Login from './page/LoginPage';
import LoadingPage from './page/LoadingPage';

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate('/');

    // eslint-disable-next-line
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
