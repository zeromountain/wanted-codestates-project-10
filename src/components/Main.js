import React from 'react';
import Search from './Search';

const Main = () => {
  return (
    <main className="w-full min-h-main flex flex-col justify-between bg-[#CAE9FF] pt-20 tablet:pb-5">
      <Search />
      <div>{/* 1040px 미만일 경우 News */}</div>
      <div>{/* 1040px 이상일 경우 News */}</div>
    </main>
  );
};

export default Main;
