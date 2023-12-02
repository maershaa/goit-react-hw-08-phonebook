import React from 'react';
import ContactList from 'components/Contacts/ContactsList';
import Filter from 'components/Filter/Filter';
const Contacts = () => {
  return (
    <div>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
