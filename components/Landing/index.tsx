import React from 'react';

import BottomHero from './BottomHero';
import LatestProducts from './LatestProducts';
import TopHero from './TopHero';

function Landing() {
  return (
    <>
      <TopHero />
      <LatestProducts />
      <BottomHero />
    </>
  );
}

export default Landing;
