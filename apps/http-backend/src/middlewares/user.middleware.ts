import { JWT_SECRET } from "@repo/backend-common/config";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default function userMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"] ?? "";
    // console.log("toku = ",token);
    // console.log("room id = ",req.body);

    const decoded = jwt.verify(token, JWT_SECRET);
    // console.log("decoded data = ",decoded);


    if (decoded) {
        // @ts-ignore
        req.userId = decoded.user;
        next();

    } else {
        res.status(403).json({ msg: "unauthorized" });
    }
}