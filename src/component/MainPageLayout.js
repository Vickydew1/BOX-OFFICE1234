import React from 'react';
import Navs from './Navs';
import Tittle from './Tittle';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Tittle
        title="Box office"
        subtitle="Are you lokoking for a movie 0r an actor"
      />
      <Navs />
      <children />
    </div>
  );
};

export default MainPageLayout;
