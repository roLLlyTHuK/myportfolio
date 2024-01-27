import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsBriefcaseFill } from 'react-icons/bs';
import { portfolioData, filterData } from '../../utils/portfolioData';
import './styles.scss';

const Portfolio = () => {
  const [filteredData, setFilteredData] = useState('All');
  const [hoveredData, setHoveredData] = useState(null);

  const handlerFilter = currentId => {
    setFilteredData(currentId);
  };

  const handlerHover = index => {
    setHoveredData(index);
  };

  const filteredItems =
    filteredData === 'All'
      ? portfolioData
      : portfolioData.filter(item => item.tag === filteredData);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsBriefcaseFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map(item => (
            <li
              className={item.label === filteredData ? 'active' : ''}
              key={item.filterId}
              onClick={() => handlerFilter(item.label)}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="portfolio__content__cards__item"
              onMouseEnter={() => handlerHover(index)}
              onMouseLeave={() => handlerHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href="#">
                  <img src={item.image} alt={item.name} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredData && (
                  <div className="overlay__content">
                    <h2>{item.name}</h2>
                    <p>{item.desctription}</p>
                    <div className="overlay__content__buttons">
                      <button>Code</button>
                      <button>View</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
