import express from 'express';
import { UserControllers } from './user.controller.js';
import validateRequest from '../../middleware/validateRequest.js';


const router = express.Router();

router.post(
  '/create-user',
//   validateRequest(UserValidation.),
  UserControllers.createUser,
);


export const UserRoutes = router;