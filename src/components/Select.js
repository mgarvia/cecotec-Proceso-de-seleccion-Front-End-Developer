import React from 'react';
import PropTypes from 'prop-types';

const Select = props => {
  const {id, labelName, classInput, name, value, onChange } = props;
  return (
    <div className="Input" >
      <label htmlFor={id}>{labelName}</label>
      <select id={id} className={`Input__input ${classInput}`} name={name} defaultValue={value} onChange={onChange}>
        {props.children}
      </select>
    </div>
  )
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string,
  classInput: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

Select.defaultProps = {
  labelName: '',
  classInput: '',
}

export default Select;