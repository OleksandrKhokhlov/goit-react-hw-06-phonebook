import { ContactForm } from './ContactForm/ContactForm ';
import { Contacts } from './Contacts/ContactList ';
import { Container } from './Container.styled';

export const App = () => {
  return (
    <Container>
      <ContactForm />
      <Contacts />
    </Container>
  );
};
