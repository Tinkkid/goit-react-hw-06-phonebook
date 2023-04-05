import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { MainSection, ContactsTitle, Title } from './App.styled';

export const App = () => {
  return (
    <MainSection>
      <Title> Phonebook </Title>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </MainSection>
  );
};
