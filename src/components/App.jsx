import { AddContact } from './AddContact/AddContact';
import { useState, useEffect } from 'react';
import ListOfContacts from './ContactList/ListOfContacts';
import Filter from './Filter';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () => {
  const getContacts = () => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  };
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const handleAddBook = newContact => {
    if (handleExists(newContact.name)) {
      alert('Contact with this name already exists!');
      return;
    }
    setContacts(prevContact => [...prevContact, newContact]);
  };

  const handleFilterChange = newFilter => {
    setFilter(newFilter);
  };
  const onDelete = delId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== delId);
    });
  };
  const handleExists = newName => {
    return contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
    );
  };
  const filteredContactList = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });
  return (
    <>
      <h1>Phonebook</h1>
      <AddContact addContact={handleAddBook} />
      <h2>Contacts</h2>
      <Filter propValue={filter} filter={handleFilterChange} />
      <ListOfContacts contacts={filteredContactList} onDelete={onDelete} />
    </>
  );
};
