import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { GiSkills } from 'react-icons/gi';
import { skillsData } from '../../utils/skillsData';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import './styles.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent headerText="My Skills" icon={<GiSkills size={40} />} />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0}
              start={{ transform: 'translateX(-100%)', opacity: 0 }}
              end={{ transform: 'translateX(0px)', opacity: 1 }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {item.data.map((skill, j) => (
                  <AnimateKeyframes
                    key={j}
                    play
                    duration={1}
                    keyframes={['opacity: 1', 'opacity: 0']}
                    iterationCount={1}
                  >
                    <div key={j} className="progressbar-wrapper">
                      <p>{skill.skillName}</p>
                      <Line
                        percent={skill.percentage}
                        strokeWidth={4}
                        strokeColor={'var(--yellow-theme-main-color)'}
                        trailWidth={3}
                        trailColor={'var(--yellow-theme-sub-text-color)'}
                        strokeLinecap="round"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
