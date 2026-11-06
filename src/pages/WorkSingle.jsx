import React from 'react';
import WorkSingleHero from '../components/works/WorkSingleHero';
import WorkSingleDetails from '../components/works/WorkSingleDetails';
import TestimonialsSectionV2 from '../components/home/TestimonialsSectionV2';
import WorkSingleNextProject from '../components/works/WorkSingleNextProject';

function WorkSingle() {
  return (
    <>
      <WorkSingleHero />
      <WorkSingleDetails />
      <TestimonialsSectionV2 />
      <WorkSingleNextProject />
    </>
  );
}

export default WorkSingle;
