import { Button } from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const contactDelete = () => dispatch(deleteContact(contact.id));
  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <Button onClick={contactDelete}>
        <DeleteOutlineRoundedIcon></DeleteOutlineRoundedIcon>
      </Button>
    </li>
  );
};
