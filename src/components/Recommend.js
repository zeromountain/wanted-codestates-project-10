import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {GrSearch} from 'react-icons/gr';
import PropTypes from 'prop-types';

const Recommend = ({data, isLoading, isFetching, selected, scrollOffset}) => {
  const scrollRef = useRef(null);

  const handleMoveLink = name => {
    window.open(`https://clinicaltrialskorea.com/studies?condition=${name}`);
  };

  useEffect(() => {
    if (scrollRef) {
      console.log('scrollTop', scrollRef.current.scrollTop);
      console.log('scrollOffset', scrollOffset);
      // scrollRef.current.addEventListener('scroll', () => {

      // });
    }
  });

  useLayoutEffect(() => {
    if (scrollRef && scrollOffset > 850) {
      scrollRef.current.scrollTo({
        left: 24,
        top: scrollRef.current.scrollTop + scrollOffset - 60,
        behavior: 'smooth',
      });
      // if (scrollRef && scrollRef.current.scrollTop < 60) {
      //   scrollRef.current.scrollTo({
      //     left: 24,
      //     top: scrollRef.current.scrollTop - scrollOffset,
      //     behavior: 'smooth',
      //   });
      // }
    }
  }, [scrollOffset]);
  return (
    <div
      className="w-full flex flex-col desktop:absolute desktop:top-[100%] desktop:left-0 desktop:mt-2 px-6 pt-6 pb-4 bg-white desktop:rounded-3xl overflow-y-auto"
      ref={scrollRef}
    >
      <div className="text-gray-400 text-xs">
        {isLoading || isFetching
          ? '검색중...'
          : data.length != 0
          ? '추천검색어'
          : '검색어 없음'}
      </div>
      {data.map(item => (
        <div
          key={item.id}
          tabIndex="0"
          className={`${
            selected === item.id && 'font-bold text-[2rem]'
          } flex items-center py-2 cursor-pointer hover:font-bold hover:text-[2rem]`}
          onClick={() => handleMoveLink(item.name)}
        >
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
  isFetching: PropTypes.bool.isRequired,
  selected: PropTypes.any,
  scrollOffset: PropTypes.number,
};

export default Recommend;
