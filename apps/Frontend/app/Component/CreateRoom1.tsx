"use client";

import { useState } from "react";
import {CopyIcon,XIcon} from "./Icons"

export interface Room {
  id: string;
  name: string;
  tag: string;
  bg: string;
  updatedAt: string;
  members: number;
}

interface CreateRoomProps {
  onClose: () => void;
  onCreate: (room: Room) => void;
}

function genRoomId(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export default function CreateRoom({ onClose, onCreate }: CreateRoomProps) {
  const [generatedId] = useState<string>(genRoomId);
  const [roomName, setRoomName] = useState<string>("Untitled board");
  const [copied, setCopied] = useState<boolean>(false);

  function copyId() {
    navigator.clipboard.writeText(generatedId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function handleCreate() {
    const newRoom: Room = {
      id: generatedId,
      name: roomName.trim() || "Untitled board",
      tag: "THINKING",
      bg: "#f5e6b8",
      updatedAt: "Just now",
      members: 1,
    };
    onCreate(newRoom);
    onClose();
  }

  return (
    <>
      <style>{`
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .cr-overlay { animation: fadeIn 0.18s ease; }
        .cr-panel   { animation: slideUp 0.22s ease; }
        .cr-submit:hover { background: #333 !important; transform: translateY(-1px); }
        .cr-copy:hover   { background: #e6ddd4 !important; }
      `}</style>

      {/* Overlay */}
      <div
        onClick={onClose}
        className="cr-overlay fixed inset-0 z-200 flex items-center justify-center"
        style={{ background: "rgba(26,26,26,0.55)", backdropFilter: "blur(4px)" }}
      >
        {/* Panel */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="cr-panel w-full mx-4"
          style={{
            maxWidth: 440,
            background: "#faf8f4",
            border: "2px solid #1a1a1a",
            borderRadius: 20,
            boxShadow: "8px 8px 0 #1a1a1a",
            padding: "36px 40px",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between" style={{ marginBottom: 28 }}>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: "-0.5px",
                color: "#1a1a1a",
                margin: 0,
              }}
            >
              Create a room
            </h2>
            <button
              onClick={onClose}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#5a5a5a", padding: 4 }}
            >
              <XIcon />
            </button>
          </div>

          {/* Board Name Label */}
          <label
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              color: "#5a5a5a",
              marginBottom: 8,
              letterSpacing: "0.04em",
            }}
          >
            BOARD NAME
          </label>

          {/* Board Name Input */}
          <input
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="e.g. Product Roadmap, System Design…"
            className="w-full focus:outline-none placeholder:text-[#b0a898]"
            style={{
              padding: "12px 16px",
              fontSize: 15,
              border: "2px solid #1a1a1a",
              borderRadius: 10,
              background: "white",
              fontFamily: "inherit",
              marginBottom: 24,
            }}
          />

          {/* Room ID Label */}
          <label
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              color: "#5a5a5a",
              marginBottom: 8,
              letterSpacing: "0.04em",
            }}
          >
            ROOM ID
          </label>

          {/* Room ID Row */}
          <div
            className="flex items-center justify-between"
            style={{
              background: "white",
              border: "2px solid #1a1a1a",
              borderRadius: 10,
              padding: "12px 16px",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 28,
                letterSpacing: "0.15em",
                fontWeight: 700,
                color: "#1a1a1a",
              }}
            >
              {generatedId}
            </span>
            <button
              onClick={copyId}
              className="cr-copy flex items-center gap-1.5"
              style={{
                background: copied ? "#c8e8c8" : "#f0ece4",
                border: "1.5px solid #d4cec4",
                borderRadius: 8,
                padding: "6px 12px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s",
                color: "#1a1a1a",
              }}
            >
              <CopyIcon /> {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Helper text */}
          <p
            style={{
              fontSize: 13,
              color: "#8a8070",
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
              marginBottom: 28,
            }}
          >
            Share this 6-digit ID with collaborators.
          </p>

          {/* Submit */}
          <button
            onClick={handleCreate}
            className="cr-submit w-full flex items-center justify-center gap-2"
            style={{
              background: "#1a1a1a",
              color: "white",
              border: "none",
              borderRadius: 10,
              padding: "14px",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.2s, transform 0.15s",
            }}
          >
            Start drawing →
          </button>
        </div>
      </div>
    </>
  );
}