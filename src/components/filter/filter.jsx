import React from 'react'
import PropTypes from 'prop-types';
import {StyledLable, StyledInput} from './filter.styled'

const Filter = ({value, onFilter}) => ( 
    <StyledLable>Find contacts by name
        <StyledInput type="text" value={value} onChange={onFilter} />
    </StyledLable>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
};

export default Filter;