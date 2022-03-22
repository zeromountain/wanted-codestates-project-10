import React, {forwardRef} from 'react';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/display-name
const DropDownMenu = forwardRef((props, ref) => {
  return (
    <div
      className="w-full flex-col pb-2 text-center absolute top-14 left-0 bg-white"
      ref={ref}
    >
      <div className="flex-1 text-base py-2 cursor-pointer">소식받기</div>
      <div className="w-full h-px bg-slate-300" />
      <div className="flex-1 text-base py-2 cursor-pointer">제휴/문의</div>
    </div>
  );
});

export default DropDownMenu;
