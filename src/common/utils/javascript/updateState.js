const updateState = (oldState, updatedProperties) => ({
  ...oldState,
  ...updatedProperties,
})

export default updateState
