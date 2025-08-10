import express from 'express'
import { Router } from 'express';
import { registerController , loginUser} from '../controllers/user.controller.js';

const router = Router();

router.route("/register").post(registerController)
router.route("/login").post(loginUser)

export default router;