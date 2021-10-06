const { body, validationResult } = require("express-validator");

// register validator

exports.registerValidator = () => [
  body("lastname", "Nom obligatoir est contient au minimum 3 caractére ").matches('^[a-zA-Z ]{3,}'),
  body("firstname", "Nom obligatoir est contient au minimum 3 caractére ").matches('^[a-zA-Z ]{3,}'),
  body("username", "Nom obligatoir est contient au minimum 3 caractére ").matches('^[a-zA-Z ]{3,}'),
  body("city", "Nom obligatoir est contient au minimum 3 caractére ").matches('^[a-zA-Z ]{3,}'),
  body("adresse", "Nom obligatoir est contient au minimum 3 caractére ").matches('^[a-zA-Z ]{3,}'),
  body("email", "email is not valid").isEmail(),
  body("phone", "téléphone obligatoir et que des chiffre").matches('^[0-9]{8,}'),
  body("postal_code", "le code postale est obligatoir et que des chiffre").matches('^[0-9]{4,}'),
  body("password", "password length 6 min").matches('^[0-9a-zA-Z ]{6,}'),
  body("type", "A U C").matches('^[A U C]{1,1}'),
];

// register validator

exports.passwordValidator = () => [
 
  body("password", "password length 6 min").matches('^[0-9a-zA-Z ]{6,}'),
  body("Npassword", "password length 6 min").matches('^[0-9a-zA-Z ]{6,}')
];

//update validation
exports.editValidator = () => [
  body("lastname", "Nom obligatoir est contient au minimum 3 caractére ").matches('^[a-zA-Z ]{3,}'),
  body("firstname", "Nom obligatoir est contient au minimum 3 caractére ").matches('^[a-zA-Z ]{3,}'),
  body("city", "Nom obligatoir est contient au minimum 3 caractére ").matches('^[a-zA-Z ]{3,}'),
  body("adresse", "Nom obligatoir est contient au minimum 3 caractére ").matches('^[a-zA-Z ]{3,}'),
  body("phone", "téléphone obligatoir et que des chiffre").matches('^[0-9]{8,}'),
  body("postal_code", "le code postale est obligatoir et que des chiffre").matches('^[0-9]{4,}'),
];

//login validator

exports.loginValidator = () => [
    body("username", "Nom obligatoir est contient au minimum 3 caractére ").matches('^[a-zA-Z ]{3,}'),
    body("password", "password length 6 min").matches('^[0-9a-zA-Z ]{6,}')
];

// midel validator
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
