import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { IoMail } from 'react-icons/io5';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const Contact = () => {
  return (
    <section id="contacts" className="contacts">
      <PageHeaderContent headerText="My Contacts" icon={<IoMail size={40} />} />
      <div className="contacts__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: 'translateX(-100%)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <h3 className="contacts__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: 'translateX(100%)' }}
          end={{ transform: 'translateX(0px)' }}
        >
          <div className="contacts__content__form">
            <div className="contacts__content__form__controls-wrapper">
              <div>
                <input required type="text" name="name" className="inputName" />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  type="email"
                  name="email"
                  className="inputEmail"
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  type="text"
                  name="description"
                  className="inputDescription"
                  rows="7"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
