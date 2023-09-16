import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../Filter/Filter';
import { removeContact } from 'redux/contactsSlice';
import {
  ButtonDelete,
  ContactsItem,
  ContactsList,
} from './ContactList .styled';
import { getContacts, getFilter} from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <>
      <Filter />
      <ContactsList>
        {contacts.filter(({ name }) => name.toLowerCase()?.includes(filter))
          .map(({ id, name, number }) => (
            <ContactsItem key={id}>
              {name}: {number}
              <ButtonDelete
                type="button"
                onClick={() => dispatch(removeContact(id))}
              >
                Delete
              </ButtonDelete>
            </ContactsItem>
          ))}
      </ContactsList>
    </>
  );
};
