"use client"
import { useState } from "react";
import { Arrow, Circle, Cursor, Diamond, Eraser, HandTool, Line, LockIcon, Pencil, Rect, Text } from "./Icons/ToolIcons";

export default function Tools() {

    return <div
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
            color: "black",
            cursor: "pointer",
            width: "490px",
            height: "40px",
        }}
    >
        <button
            style={{
                background: "white",
                border: "none",
                padding: "6px",
                borderRadius: "6px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "purple"}
            onMouseLeave={(e) => e.currentTarget.style.background = "white"}
        >  <LockIcon /> </button>

        <button
            style={{
                background: "white",
                border: "none",
                padding: "6px",
                borderRadius: "6px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "purple"}
            onMouseLeave={(e) => e.currentTarget.style.background = "white"}
        > <HandTool /> </button>

        <button
            style={{
                background: "white",
                border: "none",
                padding: "6px",
                borderRadius: "6px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "purple"}
            onMouseLeave={(e) => e.currentTarget.style.background = "white"}
        > <Cursor /> </button>

        <button
            style={{
                background: "white",
                border: "none",
                padding: "6px",
                borderRadius: "6px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "purple"}
            onMouseLeave={(e) => e.currentTarget.style.background = "white"}
        > <Rect /> </button>

        <button
            style={{
                background: "white",
                border: "none",
                padding: "6px",
                borderRadius: "6px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "purple"}
            onMouseLeave={(e) => e.currentTarget.style.background = "white"}
        >  <Diamond /> </button>

        <button
            style={{
                background: "white",
                border: "none",
                padding: "6px",
                borderRadius: "6px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "purple"}
            onMouseLeave={(e) => e.currentTarget.style.background = "white"}
        >  <Circle /> </button>

        <button
            style={{
                background: "white",
                border: "none",
                padding: "6px",
                borderRadius: "6px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "purple"}
            onMouseLeave={(e) => e.currentTarget.style.background = "white"}
        >  <Arrow /> </button>

        <button
            style={{
                background: "white",
                border: "none",
                padding: "6px",
                borderRadius: "6px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "purple"}
            onMouseLeave={(e) => e.currentTarget.style.background = "white"}
        >  <Line /> </button>

        <button
            style={{
                background: "white",
                border: "none",
                padding: "6px",
                borderRadius: "6px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "purple"}
            onMouseLeave={(e) => e.currentTarget.style.background = "white"}
        > <Pencil /> </button>

        <button
            style={{
                background: "white",
                border: "none",
                padding: "6px",
                borderRadius: "6px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "purple"}
            onMouseLeave={(e) => e.currentTarget.style.background = "white"}
        >  <Text /> </button>

        <button
            style={{
                background: "white",
                border: "none",
                padding: "6px",
                borderRadius: "6px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "purple"}
            onMouseLeave={(e) => e.currentTarget.style.background = "white"}
        > <Eraser /> </button>

    </div>
}