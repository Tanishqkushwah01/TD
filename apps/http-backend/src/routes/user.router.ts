import {Router} from "express";
const router:Router = Router();


import * as userController from "../controllers/user.controller.js";
import userMiddleware from "../middlewares/user.middleware.js"

router.post("/signup",userController.signup);
router.post("/signin",userController.signin);
router.post("/room",userMiddleware,userController.room);
router.get("/cards",userMiddleware,userController.cards);
router.post("/joinRoom",userMiddleware,userController.joinRoom);

export default router;