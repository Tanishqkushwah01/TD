import {z}from "zod";


export const SigninSchema =  z.object({
    email:z.email(),
    password:z.string().min(3).max(20)
}).strict();

export const SignupSchema =  z.object({
    email: z.string().email(),
    password:z.string().min(3).max(20),
    name:z.string().min(3).max(20)
}).strict();


export const CreateRoomSchema =  z.object({
    name:z.string().min(3).max(20)
}).strict();

