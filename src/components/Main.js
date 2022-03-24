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
  const {data = [], isLoading} = useGetSearchQuery(word, {skip: !word});
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [isSearchActive, setIsSearchActive] = useActivate(searchRef, false);
  const [moveIdx, setMoveIdx] = useState(-1);
  const [selected, setSelected] = useState(null);

  const searchActive = () => setIsSearchActive(!isSearchActive);

  const handleChangeWord = e => dispatch(changeWord({word: e.target.value}));

  const handleKeyMove = (e, type) => {
    if (e.keyCode === 40) {
      // 아래 방향키
      if (type === 'main' && moveIdx < 6) {
        setMoveIdx(moveIdx + 1);
      }
      if (type === 'sub' && moveIdx < data.length) {
        console.log(e.target);
        setMoveIdx(moveIdx + 1);
      }
    } else if (e.keyCode === 38) {
      // 위 방향키
      if (moveIdx > 0) {
        setMoveIdx(moveIdx - 1);
      }
    }
  };

  useEffect(() => {
    if (data.length != 0 && moveIdx != -1 && moveIdx < data.length) {
      console.log(data[moveIdx]);
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
          handleChangeWord={handleChangeWord}
          handleKeyMove={handleKeyMove}
          selected={selected}
        />
      )}
    </>
  );
};

export default Main;
