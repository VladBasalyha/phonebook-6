import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filtersSilce';

export const FilterContacts = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilterValue(e.target.value));
  };
  return (
    <TextField
      onChange={onFilterChange}
      variant="filled"
      label={'filter contacts'}
    ></TextField>
  );
};
