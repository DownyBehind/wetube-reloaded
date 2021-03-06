import express from "express";
import { edit, remove } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/delet", remove);

export default userRouter;
