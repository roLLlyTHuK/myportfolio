import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contacts" className="contacts">
      <PageHeaderContent
        headerText="My Contacts"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Contact;
