import path from 'path';
import { FC, useState } from 'react';

import { Link } from 'react-router-dom';

const mainSideBar = [
  { icon: '<i class="fa-solid fa-house-chimney"></i>', path: 'home' },
  { icon: '<i class="fa-solid fa-envelope"></i>', path: 'email' },
  { icon: '<i class="fa-solid fa-user"></i>', path: 'contact' },
];

const MainSideBar: FC = () => {
  const [isActive, setIsActive] = useState<number>(1);

  function handleClickActive(index: number) {
    setIsActive(index);
  }

  return (
    <ul className="main-side-bar text-white h-full background-blue-900 w-full">
      {mainSideBar.map((item, index) => (
        <Link
          key={index}
          to={`/main/${item.path}`}
          className={`h-[60px] w-[100%] text-[1.5rem] flex justify-center items-center ${
            isActive === index ? 'background-blue-700' : ''
          }`}
          onClick={() => handleClickActive(index)}
        >
          {<div dangerouslySetInnerHTML={{ __html: item.icon }} />}
        </Link>
      ))}
    </ul>
  );
};

export default MainSideBar;
