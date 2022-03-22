import React, {useRef} from 'react';
import {useActivate} from '../hooks/useActivate';

import News from './News';
import Search from './Search';
import SubSearch from './SubSearch';

const Main = () => {
  const searchRef = useRef(null);
  const [isSearchActive, setIsSearchActive] = useActivate(searchRef, false);

  const searchActive = () => setIsSearchActive(!isSearchActive);

  return (
    <>
      <main className="w-full min-h-main flex flex-col justify-between bg-[#CAE9FF] pt-20 tablet:pb-5">
        <Search searchActive={searchActive} />
        <News />
      </main>
      {isSearchActive && (
        <SubSearch ref={searchRef} searchActive={searchActive} />
      )}
    </>
  );
};

export default Main;
