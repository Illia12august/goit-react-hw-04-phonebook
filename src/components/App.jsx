import AddContact from './AddContact/AddContact';
import { Component } from 'react';
import ListOfContacts from './ContactList/ListOfContacts';
import Filter from './Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const contacts = JSON.parse(savedContacts);
      this.setState({ contacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  handleAddBook = newContact => {
    if (this.handleExists(newContact.name)) {
      alert('Contact with this name already exists!');
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleFilterChange = newFilter => {
    this.setState({ filter: newFilter });
  };

  onDelete = delId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== delId),
      };
    });
  };

  handleExists = newName => {
    return this.state.contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
    );
  };

  render() {
    const filteredContactList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return (
      <>
        <h1>Phonebook</h1>
        <AddContact addContact={this.handleAddBook} />
        <h2>Contacts</h2>
        <Filter propValue={this.state.filter} filter={this.handleFilterChange} />
        <ListOfContacts
          contacts={filteredContactList}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}
