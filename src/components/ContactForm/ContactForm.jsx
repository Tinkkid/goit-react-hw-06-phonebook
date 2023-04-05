import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  InputForm,
  InputForContact,
  LabelInputContact,
  BtnSubmit,
} from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        console.log('Error');
    }
  };

  const addNewContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (checkAvailableContact(contact)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(contact));
  };

  const checkAvailableContact = contact => {
    return contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const handleSubmit = event => {
    event.preventDefault();
    addNewContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <LabelInputContact>
        Name
        <InputForContact
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />{' '}
      </LabelInputContact>

      <LabelInputContact>
        Number
        <InputForContact
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />{' '}
      </LabelInputContact>

      <BtnSubmit type="submit"> Add Contact </BtnSubmit>
    </InputForm>
  );
};

export default ContactForm;
