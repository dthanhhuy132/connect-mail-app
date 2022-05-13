import './mail.css';

import MailHeader from './MailHeader';
import MailSumary from './MailSumary';

import message from '../../mockData';
import { useLocation } from 'react-router-dom';
import changeWidthSize from '../common/changeWidth';
import MailDetail from './MailDetail';
import { useEffect, useState } from 'react';


import contructionImg from '../../assets/img/contruction.png'
import getFolderName from '../common/getFolderName';
import getMailId from '../common/getMailId';
import MailSumarySidebar from './MailSumarySidebar';

const folderSidebar = ['inbox', 'personal', 'travel', 'finance', 'spam'];


const Mail: React.FC = () => {
  const [isContruction, setIsContruction] = useState(false);
  const location = useLocation();

  const folderTarget = getFolderName(location.pathname);
  const {mailId, isMailIdValid} = getMailId(location.pathname)


  console.log('mailId',mailId)
  console.log('isMailIdValid',isMailIdValid)

  let targetMail: any = [];
  message.forEach((mail) => {
    if (mail.folder === folderTarget) {
      targetMail.push(mail);
    }
  });

  changeWidthSize();

  useEffect(() => {
    if (location.pathname.indexOf('email') === -1) {
      setIsContruction(true);
    } else setIsContruction(false);

    console.log('ham co chay vao cho nay khong')
  }, [location.pathname]);

  return (
    <>
      <MailHeader />
     
      <div className=" w-full h-full flex items-center pb-[60px]">
        {isContruction ? (
          <div className="flex justify-center items-center mx-auto">
            <img src={contructionImg} alt="" />
          </div>
        ) : (
          <>
            <MailSumarySidebar />
            <MailDetail />
          </>
        )}
      </div>
    </>
  );
};

export default Mail;
