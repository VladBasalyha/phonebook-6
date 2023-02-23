import { ContactForm } from './ContactForm/ContactForm';

import { Container } from '@mui/system';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <>
      <Container>
        <ContactForm></ContactForm>
        <ContactsList></ContactsList>
      </Container>
    </>
  );
};
