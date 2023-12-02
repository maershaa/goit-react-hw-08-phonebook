import React from 'react';
import ContactList from 'components/Contacts/ContactsList';
import Filter from 'components/Filter/Filter';

const HomePage = () => {
  return (
    <div>
      <Filter />
      <ContactList />
    </div>
  );
};

export default HomePage;
