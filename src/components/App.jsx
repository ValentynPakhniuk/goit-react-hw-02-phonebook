import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container.styled';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const isContactExists = this.state.contacts.some(
      contact => contact.name === newContact.name
    );
    if (isContactExists) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDelete = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: newContacts });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.state.contacts}
          handleDelete={this.handleDelete}
          filter={this.state.filter}
        />
      </Container>
    );
  }
}
