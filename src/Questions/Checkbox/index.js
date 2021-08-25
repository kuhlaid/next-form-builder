/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui'

import Checkbox from '../../Fields/Checkbox'
import ErrorMessage from '../../Fields/Error'
import Label from '../../Fields/Label'

import ReactMarkdown from '../../Fields/Markdown'

const styles = {
  selectOption: {
    background: 'bg',
    color: 'black'
  },
  markDown: {
    width: ['90%', '95%', '95%'],
    p: {
      margin: 0
    }
  }
}

const QuestionCheckbox = ({
  component,
  question,
  useForm,
  onLinkOpen,
  theme
}) => {
  const { errors, register } = useForm
  const CustomComponent = ({ component }) => component(question, useForm)

  return component ? (
    <CustomComponent component={component} />
  ) : (
    <div
      sx={
        question.id
          ? theme.checkboxContainer[question.id]
          : theme.checkboxContainer
      }
    >
      <div sx={styles.centerStyle} key={question.name}>
        <Label htmlFor={question.name} sx={styles.centerStyle}>
          <Checkbox
            id={question.name}
            aria-describedby={'error_message_' + question.name}
            sx={styles.checkboxMinWidth}
            name={question.name}
            defaultChecked={question.defaultChecked}
            ref={register({
              ...question.registerConfig
            })}
            data-testid='question-checkbox'
          />
          <ReactMarkdown
            sx={styles.markDown}
            source={question.label}
            onLinkOpen={onLinkOpen}
            modalLabel={question.modalLabel}
          />
        </Label>
        {errors[question.name] && errors[question.name].type === 'required' && (
          <ErrorMessage
            theme={theme.errorMessage}
            name={question.name}
            message={question.errorMessages && question.errorMessages.required}
          />
        )}
      </div>
    </div>
  )
}

export default QuestionCheckbox
