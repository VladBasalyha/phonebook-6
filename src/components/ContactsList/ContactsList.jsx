import { List } from '@mui/material';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
export const ContactsList = () => {
  const visibleContacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const contactsFilter = visibleContacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <>
      <List>
        {contactsFilter.length === 0 ? (
          <h2>No contacts</h2>
        ) : (
          contactsFilter.map(contact => (
            <Contact contact={contact} key={contact.id}></Contact>
          ))
        )}
      </List>
    </>
  );
};
