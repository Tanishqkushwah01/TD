import { WebSocketServer, WebSocket } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { Types } from "mongoose";
import ChatModel from "@repo/db/chatModel";

const wss = new WebSocketServer({ port: 8080 });
interface User {
    ws: WebSocket,
    rooms: string[],
    userId: string
}

let users: User[] = [];

function checkUser(token: string): string | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (typeof decoded == "string") {
            return null;
        }
        if (!decoded || !decoded.userId) {
            return null;
        }
        return decoded.userId;
    } catch (e) {
        return null;
    }
}


wss.on('connection', function connection(ws, request) {
    const url = request.url;
    if (!url) {
        return;
    }
    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token') || "";
    const userId = checkUser(token);

    if (userId == null) {
        ws.send(JSON.stringify({
            type: "error",
            message: "Unauthorized"
        }));
        ws.close();
        return;
    }
    users.push({ userId, rooms: [], ws })


    ws.on('message', async function message(data) {
        try {
            let parsedData;
           
            if (typeof data !== "string") {
                parsedData = JSON.parse(data.toString());
            } else {
                parsedData = JSON.parse(data);
            }

            if (parsedData.type == "join_room") {
                const user = users.find(x => x.ws === ws);
                // user?.rooms.push(parsedData.roomId);
                if (user && !user.rooms.includes(parsedData.roomId)) {
                    user.rooms.push(parsedData.roomId);
                  }
            }
            if (parsedData.type == "leave_room") {
                const user = users.find(x => x.ws == ws);
                if (!user) {
                    return;
                }
                // user.rooms = user?.rooms.filter(x => x === parsedData.room);
                user.rooms = user.rooms.filter(x => x !== parsedData.roomId);
            }

            if (parsedData.type == "chat") {
                const roomId = parsedData.roomId;
                const message = parsedData.message;

                await ChatModel.create({
                    roomId, message, userId
                });
                users.forEach(user=>{
                    if(user.rooms.includes(roomId))
                    {
                        user.ws.send(JSON.stringify({
                            type:"chat",
                            message:message,
                            roomId
                        }))
                    }
                })
            }

        } catch (e) {
          return null;
        }
    });

    ws.on("close", () => {
        users = users.filter(user => user.ws !== ws);
        console.log("User disconnected");
    });
})