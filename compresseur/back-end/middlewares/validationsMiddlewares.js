const expressValidator = require("express-validator");
const passwordValidator = require("password-validator")

const validationLogin = [
    expressValidator.body("password").exists().isString(),
] 
const validationSignup = [
    // expressValidator.body("role").exists().isInt(),
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