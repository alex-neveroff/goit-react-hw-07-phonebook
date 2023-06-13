import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem';
import { Contacts } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  const showContacts = contacts
    .filter(contact => contact.name.toLowerCase().includes(filter))
    .sort((firstContact, secondContact) =>
      firstContact.name.localeCompare(secondContact.name)
    );

  return (
    <Contacts>
      {showContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </Contacts>
  );
};

export default ContactList;
