// "use client"

// import {  useState ,useRef, useEffect} from "react";
// import Tools from "./Tools";
// import {Game} from "./Game";

//  export const tools = [
//           "LockIcon",
//           "HandTool",
//           "Cursor",
//           "Rect",
//           "Diamond",
//           "Circle",
//           "Arrow",
//           "Line",
//           "Pencil",
//           "Text",
//           "Eraser",
//       ];
// export default function Canvas({ roomId ,socket}: { roomId: string ,socket:WebSocket}) {
  
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [game,setGame] =useState<Game>();
//   const [activeTool, setActiveTool] = useState<number>(2);

//   useEffect(()=>{
//     game?.setActiveTool(activeTool);
//   },[activeTool,game]);

//   useEffect(()=>{
//     if(canvasRef.current)
//     {
//       const g = new Game(canvasRef.current,roomId,socket,activeTool);
//       setGame(g);

//       return ()=>{
//         g.destroy();
//       }
//     }
//   },[canvasRef]);
  
  
//   return (
//     <div className="h-screen bg-red-500 overflow-hidden">
//       <canvas width={window.innerWidth} height={window.innerHeight}></canvas>
//       <Tools activeTool={activeTool} setActiveTool={setActiveTool}/>
  
//     </div>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import { Game } from "./Game";
import Tools from "./Tools";
import {
  Arrow, Circle, Cursor, Diamond, Eraser,
  HandTool, Line, LockIcon, Pencil, Rect, Text
} from "./Icons/ToolIcons";


export const toolNames = [
  "LockIcon",
  "HandTool",
  "Cursor",
  "Rect",
  "Diamond",
  "Circle",
  "Arrow",
  "Line",
  "Pencil",
  "Text",
  "Eraser",
] as const;

// export type Tool = typeof toolNames[number];


export default function Canvas({
  roomId,
  socket,
}: {
  roomId: string;
  socket: WebSocket;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [game, setGame] = useState<Game | null>(null);
  const [activeTool, setActiveTool] = useState<number>(2);

  // 🎯 update tool
  useEffect(() => {
    if (game) {
      game.setTool(activeTool);
    }
  }, [activeTool, game]);

  // 🎯 init game
  useEffect(() => {
    if (!canvasRef.current) return;

    const g = new Game(canvasRef.current, roomId, socket, activeTool);
    setGame(g);

    return () => {
      // g.destroy();
    };
  }, [roomId, socket]);

  return (
    <div className="h-screen bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <Tools activeTool={activeTool} setActiveTool={setActiveTool} />
    </div>
  );
}