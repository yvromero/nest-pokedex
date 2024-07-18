
import * as Joi from 'joi'; 

export const JOiValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3002),
    DEFAULT_LIMIT: Joi.number().default(6),
})