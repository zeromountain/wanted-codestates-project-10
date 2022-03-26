import React, {forwardRef, useEffect, useRef} from 'react';
import {GrSearch} from 'react-icons/gr';
import {FaArrowLeft} from 'react-icons/fa';
import PropTypes from 'prop-types';
import Recommend from './Recommend';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line react/display-name
const SubSearch = forwardRef(
  (
    {
      searchActive,
      word,
      handleChangeWord,
      data,
      isLoading,
      isFetching,
      handleKeyMove,
      selected,
      scrollOffset,
    },
    ref,
  ) => {
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    }, []);

    return (
      <div
        className="w-full h-full fixed inset-0 z-[100] flex flex-col bg-white"
        ref={ref}
      >
        <div className="flex flex-col relative overflow-y-scroll">
          <div
            className="w-full min-h-[56px] flex border-b-2 border-blue-600"
            id="scrollRef"
          >
            <div className="w-full h-full flex flex-col mx-auto px-5">
              <div className="h-full flex items-center">
                <FaArrowLeft
                  onClick={searchActive}
                  className="cursor-pointer"
                />
                <div className="ml-2" />
                <input
                  type="text"
                  ref={inputRef}
                  placeholder="질환명을 입력해 주세요."
                  className="flex-1 outline-0"
                  value={word}
                  onChange={handleChangeWord}
                  onKeyDown={e => handleKeyMove(e, 'sub', inputRef)}
                />
                <div className="ml-2" />
                <GrSearch />
              </div>
            </div>
          </div>
          <Recommend
            data={data}
            isLoading={isLoading}
            isFetching={isFetching}
            selected={selected}
            scrollOffset={scrollOffset}
          />
        </div>
      </div>
    );
  },
);

SubSearch.propTypes = {
  searchActive: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
  handleChangeWord: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleKeyMove: PropTypes.func.isRequired,
  selected: PropTypes.any,
  scrollOffset: PropTypes.number.isRequired,
};

export default SubSearch;
