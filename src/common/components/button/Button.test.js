import { BUTTON_TYPE_CLASSES } from 'src/common/constants'
import { shallow } from 'enzyme'
import Button from './Button'

const mockButton = {
  type: 'button', // submit
  text: 'Primary',
  onClick: jest.fn(),
  disabled: false,
  validButtons: [BUTTON_TYPE_CLASSES.google],
  isLoading: false,
}

it('displays the text prop correctly in the button', () => {
  const wrapper = shallow(<Button text={mockButton.text} />)

  expect(
    wrapper
      .find('[data-testid="button"]')
      .contains(<span className="button-text">{mockButton.text}</span>)
  ).toEqual(true)
})

it('displays a spinner in the button if isLoading is set to true', () => {
  const wrapper = shallow(<Button isLoading text={mockButton.text} />)

  expect(
    wrapper.find('[data-testid="button"]').hasClass('buttonLoading')
  ).toBeTruthy()
})
