import './mail.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MailHeader from './MailHeader';

import message from '../../mockData';
import changeWidthSize from '../common/changeWidth';
import MailDetail from './MailDetail';
import MailSummarySidebar from './MailSummarySidebar';

import contructionImg from '../../assets/img/contruction.png';

const Mail: React.FC = () => {
  const [isContruction, setIsContruction] = useState(false);
  const location = useLocation();
  const folderTarget = location.pathname.slice(
    location.pathname.lastIndexOf('/') + 1,
    location.pathname.length
  );

  let targetMail: any = [];
  message.forEach((mail) => {
    if (mail.folder === folderTarget) {
      targetMail.push(mail);
    }
  });

  useEffect(() => {
    if (location.pathname.indexOf('email') === -1) {
      setIsContruction(true);
    } else {
      setIsContruction(false);
    }
  }, [location.pathname]);

  changeWidthSize();

  return (
    <>
      <MailHeader />

      <div className=" w-full h-full flex items-center pb-[60px] mail-parent relative">
        {isContruction ? (
          <img src={contructionImg} className="mx-auto mb-[200px]" alt="img" />
        ) : (
          <>
            <div className="absolute top-0 bg-transparent z-10 w-[5px] h-full cursor-col-resize change-size-bar hidden"></div>
            <MailSummarySidebar />
            <MailDetail />
          </>
        )}
      </div>
    </>
  );
};

export default Mail;
