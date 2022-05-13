import quang from '../../../assets/img/Quang.jpg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import tuc from '../../../assets/img/Tuc.jpg';
import huang from '../../../assets/img/Huang.jpg';
import fun from '../../../assets/img/Fun.jpg';
import changeWidthSize from '../../common/changeWidth';

interface MailSumaryProps {
  index?: number;
  mail?: any;
  folderTarget?: string;
}

const MailSumary: React.FC<MailSumaryProps> = ({ index, mail, folderTarget }) => {
    

  return (
    <div className={`w-full p-4 pt-6 flex border-grey-light-hd`}>
      <div className="min-w-[50px] mr-5">
        <img
          src={tuc}
          alt=""
          className="w-[50px] h-[50px] onject-center object-cover rounded-full"
        />
      </div>
      <div className="">
        <div className="flex justify-between font-medium text-gray-700 text-[1.3rem] mb-1">
          <p className="line-clamp-1 text-left">
            {mail.senderName.first + ' ' + mail.senderName.last}
          </p>
          <p>29/6/2020</p>
        </div>

        <p className="text-left line-clamp-1 text-[1.4rem] font-[500] mb-1">{mail.subject}</p>
        <p className="text-left line-clamp-3 text-gray-500 text-[1.2rem]">{mail.body}</p>
      </div>
    </div>
  );
};

export default MailSumary;
