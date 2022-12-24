import { useState, useEffect} from 'react';
import { nanoid } from 'nanoid'
import { Form } from '../form/form';
import ContactsList from '../contactsList/contactList';
import Filter from '../filter/filter';
import { StyledDiv, StyledH1, StyledH2 } from './App.styled'


export const  App = () => { 
  
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ??
    [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
  })
  
  const [filter, setFilter] = useState('')

    useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts]);

  const formSubmitHendler = data => { 
    const oldName = contacts.map(contact => contact.name);
    if (oldName.includes(data.name)) {
      return alert(`${data.name} is already in contacts`);
    }
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }
    
    setContacts(prevState => [contact, ...prevState]);
    return true;
  }

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };
    
    const normalizedFilter = filter.toLowerCase();
    const visibleContact = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <StyledDiv>
        <StyledH1>Phonebook</StyledH1>
        <Form onSubmit={formSubmitHendler} />
        <StyledH2>Contacts</StyledH2>
        <Filter value={filter} onFilter={changeFilter} />
        <ContactsList contacts={visibleContact} onDelete={deleteContact} />
      </StyledDiv>
    )

}


