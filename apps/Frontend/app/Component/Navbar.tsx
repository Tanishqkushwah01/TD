"use client"
import { useState } from "react";
import { LightBtn, DarkBtn } from "../Component/Button";
import JoinRoom from "./JoinRoom";
import CreateRoom from "./CreateRoom";


export default function Navbar() {
  const [joinRoom, setJoinRoom] = useState(false);
  const [showCreateRoom, setShowCreateRoom] = useState(false);

  return (
    <>
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: 64,
        borderBottom: "1px solid #d4cec4",
        background: "#f0ece4", position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 34, height: 34, background: "#e8735a", color: "white",
            borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 16,
          }}>T</div>
          <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.3px" }}>Tanix</span>
        </div>

        {/* right nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* avatar */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 12px", border: "1.5px solid #d4cec4", borderRadius: 999, background: "#faf8f4", fontSize: 14, color: "#5a5a5a" }}>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#e8735a", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11, fontWeight: 700 }}>T</div>
            Tanishq
          </div>
          <LightBtn onClick={() => { setJoinRoom(true) }} />
          <DarkBtn onClick={() => setShowCreateRoom(true)} />

        </div>
      </nav>
      {showCreateRoom && (
        <div
          onClick={() => setShowCreateRoom(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
        >
          <div onClick={e => e.stopPropagation()}>
            <CreateRoom onClose={() => setShowCreateRoom(false)} />
          </div>
        </div>
      )}

      {joinRoom && (
        <div
          onClick={() => setJoinRoom(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
        >
          <div onClick={e => e.stopPropagation()}>
            <JoinRoom  onClose={() => setJoinRoom(false)} />
          </div>
        </div>
      )}
    </>
  );
}






