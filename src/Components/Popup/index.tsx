import { Link, useNavigate } from 'react-router-dom';
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
            className="bg-blue-600 w-[70px] p-3 mx-1 pr-6 pl-6 rounded-2xl flex justify-center items-center text-[white] text-[1.4rem] hover:bg-blue-400"
            onClick={handleClickLogout}
          >
            Sure
          </button>
          <button
            className="bg-green-600 w-[70px] p-3 mx-1 pr-6 pl-6 rounded-2xl flex justify-center items-center text-[white] text-[1.4rem] hover:bg-green-400"
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
