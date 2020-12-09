import { config } from '../config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secret = config.KEY;
console.log('popo', secret);

export const hashPassword = (password) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt)
    return hash;
}

export const comparePassword = (password, hash) => {
    const validPassword = bcrypt.compareSync(password, hash);
    const result = validPassword ? true : false;
    return result;
}

export const generateToken = (payload) => {
    return jwt.sign(payload, secret, { expiresIn: '1d' })
}