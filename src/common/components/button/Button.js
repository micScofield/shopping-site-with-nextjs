import React from 'react'

import PropTypes from 'prop-types'

import classes from 'src/common/components/button/button.module.scss'
// import LightSpinner from 'common/components/spinner/light/LightSpinner';
// import { SPINNER_SIZES } from 'common/constants';
// import DarkSpinner from '../spinner/dark/DarkSpinner';

function Button(props) {
  const {
    type,
    text,
    onClick,
    secondaryButtonClass,
    disabled,
    validButtons,
    isLoading,
  } = props

  // determining button classes
  const buttonCssClasses = [classes.button]
  if (isLoading) buttonCssClasses.push(classes.buttonLoading)
  if (secondaryButtonClass) buttonCssClasses.push(`${secondaryButtonClass}`)

  // determining if button needs to be disabled
  let flag = disabled
  if (validButtons?.includes(secondaryButtonClass)) flag = false

  return (
    <button
      className={buttonCssClasses.join(' ')}
      type={type}
      onClick={onClick}
      disabled={flag}
      data-testid="button"
    >
      <span className={classes.buttonText}>{text}</span>
    </button>
  )
}

export default Button

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  secondaryButtonClass: PropTypes.array,
  validButtons: PropTypes.array,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  type: 'button',
  text: '',
  onClick: () => {},
  secondaryButtonClass: [],
  validButtons: [],
  isLoading: false,
  disabled: false,
}
