import Banner from '@/components/shared/homepage/Banner';
import React from 'react';
import Books from './books/page';


const page = () => {
  return (
    <div>
      <Banner/>
      <Books/>
    </div>
  );
};

export default page;