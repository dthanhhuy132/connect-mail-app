import { useNavigate } from 'react-router-dom';
import './pop-up.css';

interface PopupProps {
  text?: string;
  isShowPopup?: boolean;
  handleClickOk?: () => void;
  handleClickCancel?: () => void;
}

const PopUp: React.FC<PopupProps> = ({
  text = 'Do you want to logout?',
  handleClickCancel,
  handleClickOk,
  isShowPopup,
}) => {
  const navigate = useNavigate();

  function handleClickLogout() {
    localStorage.removeItem('LOGIN_LUON_DI_EM_OI');
    navigate('/login');
  }

  return (
    <div className={`pop-up-wrapper ${isShowPopup && 'popup-show'}`}>
      <div className="pop-up-background"></div>
      <div className="pop-up py-7 px-10 flex justify-center flex-col items-center">
        <h5 className="pop-up-text mb-5 text-[1.5rem] whitespace-nowrap">{text}</h5>
        <div className="pop-up-button flex">
          <button
            className="flex items-center justify-center duration-100 w-[75px]  gap-2 px-6 py-2 mx-2 text-[1.3rem] rounded-md border border-red-500 text-red-500 hover:bg-red-200"
            onClick={handleClickLogout}
          >
            Sure
          </button>
          <button
            className="flex items-center justify-center duration-100 w-[75px]  gap-2 px-6 py-2 mx-2 text-[1.3rem] rounded-md border border-green-500 text-green-500 hover:bg-green-200"
            onClick={handleClickCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
