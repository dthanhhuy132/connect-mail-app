import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import message from '../../mockData';
import getFolderName from '../common/getFolderName';
import getMailId from '../common/getMailId';
import MailSumary from './MailSumary';

const MailSumarySidebar = () => {
  const [isActive, setIsActive] = useState(99999999999999999999999999999);
  const navigate = useNavigate();
  const location = useLocation();

  const folderTarget = getFolderName(location.pathname);
  const { mailId, isMailIdValid } = getMailId(location.pathname);

  function handleClickOnLink(mail: any, index: number) {
    navigate(`email/${folderTarget}/${mail._id}`);
    setIsActive(index);
  }

  let targetMail: any = [];
  message.forEach((mail) => {
    if (mail.folder === folderTarget) {
      targetMail.push(mail);
    }
  });

  useEffect(() => {
    setIsActive(9999999999999999999999999);
  }, [folderTarget]);

  return (
    <div
      className={`h-full w-1/5 flex flex-col items-center justify-start border-r-[1px] ${
        targetMail.length > 0 ? 'overflow-y-scroll' : 'border-r-2'
      } grab-to-change-size-left`}
    >
      {targetMail.length > 0 &&
        targetMail.map((item: any, index: number) => (
          <div
            key={index}
            className={`${isActive === index ? 'mail-sumary-active' : ''}`}
            onClick={() => handleClickOnLink(item, index)}
          >
            <MailSumary mail={item} index={index} />
          </div>
        ))}
    </div>
  );
};

export default MailSumarySidebar;
