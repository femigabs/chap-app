import { Router } from "express";
import users from '../../routes/users';

const api = Router();

api.use('/auth', users)

export default api;