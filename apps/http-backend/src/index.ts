import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

import userRouter from "./routes/user.router.js";
import connectDB from "@repo/db/connect";

app.use("/user",userRouter);


async function start() {
  await connectDB();
  console.log("data base is working bra");
  app.listen(3001, () => {
    console.log("Server running");
  });
}

start();