import PropTypes from 'prop-types';
import { StyledLi, StyledP, StyledButton } from './contactsList.styled'

const ContactListItem = ({ onDelete, name, number, id  }) => {
  return (
    <StyledLi key={id}><StyledP>{name}:</StyledP>
        <StyledP>{number}</StyledP>
        <StyledButton type='button' onClick={() => onDelete(id)}>delete</StyledButton>
    </StyledLi>
  );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default ContactListItem;