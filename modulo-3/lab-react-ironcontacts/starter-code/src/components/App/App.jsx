import React, { Component } from 'react';
import './App.css';
import contacts from '../../contacts.json';
import Table from '../Table/Table';
import Button from '../Button/Button';

const fiveContacts = contacts.slice(0, 5);
const otherContacts = contacts.slice(5);

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: fiveContacts,
    };
    this.addRandom = this.addRandom.bind(this);
    this.sortContactsByName = this.sortContactsByName.bind(this);
    this.sortContactsByPopularity = this.sortContactsByPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandom() {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    this.state.contacts.push(otherContacts[randomIndex]);
    this.setState({
      contacts: this.state.contacts,
    });
  }

  sortContactsByName() {
    this.state.contacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: this.state.contacts,
    });
  }

  sortContactsByPopularity() {
    this.state.contacts.sort((a, b) => a.popularity - b.popularity);
    this.setState({
      contacts: this.state.contacts,
    });
  }

  deleteContact(idx) {
    this.state.contacts.splice(idx, 1);
    this.setState({
      contacts: this.state.contacts,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <Button name="Add Random Contact" onClickFunction={this.addRandom}/>
        <Button name="Sort by Name" onClickFunction={this.sortContactsByName}/>
        <Button name="Sort by Popularity" onClickFunction={this.sortContactsByPopularity}/>
        <Table contacts={this.state.contacts} onClickFunction={this.deleteContact}/>
      </div>
    );
  }
}

export default App;
