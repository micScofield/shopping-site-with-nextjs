import React from 'react'

import PropTypes from 'prop-types'
import classes from 'src/common/components/form/form-input.module.scss'

function FormInput({
  id,
  type,
  invalid = false,
  touched = false,
  value,
  onChange,
  label,
}) {
  return (
    <div className={classes.group}>
      <input
        type={type || 'test'}
        id={id}
        value={value}
        onChange={(e) => onChange(e, id)}
        className={`${classes.formInput} ${
          invalid && touched ? 'invalid' : ''
        }`}
      />
      {label && (
        <label
          htmlFor={id}
          className={`${classes.formInputLabel} ${value ? 'shrink' : ''}`}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  touched: PropTypes.bool,
  type: PropTypes.oneOf([
    'email',
    'password',
    'search',
    'text',
    'tel',
    'url',
    'number',
    'range',
    'datetime-local',
    'month',
    'time',
    'week',
    'date',
    'color',
  ]),
  label: PropTypes.string,
}
