import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import {
  personalDetails,
  summary,
  socialLinks,
} from '../../utils/personalDetails';
import { Animate } from 'react-simple-animate';
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from 'react-icons/si';
import { FaDev, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import './styles.scss';

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{ transform: 'translateX(-100%)', opacity: 0 }}
            end={{ transform: 'translateX(0px)', opacity: 1 }}
          >
            <h3 className="summary">Hello there, I'm so happy you are here!</h3>
            <p>
              <span>{summary.value1}</span>
              <br />
              <span>{summary.value2}</span>
              <br />
              <span>{summary.value3}</span>
            </p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{ transform: 'translateX(100%)', opacity: 0 }}
            end={{ transform: 'translateX(0px)', opacity: 1 }}
          >
            <h3 className="personalInformation">Personal Information</h3>
            <ul>
              {personalDetails.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{ transform: 'translateX(100%)', opacity: 0 }}
            end={{ transform: 'translateX(0px)', opacity: 1 }}
          >
            <div className="social__content">
              <h3 className="personalInformation">In Social</h3>
              <ul className="social">
                <li>
                  <a
                    href={socialLinks[0].link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin size={40} />
                  </a>
                </li>
                <li>
                  <a
                    href={socialLinks[1].link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size={40} />
                  </a>
                </li>
                <li>
                  <a
                    href={socialLinks[2].link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTelegram size={40} />
                  </a>
                </li>
              </ul>
            </div>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{ transform: 'translateX(200%)', opacity: 0 }}
            end={{ transform: 'translateX(0px)', opacity: 1 }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <SiMongodb size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <SiExpress size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <SiReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <SiNodedotjs size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
