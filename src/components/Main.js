import React from 'react';
import News from './News';
import Search from './Search';

const Main = () => {
  return (
    <main className="w-full min-h-main flex flex-col justify-between bg-[#CAE9FF] pt-20 tablet:pb-5">
      <Search />
      <News />
    </main>
  );
};

export default Main;
