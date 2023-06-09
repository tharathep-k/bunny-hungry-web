import Joi from "joi";

const loginSchema = Joi.object({
  mobile: Joi.string()
    .pattern(/^[0-9]{10}/)
    .messages({
      "string.empty": "Phone number is required.",
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
});
export default function validateLogin(input) {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
}
