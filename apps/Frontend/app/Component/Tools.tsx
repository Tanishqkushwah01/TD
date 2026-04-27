"use client";

import { useState } from "react";
import {
  Arrow, Circle, Cursor, Diamond, Eraser,
  HandTool, Line, LockIcon, Pencil, Rect, Text
} from "./Icons/ToolIcons";
// import { tools } from "./Canvas";

export default function Tools( {
    activeTool,
    setActiveTool,
  }: {
    activeTool: number;
    setActiveTool: (tool: number) => void;
  }) {
  const [hovered, setHovered] = useState<number | null>(null);
   const tools = [
              LockIcon,
              HandTool,
              Cursor,
            Rect,
             Diamond,
              Circle,
              Arrow,
              Line,
             Pencil,
              Text,
             Eraser
          ];
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        background: "white",
        padding: "10px 20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        width: "490px",
        height: "40px",
      }}
    >
      {tools.map((Icon, i) => (
        <button
          key={i}
          onClick={() => setActiveTool(i)}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            background:
              activeTool === i
                ? "purple"
                : hovered === i
                ? "lightgray"
                : "white",
            border: "none",
            padding: "6px",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          <Icon />
        </button>
      ))}
    </div>
  );
}