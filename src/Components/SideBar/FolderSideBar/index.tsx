import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const folderSidebar = ['inbox', 'personal', 'travel', 'finance', 'spam'];

const FolderSideBar: FC = () => {
  const [isActive, setIsActive] = useState<number>(0);
  const [isContruction, setIsContruction] = useState(false);
  const location = useLocation();
  function handleClickActive(index: number) {
    setIsActive(index);
  }


  useEffect(() => {
    if (location.pathname.indexOf('email') === -1) {
      setIsContruction(true);
    } else {
      setIsContruction(false);
    }
  }, [location.pathname]);

  return (
    <>
      {isContruction ? (
        <p className="w-full h-full background-blue-800 text-white text-[20px] py-6 ">
          Contruction
        </p>
      ) : (
        <ul className="main-side-bar text-white h-full  w-full ">
          {folderSidebar.map((item, index) => (
            <Link
              key={index}
              to={`email/${item}`}
              className={`h-[60px] w-[100%] text-[1.5rem] flex justify-start items-center capitalize px-10 ${
                isActive === index ? 'background-blue-700' : ''
              }`}
              onClick={() => handleClickActive(index)}
            >
              {item}
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default FolderSideBar;
