import { Request, Response } from "express";
import { SignupSchema, SigninSchema, CreateRoomSchema } from "@repo/common/types";

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

import bcrypt from "bcrypt";

import UserModel from "@repo/db/userModel";
import RoomModel from "@repo/db/roomModel";
import ChatModel from "@repo/db/chatModel";


export const signup = async (req: Request, res: Response) => {

  try {
    const parsedData = SignupSchema.safeParse(req.body);
    if (!parsedData.success) {
      return res.status(400).json({ msg: "invalid credentials" });
    }

    const hashedPassword = await bcrypt.hash(parsedData.data.password, 5);
    const user = await UserModel.create({
        email: parsedData.data.email,
        password: hashedPassword,
        name: parsedData.data.name
    });

    res.status(200).json({ userId: user.id });
  } catch (e) {
    // console.log("error==>"+e);
    console.error(e);
    res.status(500).json({ msg: "something went wrong" });
  }
}

export const signin = async (req: Request, res: Response) => {
  try {
    const parsedData = SigninSchema.safeParse(req.body);
    if (!parsedData.success) {
      return res.json({ msg: "invalid credentials" });
    }

    const user = await UserModel.findOne({
      where: {
        email: parsedData.data.email
      }
    });
    if (!user) { return res.json({ msg: "user doesn't exists" }); }

    const passwordMatched = await bcrypt.compare(parsedData.data.password, user.password);
    if (passwordMatched) {
      const token = jwt.sign({ user: user.id }, JWT_SECRET);
      res.status(200).json({ token });
    } else {
      res.status(403).json({ msg: "password doesn't matched" });
    }

  } catch (e) {
    res.status(500).json({ msg: "something went wrong" });
  }

}

export const room = async (req: Request, res: Response) => {
  try {
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if (!parsedData.success) {
      return res.status(500).json({ msg: "incorrect inputs" });
    }
    //  @ts-ignore
    const userId = req.userId;
    const room = await RoomModel.create({
        slug: parsedData.data.name,
        adminId: userId
      
    });
    console.log(room);

    res.json({ roomId: room.id })


  } catch (e) {
    res.status(500).json({ msg: "something went wrong" });
  }

}
