import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { IoMail } from 'react-icons/io5';

const Contact = () => {
  return (
    <section id="contacts" className="contacts">
      <PageHeaderContent headerText="My Contacts" icon={<IoMail size={40} />} />
    </section>
  );
};

export default Contact;
