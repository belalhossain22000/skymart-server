import express from 'express';
import { UserControllers } from './user.controller.js';
import validateRequest from '../../middleware/validateRequest.js';
import { UserValidation } from './user.validation.js';


const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createUser,
);


export const UserRoutes = router;