import { UserService } from '../services';
import HttpStatus from 'http-status-codes';
import { Response, Message } from '../utils';

export const createUser = async (req, res, next) => {
    console.log('plug');
    try {
        console.log('jojo');
        const data = await UserService.createUser(req.body);
        return res.status(HttpStatus.CREATED).json(
            Response.format(data, Message.CREATE_USER, HttpStatus.CREATED)
        )
    } catch (error) {
        next(error)
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const data = await UserService.loginUser(req.body);
        return res.status(HttpStatus.OK).json(
            Response.format(data, Message.LOGIN_USER, HttpStatus.OK)
        )
    } catch (error) {
        next(error)
    }
}