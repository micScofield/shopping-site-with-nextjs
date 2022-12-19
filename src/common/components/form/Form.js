import Button from 'src/common/components/button/Button'
import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import FormInput from 'src/common/components/form/FormInput'
import classes from 'src/common/components/form/form.module.scss'
import updateState from 'src/common/utils/javascript/updateState'
import checkValidity from 'src/common/utils/javascript/validity'

/*
Idea of extFormData is to enable the feature where we can set form data explicitly. Thus we require a useEffect for it.
*/

function Form(props) {
  const {
    formFields,
    buttons,
    headerData,
    onSubmit,
    extFormData = {},
    validButtons,
  } = props

  const [actionForm, setActionForm] = useState(formFields)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    let extFormFields = {}
    extFormFields = JSON.parse(JSON.stringify(actionForm))
    if (extFormData && Object.keys(extFormData).length !== 0) {
      for (const i in extFormData) {
        if (Object.prototype.hasOwnProperty.call(extFormFields, i)) {
          extFormFields[i].value = extFormData[i]
        }
      }
      console.log("shouldn't be here if not passing the form data explicitly")
      setActionForm(extFormFields)
    }
  }, [extFormData, actionForm])

  const onChange = (e, inputIdentifier) => {
    e.preventDefault()

    const updatedForm = updateState(actionForm, {
      [inputIdentifier]: updateState(actionForm[inputIdentifier], {
        value: e.target.value,
        touched: true,
        valid: checkValidity(
          e.target.value,
          actionForm[inputIdentifier].validation
        ),
      }),
    })

    let temp = true
    for (const key in updatedForm) {
      if (Object.prototype.hasOwnProperty.call(updatedForm, key)) {
        temp = updatedForm[key].valid && temp
      }
    }

    setActionForm(updatedForm)
    setIsFormValid(isFormValid)
  }

  const resetFormFields = () => {
    const resetForm = JSON.parse(JSON.stringify(actionForm))
    for (const key in resetForm) {
      if (Object.prototype.hasOwnProperty.call(resetForm, key)) {
        resetForm[key].value = ''
      }
    }

    setActionForm(resetForm)
  }

  // we receive form as an object, converting it to an array =
  const formArray = []
  for (const i in actionForm) {
    if (Object.prototype.hasOwnProperty.call(actionForm, i)) {
      const formElement = {
        id: i,
        config: actionForm[i],
      }
      formArray.push(formElement)
    }
  }

  // customising on submit handler from the one we receive as prop
  const onSubmitHandler = (e, resetFormFieldsMethod) => {
    const payload = {}
    for (const i in actionForm) {
      if (Object.prototype.hasOwnProperty.call(actionForm, i)) {
        payload[i] = actionForm[i].value
      }
    }

    // call the handler provided to this form as prop
    onSubmit(e, payload, resetFormFieldsMethod)
  }

  return (
    <div className={classes.formContainer}>
      {headerData &&
        headerData.map((element) => {
          const { text, type } = element
          switch (type) {
            case 'h2':
              return (
                <Fragment key={text}>
                  <h2>{text}</h2>
                </Fragment>
              )
            case 'span':
              return (
                <Fragment key={text}>
                  <span>{text}</span>
                </Fragment>
              )
            default:
              return (
                <Fragment key={text}>
                  <p>{text}</p>
                </Fragment>
              )
          }
        })}
      {formArray && (
        <form onSubmit={(e) => onSubmitHandler(e, resetFormFields)}>
          {formArray.map((field) => {
            const {
              id,
              config: {
                touched,
                type,
                value,
                valid,
                placeholder,
                validation,
                htmlType,
                label,
              },
            } = field
            return (
              <Fragment key={id}>
                <FormInput
                  htmlType={htmlType}
                  type={type}
                  touched={touched}
                  invalid={!valid}
                  id={id}
                  label={label}
                  value={value}
                  onChange={onChange}
                  placeholder={placeholder}
                  isRequired={validation?.required}
                />
              </Fragment>
            )
          })}

          {buttons && (
            <div className={classes.buttonsContainer}>
              {buttons.map((button) => (
                <Fragment key={button.text}>
                  <Button
                    {...button}
                    disabled={!isFormValid}
                    validButtons={validButtons}
                  />
                </Fragment>
              ))}
            </div>
          )}
        </form>
      )}
    </div>
  )
}

export default Form

Form.propTypes = {
  formFields: PropTypes.objectOf(PropTypes.object),
  buttons: PropTypes.arrayOf(PropTypes.object),
  headerData: PropTypes.arrayOf(PropTypes.object),
  onSubmit: PropTypes.func,
  buttonTypeClasses: PropTypes.object,
  validButtons: PropTypes.array,
}
