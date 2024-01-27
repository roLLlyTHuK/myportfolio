import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsBriefcaseFill } from 'react-icons/bs';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsBriefcaseFill size={40} />}
      />
    </section>
  );
};

export default Portfolio;
