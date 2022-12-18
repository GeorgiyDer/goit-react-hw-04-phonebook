import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../contactsListItem/contactsListItem'
import { StyledUl } from './contactList.styled'

const ContactsList = ({ contacts, onDelete }) =>
    <StyledUl>
        {contacts.map(({ name, number, id }) => (<ContactListItem
            key={id}
            onDelete={onDelete}
            name={name}
            number={number}
            id={id}
        />))}
    </StyledUl>;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactsList