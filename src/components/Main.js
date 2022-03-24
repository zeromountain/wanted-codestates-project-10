import React, {useEffect, useRef} from 'react';
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
  console.log(data, isLoading);
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [isSearchActive, setIsSearchActive] = useActivate(searchRef, false);

  const searchActive = () => setIsSearchActive(!isSearchActive);

  const handleChangeWord = e => dispatch(changeWord({word: e.target.value}));

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <main className="w-full min-h-main flex flex-col justify-between bg-[#CAE9FF] pt-20 tablet:pb-5">
        <Search
          searchActive={searchActive}
          word={word}
          data={data}
          isLoading={isLoading}
          handleChangeWord={handleChangeWord}
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
        />
      )}
    </>
  );
};

export default Main;
