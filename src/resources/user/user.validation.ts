import Joi from "joi";


const register = Joi.object({
    //setting restricitons to user input
    name: Joi.string().max(30),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

const login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export default { register, login }