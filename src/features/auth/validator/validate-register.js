import Joi from "joi";

const regiterSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "Firstname is required.",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "Lastname is required.",
  }),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .messages({
      "string.empty": "Phonenumber is required.",
      "string.pattern.base": "Phone number is required.",
    }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
    .trim()
    .required()
    .messages({
      "string.empty": "Password is required.",
      "string.pattern.base": "Password must be at least 6 characters.",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
    "any.only": "Password and Confrimpassword did not match.",
    "string.empty": "Confirm password is required.",
  }),
});

export default function validateRegister(input) {
  const { error } = regiterSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
}
