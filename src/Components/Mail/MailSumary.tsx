import { useEffect, useRef, useState } from 'react';
import randomAvatar from '../common/randomAvatar';
import dayjs from 'dayjs';

interface MailSumaryProps {
  index: number;
  mail: any;
  randomArr: number[];
  isActive?: any;
}

const MailSumary: React.FC<MailSumaryProps> = ({ index, mail, randomArr, isActive }) => {
  const [isRead, setIsRead] = useState(false);

  function handleOnlickToReadMail() {
    setIsRead(true);
  }

  return (
    <div
      className={`w-full p-4 pt-6 flex border-grey-light-hd 
      ${randomArr.indexOf(index) > -1 ? 'bg-[#e5e7eb]' : ''}
      
      ${isRead && 'mail-sumary-unread'}
      ${isActive === index ? 'mail-sumary-active' : ''}`}
      onClick={handleOnlickToReadMail}
    >
      <div className="min-w-[50px] mr-5">
        <img
          src={randomAvatar(mail.senderName.first)}
          alt=""
          className="w-[50px] h-[50px] onject-center object-cover rounded-full"
        />
      </div>
      <div className="">
        <div className="flex justify-between font-[600] text-gray-800 text-[1.4rem] mb-1">
          <p className="line-clamp-1 text-left">
            {mail.senderName.first + ' ' + mail.senderName.last}
          </p>
          <p>
            <span className="mail-summary-time"> {dayjs(mail.date).format('HH:MM')} - </span>
            <span> {dayjs(mail.date).format('MM/HH/YYYY')}</span>
          </p>
        </div>

        <p className="text-left line-clamp-1 text-[1.4rem] font-[500] mb-1">{mail.subject}</p>
        <p
          className={`text-left line-clamp-3 text-gray-500 text-[1.2rem] ${
            isActive === index ? 'text-black' : ''
          }`}
        >
          {mail.body}
        </p>
      </div>
    </div>
  );
};

export default MailSumary;
