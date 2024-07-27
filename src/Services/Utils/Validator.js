//check if the information provided by the useris valid
const joi = require("joi");

const validator = schema =>(req,res,next) =>{
    const {error} = schema.validate(req.body, { abortEarly: false});
        if(error){
            var message = ""
            for(let key in error.details){
                message+= error.details[key].message + '\n'
            }
            return res.status(400).json({
                message: message
            })
        }
        next();
}


const todoSchema = joi.object({
    todo: joi.string().required(),
    isCompleted: joi.string().required(),
})

module.exports = {
    validateTodos: validator(todoSchema)
}