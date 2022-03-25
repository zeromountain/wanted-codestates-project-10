import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useActivate} from '../hooks/useActivate';
import {useGetSearchQuery} from '../services/search';
import {changeWord} from '../store/formSlice';

import News from './News';
import Search from './Search';
import SubSearch from './SubSearch';

const Main = () => {
  const {word} = useSelector(({form}) => form);
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [isSearchActive, setIsSearchActive] = useActivate(searchRef, false);
  const [moveIdx, setMoveIdx] = useState(-1);
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(0);
  const [debounceValue, setDebounceValue] = useState(null);

  const {
    data = [],
    isLoading,
    isFetching,
  } = useGetSearchQuery(debounceValue, {skip: !debounceValue});

  const searchActive = () => setIsSearchActive(!isSearchActive);

  const handleChangeWord = e => {
    dispatch(changeWord({word: e.target.value}));
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      const value = e.target.value;
      setDebounceValue(value);
    }, 500);
    setTimer(newTimer);
  };

  const handleKeyMove = (e, type, ref) => {
    if (e.keyCode === 40) {
      // 아래 방향키
      if (type === 'main' && moveIdx < 6) {
        setMoveIdx(moveIdx + 1);
      }
      if (type === 'sub' && moveIdx < data.length) {
        const rect = ref.current
          .closest('#scrollRef')
          .nextSibling.childNodes[moveIdx + 2].getBoundingClientRect();
        setMoveIdx(moveIdx + 1);
        console.log(rect, window.innerHeight);
        if (rect.y + 45 > window.innerHeight) {
          ref.current.closest('#scrollRef').nextSibling.scrollTo({
            left: rect.left,
            top: (rect.top + window.innerHeight) / 2,
            behavior: 'auto',
          });
        }
      }
    } else if (e.keyCode === 38) {
      // 위 방향키
      const rect = ref.current
        .closest('#scrollRef')
        .nextSibling.childNodes[moveIdx + 2].getBoundingClientRect();
      if (moveIdx > 0) {
        // console.log(rect);
        if (type === 'sub') {
          console.log(rect, '위방향키', window.screenTop);
        }
        setMoveIdx(moveIdx - 1);
      }
    } else if (e.keyCode === 13) {
      // Enter
      window.open(
        `https://clinicaltrialskorea.com/studies?condition=${data[moveIdx].name}`,
      );
    }
  };

  useEffect(() => {
    if (data.length != 0 && moveIdx != -1 && moveIdx < data.length) {
      setSelected(data[moveIdx].id);
    }
  }, [moveIdx]);

  return (
    <>
      <main className="w-full min-h-main flex flex-col justify-between bg-[#CAE9FF] pt-20 tablet:pb-5">
        <Search
          searchActive={searchActive}
          word={word}
          data={data}
          isLoading={isLoading}
          isFetching={isFetching}
          handleChangeWord={handleChangeWord}
          handleKeyMove={handleKeyMove}
          selected={selected}
        />
        <News />
      </main>
      {isSearchActive && (
        <SubSearch
          ref={searchRef}
          searchActive={searchActive}
          word={word}
          data={data}
          isLoading={isLoading}
          isFetching={isFetching}
          handleChangeWord={handleChangeWord}
          handleKeyMove={handleKeyMove}
          selected={selected}
        />
      )}
    </>
  );
};

export default Main;
