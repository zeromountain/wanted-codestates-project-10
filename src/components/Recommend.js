import React from 'react';
import {GrSearch} from 'react-icons/gr';
import PropTypes from 'prop-types';

const Recommend = ({data, isLoading}) => {
  return (
    <div className="w-full flex flex-col desktop:absolute desktop:top-[100%] desktop:left-0 desktop:mt-2 px-6 pt-6 pb-4 bg-white desktop:rounded-3xl">
      <div className="text-gray-400 text-xs">
        {isLoading
          ? '검색중...'
          : data.length != 0
          ? '추천검색어'
          : '검색어 없음'}
      </div>
      {data.map(item => (
        <div key={item.id} className="flex items-center py-2 cursor-pointer">
          <GrSearch />
          <div className="flex flex-1 text-sm ml-3">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

Recommend.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Recommend;
