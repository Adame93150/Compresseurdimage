const expressValidator = require("express-validator");
const passwordValidator = require("password-validator")

// validation back du login (securité)
const validationLogin = [
    expressValidator.body("password").exists().isString(),
] 
// validation back du sign up
const validationSignup = [
    expressValidator.body("email").exists().isEmail(),
    expressValidator.body("password").exists().isString().custom(value => {
        const schema = new passwordValidator()

        schema
            .is().min(6)
            .is().max(30)
            .has().uppercase(1)
            .has().lowercase(1)
            .has().digits(1)
            .has().not().spaces()
           

        return schema.validate(value);

    }),
  
]




module.exports = {
    
    validationSignup,
    validationLogin
}