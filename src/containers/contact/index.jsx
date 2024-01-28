import React, { useState } from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { IoMail } from 'react-icons/io5';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const [emailError, setEmailError] = useState('');

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Валідація електронної адреси
    if (e.target.name === 'email') {
      const isValidEmail = validateEmail(e.target.value);
      setEmailError(isValidEmail ? '' : 'Enter a valid email address');
    }
  };

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    // Валідація форми
    console.log('Дані для відправлення:', formData);
  };

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
                <input
                  required
                  type="text"
                  name="name"
                  className="inputName"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  type="text"
                  name="email"
                  className={`inputEmail ${emailError ? 'invalid' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
                {emailError && <p className="error">{emailError}</p>}
              </div>
              <div>
                <textarea
                  required
                  type="text"
                  name="description"
                  className="inputDescription"
                  rows="7"
                  value={formData.description}
                  onChange={handleChange}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button onClick={handlerSubmit}>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
