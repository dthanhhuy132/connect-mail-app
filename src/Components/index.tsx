import { FC } from 'react';

import mockData from '../mockData';
import WhiteLogo from './Logo/WhiteLogo';
import FolderSideBar from './SideBar/FolderSideBar';
import MainSideBar from './SideBar/MainSideBar';

const SideBar: FC = () => {
  return (
    <div className="h-full">
      <div className="header h-[60px] w-full p-[10px] flex-shrink-0 background-blue-900 text-left flex justify-start">
        <WhiteLogo />
      </div>

      <div className=" w-full h-full flex items-center">
        <div className="h-full w-1/5 background-blue-900 flex flex-col items-center justify-start">
          <MainSideBar></MainSideBar>
        </div>

        <div className="h-full w-4/5 background-blue-800">
          <FolderSideBar />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
