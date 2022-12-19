import PropTypes from 'prop-types'

import classes from 'src/common/components/spinner/dark/dark-spinner.module.scss'
import { SPINNER_SIZES } from 'src/common/constants'

function DarkSpinner({ size = SPINNER_SIZES.MEDIUM }) {
  const spinnerCssClasses = [classes.loader]
  switch (size) {
    case SPINNER_SIZES.EXTRA_SMALL:
      spinnerCssClasses.push(classes.xs)
      break
    case SPINNER_SIZES.SMALL:
      spinnerCssClasses.push(classes.s)
      break
    case SPINNER_SIZES.MEDIUM:
      spinnerCssClasses.push(classes.m)
      break
    default:
      spinnerCssClasses.push(classes.absolute)
  }
  return <div className={spinnerCssClasses.join(' ')}>Loading...</div>
}

export default DarkSpinner

DarkSpinner.propTypes = {
  size: PropTypes.string,
}
