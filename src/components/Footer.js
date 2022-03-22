import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-10 text-[#A7AFB7] bg-[#2d3d50]">
      <div className="desktop:max-w-[1040px] w-full flex tablet:flex-col desktop:justify-between desktop:items-end mx-auto px-5">
        <div className="flex flex-col tablet:mb-10">
          <div className="leading-4 mb-4">(주)휴먼스케이프</div>
          <div className="text-xs leading-4">
            서울특별시 강남구 봉은사로82길 6, 레베쌍트빌딩 601호 | 대표자:
            장민후
          </div>
          <div className="text-xs leading-4 mb-4">
            © 2021 Humanscape, All rights reserved.
          </div>
          <span>
            <img
              src="https://clinicaltrialskorea.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkids.00b60645.png&w=96&q=75"
              alt="한국의약품안전관리원"
            />
          </span>
        </div>
        <div className="flex flex-col desktop:items-end">
          <div className="text-[#A7AFB7] text-sm font-bold leading-4 mb-4">
            <a href="https://clinicaltrialskorea.com/terms?type=privacy">
              개인정보처리방침
            </a>
          </div>
          <div className="text-sm leading-4 mb-4">
            Living healthier by connecting better
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
