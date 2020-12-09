import { User } from '../config';
import {
    Response, Message, Hash
} from "../utils";
import HttpStatus from 'http-status-codes';

export const createUser = async (body) => {
    console.log('loko');
    const {
        first_name, last_name, username, email, password
    } = body;
    console.log(first_name, last_name, username, email, password);
    const hashPassword = Hash.hashPassword(password);
    await checkIfEmailExist(email);
    await checkIfUsernameExist(username);
    const user = new User({ first_name, last_name, username, email, password: hashPassword });
    return user.save();
}

export const checkIfEmailExist = async (email) => {
    const user = await User.findOne({ email });
    if (user) {
        throw Response.format(null, Message.USER_EXISTS, HttpStatus.CONFLICT)
    }
}

export const checkIfUsernameExist = async (username) => {
    const user = await User.findOne({ username });
    if (user) {
        throw Response.format(null, Message.USER_EXISTS, HttpStatus.CONFLICT)
    }
}

export const checkIfIdExist = async (id) => {
    const user = await User.findOne({ id });
    if (!user) {
        throw Response.format(null, Message.USER_NOT_FOUND, HttpStatus.NOT_FOUND)
    }
}

export const loginUser = async (body) => {
    const {
        email, username, password
    } = body;
    const result = email
        ? await User.findOne({ email })
        : await User.findOne({ username });
    if (!result) {
        throw Response.format(null, Message.WRONG_DETAILS, HttpStatus.NOT_FOUND)
    };
    const { password: hash_password, id, first_name, last_name } = result;
    if (!Hash.comparePassword(password, hash_password)) {
        throw Response.format(null, Message.WRONG_DETAILS, HttpStatus.BAD_REQUEST)
    };
    const token = Hash.generateToken({ id, first_name, last_name, username });
    const data = {
        id, first_name, last_name, username, email, token
    };
    return data;
}