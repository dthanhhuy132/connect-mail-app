import { useLocation } from 'react-router-dom';

import getAndCheckMailId from '../../common/getAndCheckMailId';
import getEmailFormEmail from '../../common/getEmailFromEmail';
import getFolderName from '../../common/getFolderName';
import getMailDetail from '../../common/getMailDetail';
import randomAvatar from '../../common/randomAvatar';
import MailDetailButton from './MailDetailButton';

const MailDetail: React.FC = () => {
  const location = useLocation();

  const { mailId, isMailIdValid } = getAndCheckMailId(location.pathname);
  let email: any = getMailDetail(mailId, isMailIdValid);
  let folderName = getFolderName(location.pathname);

  return (
    <div className="h-full w-3/4 text-left grab-to-change-size-right relative">
      {email ? (
        <div className="grid grid-cols-12 p-12">
          <div className="col-span-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center sm:w-1/3 xl:w-1/5 gap-3">
                <div>
                  <img
                    src={randomAvatar(email.senderName.first)}
                    alt=""
                    className="relative w-[70px] center center object-cover rounded-full max-width-unset"
                  />
                </div>
                <div>
                  <h6 className=" text-[1.5rem] font-semibold">
                    {email.senderName.first + ' ' + email.senderName.last}
                  </h6>
                  <p className=" text-[1.5rem] text-gray-500 font-light whitespace-nowrap max-w-auto text-ellipsis overflow-hidden">
                    {getEmailFormEmail(email.from)}
                  </p>
                </div>
              </div>

              <MailDetailButton email={email} />
            </div>
          </div>

          <div className="col-span-12">
            <div>
              <div className="py-12">
                <h2 className="text-4xl font-semibold mb-8">{email.subject}</h2>
                <div className="border-b pb-8">
                  <p className="text-[1.5rem]">{email.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : folderName ? (
        <p className="mt-5 text-[2rem] text-center">Please choose your email</p>
      ) : (
        <p className="mt-5 text-[2rem] text-center">Please choose your folder first</p>
      )}
    </div>
  );
};

export default MailDetail;
