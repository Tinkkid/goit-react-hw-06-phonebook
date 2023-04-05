import React from 'react';
import { List, Item, Name, Number, BtnDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const deleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Name>{name}:</Name> <Number>{number}</Number>
          <BtnDelete onClick={() => deleteContact(id)}> Delete </BtnDelete>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
