import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loading-page.css';

const LoadingPage = () => {
  const [applyAnimate, setIsApplyAnimate] = useState(false);
  setTimeout(() => setIsApplyAnimate(true), 750);

  const navigate = useNavigate();

  const isLogin = localStorage.getItem('LOGIN_LUON_DI_EM_OI');

  useEffect(() => {
    if (!isLogin) {
      setTimeout(() => {
        navigate('/login');
      }, 2700);
    } else {
      setTimeout(() => {
        navigate('/main');
      }, 2700);
    }
  });

  return (
    <div className="m-w-screen h-screen bg-blue-900 flex justify-center items-center flex-col">
      <div className="flex text-[3rem] mb-[-20px] items-center">
        <div className="text-white font-bold text-[15rem] dth-c-text">C</div>
        <div
          className={`text-white ml-[-30px] dth-text-full animate__animated ${
            !applyAnimate && 'animate__zoomInRight'
          } ${applyAnimate && 'animate__shakeX'} `}
        >
          ONNECT APP
        </div>
      </div>
      <div className="border-1 w-[500px] h-[40px] p-5 border-2 border-white rounded-[20px] relative">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
