import classes from 'src/common/components/null-spacer/null-spacer.module.scss'

// This component is created just to add slight margin to top of the navigation and upping the z-index such that data flows under this and not above, providing better visual exp to the user.

function NullSpacer() {
  return <div className={classes.nullSpacer} />
}

export default NullSpacer
