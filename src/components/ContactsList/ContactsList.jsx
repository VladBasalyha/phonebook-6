import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
export const ContactsList = () => {
  const visibleContacts = useSelector(getContacts);
  return (
    <>
      <ul>
        {visibleContacts.map(contact => (
          <Contact contact={contact} key={contact.id}></Contact>
        ))}
      </ul>
    </>
  );
};
