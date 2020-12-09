import joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';
import {
    Response, Message
} from "../utils";

const emptyField = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(HttpStatus.BAD_REQUEST).json(
            Response.format(null, Message.EMPTY_FIELD, HttpStatus.BAD_REQUEST)
        )
    }
}

const formatError = (error, value, req, res, next) => {
    if (error) {
        const message = error.details[0].message.replace(
            /[\"]/gi,
            ''
        )
        return res.status(HttpStatus.BAD_REQUEST).json(
            Response.format(null, message, HttpStatus.BAD_REQUEST)
        )
    } else {
        req.body = value;
        next();
    }
}

export const createUser = (req, res, next) => {
    emptyField(req, res);
    const schema = joi.object({
        first_name: joi.string().trim().lowercase({ convert: true }).required(),
        last_name: joi.string().trim().lowercase({ convert: true }).required(),
        email: joi.string().trim().lowercase({ convert: true }).email()
            .required(),
        username: joi.string().trim().lowercase({ convert: true })
            .min(5).max(20).required(),
        password: joi.string().min(6).max(25).required(),
    })
    const { error, value } = schema.validate(req.body);
    formatError(error, value, req, res, next);
}

export const loginUser = (req, res, next) => {
    emptyField(req, res);
    const schema = joi.object({
        email: joi.string().trim().lowercase({ convert: true }).email(),
        username: joi.string().trim().lowercase({ convert: true })
            .min(5).max(20),
        password: joi.string().min(6).max(25).required(),
    })
    const { error, value } = schema.validate(req.body);
    formatError(error, value, req, res, next);
}
