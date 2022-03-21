import React from 'react';
import PropTypes from 'prop-types';

const DropDownMenu = ({isDropDownActive}) => {
  return (
    <div
      className={`${
        isDropDownActive
          ? 'hidden'
          : 'w-full flex-col pb-2 text-center absolute top-14 left-0 bg-white'
      }`}
    >
      <div className="flex-1 text-base py-2 tracking-tight cursor-pointer">
        소식받기
      </div>
      <div className="w-full h-px bg-slate-300" />
      <div className="flex-1 text-base py-2 tracking-tight cursor-pointer">
        제휴/문의
      </div>
    </div>
  );
};

DropDownMenu.propTypes = {
  isDropDownActive: PropTypes.bool.isRequired,
};

export default DropDownMenu;
