import { useLocation } from 'react-router-dom';

import HuyDoan from '../../../assets/img/HuyDoan.jpg';
import getMailId from '../../common/getMailId';
import renderNameAndSubject from '../../common/renderNameAndSubject';

const MailHeader: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  let { mailId, isMailIdValid } = getMailId(pathname);

  return (
    <div className="header h-[60px] w-full p-[10px] flex-shrink-0 text-left flex justify-start shadow-md ">
      <div className="flex justify-between items-center w-full">
        <div className="text-[1.4rem] flex items-center">
          Pathname:
          {pathname
            .split('/')
            .filter((x) => x !== '')
            .map((path, index) => {
              return (
                <span key={index} className="font-bold ml-2 capitalize">
                  {path === mailId && isMailIdValid
                    ? renderNameAndSubject(mailId, isMailIdValid)
                    : path}
                  {index !== pathname.split('/').filter((x) => x !== '').length - 1 && (
                    <i className="fa-solid fa-caret-right ml-2"></i>
                  )}
                </span>
              );
            })}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-col justify-end items-end">
            <p className="font-bold text-[1.5rem]">Huy Đoàn</p>
            <p className="text-[1.2rem] text-gray-500 mb-0">doan.thanhhuy1312@gmail.com</p>
          </div>
          <div>
            <img
              src={HuyDoan}
              alt=""
              className="relative rounded-full object-cover w-[40px] h-[40px]"
            />
          </div>
          <button className="bg-red-600 p-3 pr-6 pl-6 rounded-2xl flex justify-center items-center hover:bg-red-400">
            <i className="fa-solid fa-power-off text-white text-[14px]"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailHeader;
