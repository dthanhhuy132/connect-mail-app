import './mail.css';

import MailHeader from './MailHeader';
import MailSumary from './MailSumary';

import message from '../../mockData';
import { useLocation } from 'react-router-dom';
import changeWidthSize from '../common/changeWidth';
import MailDetail from './MailDetail';
import MailSummarySidebar from './MailSummarySidebar';

const Mail: React.FC = () => {
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

  changeWidthSize();

  return (
    <>
      <MailHeader />

      <div className=" w-full h-full flex items-center pb-[60px] mail-parent relative">
        <div className="absolute top-0 bg-transparent z-10 w-[5px] h-full cursor-col-resize change-size-bar hidden"></div>
        <MailSummarySidebar />
        <MailDetail />
      </div>
    </>
  );
};

export default Mail;
