import React from 'react';

import {ReactComponent as Character} from '../assets/character1.svg';
import {ReactComponent as SubCharacter} from '../assets/character2.svg';

const News = () => {
  return (
    <>
      <div className="desktop:hidden flex flex-col">
        {/* 1040px 미만일 경우 News */}
        <div className="w-full flex flex-col mx-auto px-5">
          <div className=" rounded-2xl bg-white px-4 py-3 shadow-md">
            <div className="flex relative">
              <div className="flex flex-col">
                <div className="text-xs mb-4">
                  새로운 임상시험이 등록되면
                  <br />
                  <span className="text-[#007BE9]">문자로 알려드려요.</span>
                </div>
                <button className="w-[fit-content] inline-flex bg-[#007BE9] text-white px-4 py-[6px] rounded-3xl">
                  임상시험 소식받기
                </button>
              </div>
              <div className="h-full flex absolute top-0 right-[-14px] bottom-0 items-center">
                {/* svg */}
                <SubCharacter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tablet:hidden flex flex-col pt-56">
        {/* 1040px 이상일 경우 News */}
        <div className="bg-[#369EFC] pt-6 pb-4">
          <div className="desktop:max-w-[700px] w-full flex flex-col mx-auto px-5">
            <div className="flex relative">
              <div className="flex flex-col">
                <div className="text-white text-xmd font-bold mb-4">
                  새로운 임상시험이 등록되면 문자로 알려드려요
                </div>
                <button className="w-[fit-content] inline-flex px-6 py-[10px] rounded-3xl bg-white text-[#007BE9]">
                  임상시험 소식받기
                </button>
              </div>
              <div className="h-full flex items-center absolute right-0 bottom-[-10px]">
                {/* svg */}
                <Character />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
