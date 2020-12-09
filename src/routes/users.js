import { Router } from 'express';
import { UserController } from '../controllers';
import { UserValidator } from '../validators';

const router = Router();

router.post(
    '/signup',
    UserValidator.createUser,
    UserController.createUser
);

router.post(
    '/login',
    UserValidator.loginUser,
    UserController.loginUser
)

export default router