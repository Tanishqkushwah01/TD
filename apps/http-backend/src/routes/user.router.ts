import {Router} from "express";
const router:Router = Router();


import * as userController from "../controllers/user.controller.js";
import userMiddleware from "../middlewares/user.middleware.js"

router.post("/signup",userController.signup);
router.post("/signin",userController.signin);
router.post("/room",userMiddleware,userController.room);

export default router;