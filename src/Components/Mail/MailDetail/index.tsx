import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import huang from '../../../assets/img/Huang.jpg';
import MailDetailButton from './MailDetailButton';

const MailDetail: React.FC = () => {
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return (
    <div className="h-full w-4/5 text-left grab-to-change-size-right relative">
      <div className="grid grid-cols-12 p-12">
        <div className="col-span-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center sm:w-1/3 xl:w-1/5 gap-3">
              <div>
                <img
                  src={huang}
                  alt=""
                  className="relative w-[70px] center center object-cover rounded-full max-width-unset"
                />
              </div>
              <div>
                <h6 className=" text-[1.5rem] font-semibold">Eren Jaeger</h6>
                <p className=" text-[1.5rem] text-gray-500 font-light">test2@test.com</p>
              </div>
            </div>

            <MailDetailButton />
          </div>
        </div>

        <div className="col-span-12">
          <div>
            <div className="py-12">
              <h2 className="text-4xl font-semibold mb-8">syndicate granular bandwidth</h2>
              <div className="border-b pb-8">
                <p className="text-[1.5rem]">
                  On the other hand, we denounce with righteous indignation and dislike men who are
                  so beguiled and demoralized by the charms of pleasure of the moment, so blinded by
                  desire, that they cannot foresee the pain and trouble that are bound to ensue; and
                  equal blame belongs to those who fail in their duty through weakness of will,
                  which is the same as saying through shrinking from toil and pain. These cases are
                  perfectly simple and easy to distinguish. In a free hour, when our power of choice
                  is untrammelled and when nothing prevents our being able to do what we like best,
                  every pleasure is to be welcomed and every pain avoided. But in certain
                  circumstances and owing to the claims of duty or the obligations of business it
                  will frequently occur that pleasures have to be repudiated and annoyances
                  accepted. The wise man therefore always holds in these matters to this principle
                  of selection: he rejects pleasures to secure other greater pleasures, or else he
                  endures pains to avoid worse pains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailDetail;
