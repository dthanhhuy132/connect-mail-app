import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SideBar from '../../Components';
import Mail from '../../Components/Mail';

const DashBoard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log('pathname trong dashboard', location.pathname);

  return (
    <div className="h-screen flex overflow-y-hidden">
      <div className="w-1/6 max-h-full">
        <SideBar />
      </div>
      <div className="w-5/6 h-full">
        <Mail />
      </div>
    </div>
  );
};

export default DashBoard;
