import React from 'react';
import {GrSearch} from 'react-icons/gr';
import PropTypes from 'prop-types';

import Recommend from './Recommend';

const Search = ({searchActive, word, data, isLoading, handleChangeWord}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="desktop:max-w-[700px] w-full flex flex-col mx-auto px-5">
        {/* 1040px 이상일때 max-width: 700 */}
        <div className="w-full desktop:text-title text-subtitle font-bold mb-5 text-center">
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </div>
        <div className="desktop:hidden w-full flex" onClick={searchActive}>
          {/* 1040px미만 검색창 */}
          <div className="w-full flex justify-between items-center px-5 py-3 shadow-sm cursor-pointer rounded-full bg-white">
            <div className=" text-gray-400 text-xs">
              {word && word.length != 0 ? word : '질환명을 입력해 주세요.'}
            </div>
            <GrSearch />
          </div>
        </div>
        <div className="tablet:hidden w-full flex">
          {/* 1040px 이상 검색창 */}
          <div className="w-full relative flex bg-white rounded-full">
            <div className="flex flex-1 items-center px-6 py-5">
              <GrSearch />
              <div className="pr-3" />
              <input
                type="text"
                placeholder="질환명을 입력해 주세요."
                className="w-full outline-0"
                value={word}
                onChange={handleChangeWord}
              />
            </div>
            <button className="text-xmd font-bold rounded-tr-full rounded-br-full bg-blue-600 text-white px-8 py-4">
              검색
            </button>
            {word.length != 0 && (
              <Recommend data={data?.slice(0, 7)} isLoading={isLoading} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  searchActive: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
  handleChangeWord: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Search;
