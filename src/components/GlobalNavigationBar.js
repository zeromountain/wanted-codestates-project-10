import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';

import {ReactComponent as Logo} from '../assets/logo.svg';

const GlobalNavigationBar = () => {
  return (
    <header className="w-full h-14 bg-white">
      <nav className="desktop:max-w-screen-desktop tablet:w-full tablet:px-5 h-full flex justify-between items-center mx-auto">
        <div className="">
          {/* 로고 */}
          <Logo className="h-6 cursor-pointer" />
        </div>
        <div className="desktop:hidden w-6 h-6">
          {/* 햄버거 */}
          <AiOutlineMenu className="w-full h-full cursor-pointer" />
        </div>
        <div className="tablet:hidden flex">
          {/* 링크 */}
          <button className="px-4 hover:underline underline-offset-2">
            소식받기
          </button>
          <div className="w-5" />
          <button className="px-4 hover:underline underline-offset-2">
            제휴/문의
          </button>
        </div>
      </nav>
      {/* 드롭다운메뉴 */}
    </header>
  );
};

export default GlobalNavigationBar;
