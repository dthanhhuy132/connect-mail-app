import SideBar from '../../Components';
import Mail from '../../Components/Mail';

const DashBoard = () => {
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
