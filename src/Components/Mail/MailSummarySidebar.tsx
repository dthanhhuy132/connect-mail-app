import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import message from '../../mockData';
import getFolderName from '../common/getFolderName';
import MailSumary from './MailSumary';

import randomUnreadEmail from '../common/randomUnreadEmail';

const MailSumarySidebar = () => {
  const [isActive, setIsActive] = useState(99999999999999999999999999999);
  const [randomArr, setRandomArr] = useState(randomUnreadEmail(15));
  const navigate = useNavigate();
  const location = useLocation();

  const folderTarget = getFolderName(location.pathname);

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
    setIsActive(99999999999999999999999);
    setRandomArr(randomUnreadEmail(targetMail.length));
    // eslint-disable-next-line
  }, [folderTarget]);

  return (
    <div
      className={`h-full w-1/4 flex flex-col items-center justify-start border-r-[1px] ${
        targetMail.length > 0 ? 'overflow-y-scroll' : 'border-r-2'
      } grab-to-change-size-left`}
    >
      {targetMail.length > 0 ? (
        targetMail.map((item: any, index: number) => (
          <div key={index} onClick={() => handleClickOnLink(item, index)}>
            <MailSumary mail={item} index={index} randomArr={randomArr} isActive={isActive} />
          </div>
        ))
      ) : (
        <p className="mt-5 text-[2rem] ">Choose your folder</p>
      )}
    </div>
  );
};

export default MailSumarySidebar;
