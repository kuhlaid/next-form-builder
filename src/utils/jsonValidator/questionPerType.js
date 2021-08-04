import baseQuestionSchema from './baseQuestionSchema.js'
const Joi = require('joi')

const inputSchema = baseQuestionSchema.append({
  dependentQuestions: Joi.array().items({
    condition: Joi.string(),
    question: baseQuestionSchema
  }),
  icon: Joi.object().keys({
    name: Joi.string(),
    fill: Joi.string()
  }),
  tooltip: Joi.object().keys({
    text: Joi.string(),
    config: Joi.object().keys({
      backgroundColor: Joi.string()
    })
  })
})

const checkBoxSchema = baseQuestionSchema.append({
  dependentQuestions: Joi.array().items({
    condition: Joi.string(),
    question: baseQuestionSchema
  }),
  defaultChecked: Joi.boolean(),
  config: Joi.object().keys({
    options: Joi.array()
  })
})

const multipleCheckboxesSchema = baseQuestionSchema.append({
  dependentQuestions: Joi.array().items({
    condition: Joi.string(),
    question: baseQuestionSchema
  }),
  config: Joi.object().keys({
    options: Joi.array().items({
      label: Joi.string(),
      value: Joi.string(),
      src: Joi.string()
    })
  })
})

const selectSchema = baseQuestionSchema.append({
  dependentQuestions: Joi.array().items({
    condition: Joi.string(),
    question: baseQuestionSchema
  }),
  config: Joi.object().keys({
    options: Joi.array().items({
      label: Joi.string(),
      value: Joi.string()
    })
  })
})

const dateSchema = baseQuestionSchema.append({
  isBirthDate: Joi.boolean(),
  openToDate: Joi.string(),
  minAge: Joi.number()
})

const countrySchema = baseQuestionSchema.append({
  priorityOptions: Joi.array()
})

export {
  inputSchema,
  checkBoxSchema,
  multipleCheckboxesSchema,
  selectSchema,
  dateSchema,
  countrySchema
}
