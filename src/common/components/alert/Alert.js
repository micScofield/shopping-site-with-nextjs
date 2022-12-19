import { ALERT_TYPES } from 'src/common/constants'
import React from 'react'

import classes from 'src/common/components/alert/alert.module.scss'

function Alert({ msg, type, onClose }) {
  const alertCssClasses = [classes.alert]

  switch (type) {
    case ALERT_TYPES.SUCCESS:
      alertCssClasses.push(alert.success)
      break
    case ALERT_TYPES.ERROR:
      alertCssClasses.push(alert.error)
      break
    case ALERT_TYPES.WARNING:
      alertCssClasses.push(alert.warning)
      break
    default:
      break
  }
  return (
    <div className={classes.alertContainer}>
      <span data-testid="alert-msg" className={alertCssClasses.join(' ')}>
        {msg}
      </span>
      <span
        data-testid="alert-x-icon"
        className={classes.alertXIcon}
        onClick={onClose}
        onKeyDown={onClose}
        role="button"
        tabIndex={0}
      >
        &#10005;
      </span>
    </div>
  )
}

export default Alert
