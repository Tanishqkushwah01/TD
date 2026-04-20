"use client";

import { useState } from "react";

// random 6 digit room idida 
function genRoomId() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}



export const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);


export const LinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6.5 9.5a3.536 3.536 0 005 0l2-2a3.536 3.536 0 00-5-5l-1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9.5 6.5a3.536 3.536 0 00-5 0l-2 2a3.536 3.536 0 005 5l1-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const UsersIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
    <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M1.5 13c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14.5 13c0-1.93-1.12-3.6-2.75-4.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);


export const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);


export const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect x="6" y="6" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 10H3a1 1 0 01-1-1V3a1 1 0 011-1h6a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);


// ─── seed data ────────────────────────────────────────────
const SEED_ROOMS = [
  { id: "482910", name: "Product Roadmap Q3", tag: "PRODUCT", bg: "#f5c4be", updatedAt: "2 hours ago", members: 3 },
  { id: "739201", name: "System Architecture", tag: "ENGINEERING", bg: "#c8dce8", updatedAt: "Yesterday", members: 5 },
  { id: "561804", name: "Brand Brainstorm", tag: "THINKING", bg: "#c8e8c8", updatedAt: "3 days ago", members: 2 },
];



// ─── canvas mini-preview svgs ─────────────────────────────
const svgForTag = {
  PRODUCT: (
    <svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
      <polygon points="62,60 42,80 62,100 82,80" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
      <line x1="82" y1="80" x2="130" y2="80" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#ub)"/>
      <rect x="130" y="66" width="34" height="28" rx="3" fill="white" stroke="#e8735a" strokeWidth="2"/>
      <defs>
        <marker id="ub" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#1a1a1a"/>
        </marker>
      </defs>
    </svg>
  ),
  ENGINEERING: (
    <svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="42" width="44" height="32" rx="3" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
      <rect x="68" y="28" width="44" height="32" rx="3" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
      <rect x="124" y="54" width="44" height="32" rx="3" fill="white" stroke="#e8735a" strokeWidth="2"/>
      <line x1="56" y1="58" x2="68" y2="44" stroke="#1a1a1a" strokeWidth="1.5"/>
      <line x1="112" y1="44" x2="124" y2="63" stroke="#1a1a1a" strokeWidth="1.5"/>
    </svg>
  ),
  THINKING: (
    <svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="60" r="20" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
      <line x1="110" y1="58" x2="145" y2="38" stroke="#1a1a1a" strokeWidth="1.5"/>
      <circle cx="150" cy="35" r="12" fill="white" stroke="#e8735a" strokeWidth="1.5"/>
      <line x1="113" y1="65" x2="148" y2="84" stroke="#1a1a1a" strokeWidth="1.5"/>
      <circle cx="152" cy="88" r="10" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
      <line x1="70" y1="52" x2="38" y2="34" stroke="#1a1a1a" strokeWidth="1.5"/>
      <circle cx="32" cy="30" r="10" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
    </svg>
  ),
  DEFAULT: (
    <svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="38" width="60" height="44" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
      <path d="M80 60 Q120 40 140 60" fill="none" stroke="#e8735a" strokeWidth="2" markerEnd="url(#defa)"/>
      <circle cx="152" cy="60" r="22" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
      <defs>
        <marker id="defa" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#e8735a"/>
        </marker>
      </defs>
    </svg>
  ),
};

// ─── Modal overlay ─────────────────────────────────────────
function Modal({ onClose, children }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "rgba(26,26,26,0.55)", backdropFilter: "blur(4px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      animation: "fadeIn 0.18s ease",
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#faf8f4", border: "2px solid #1a1a1a",
        borderRadius: 20, boxShadow: "8px 8px 0 #1a1a1a",
        padding: "36px 40px", width: "100%", maxWidth: 440,
        animation: "slideUp 0.22s ease",
      }}>
        {children}
      </div>
    </div>
  );
}

// ─── Room Card ─────────────────────────────────────────────
function RoomCard({ room, isNew }) {
  const preview = svgForTag[room.tag] || svgForTag.DEFAULT;
  return (
    <div style={{
      border: "2px solid #1a1a1a", borderRadius: 16,
      background: room.bg, overflow: "hidden",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      animation: isNew ? "popIn 0.35s cubic-bezier(.34,1.56,.64,1) both" : "fadeUp 0.5s ease both",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "6px 6px 0 #1a1a1a"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      {/* canvas preview */}
      <div style={{
        background: "white", margin: 10,
        border: "1.5px solid #1a1a1a", borderRadius: 10,
        minHeight: 140, display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        <div style={{ width: "100%", padding: "8px 0" }}>{preview}</div>
      </div>
      {/* footer */}
      <div style={{ padding: "12px 14px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <span style={{ fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2 }}>{room.name}</span>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "#5a5a5a", marginTop: 3 }}>{room.tag}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#5a5a5a" }}>
            <UsersIcon /> {room.members}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#5a5a5a" }}>
            <ClockIcon /> {room.updatedAt}
          </span>
          <span style={{ marginLeft: "auto", background: "rgba(255,255,255,0.7)", border: "1.5px solid #1a1a1a", borderRadius: 8, padding: "4px 10px", fontSize: 12, fontWeight: 600, color: "#1a1a1a", display: "flex", alignItems: "center", gap: 5 }}>
            Open <ArrowIcon />
          </span>
        </div>
        <div style={{ marginTop: 8, fontSize: 11, color: "#8a8070", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
          Room #{room.id}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN DASHBOARD ───────────────────────────────────────
export default function Dashboard() {
  const [rooms, setRooms] = useState(SEED_ROOMS);
  const [newIds, setNewIds] = useState(new Set());
  const [modal, setModal] = useState(null); // "create" | "join"
  const [generatedId] = useState(genRoomId);
  const [copied, setCopied] = useState(false);
  const [joinDigits, setJoinDigits] = useState(["", "", "", "", "", ""]);
  const [joinError, setJoinError] = useState("");
  const [roomName, setRoomName] = useState("Untitled board");

  // create room
  function handleCreate() {
    const newRoom = {
      id: generatedId,
      name: roomName.trim() || "Untitled board",
      tag: "THINKING",
      bg: "#f5e6b8",
      updatedAt: "Just now",
      members: 1,
    };
    setRooms(prev => [newRoom, ...prev]);
    setNewIds(prev => new Set([...prev, generatedId]));
    setModal(null);
  }

  // join room
  function handleJoin() {
    const code = joinDigits.join("");
    if (code.length < 6) { setJoinError("Please enter all 6 digits."); return; }
    const found = rooms.find(r => r.id === code);
    if (!found) { setJoinError("No room found with that ID. Check the code and try again."); return; }
    setJoinError("");
    setModal(null);
    // highlight existing
    setNewIds(prev => new Set([...prev, found.id]));
  }

  // handle digit input
  function handleDigit(idx, val) {
    if (!/^\d*$/.test(val)) return;
    const next = [...joinDigits];
    next[idx] = val.slice(-1);
    setJoinDigits(next);
    setJoinError("");
    if (val && idx < 5) {
      document.getElementById(`digit-${idx + 1}`)?.focus();
    }
  }
  function handleDigitKey(idx, e) {
    if (e.key === "Backspace" && !joinDigits[idx] && idx > 0) {
      document.getElementById(`digit-${idx - 1}`)?.focus();
    }
  }

  function copyId() {
    navigator.clipboard.writeText(generatedId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #f0ece4; color: #1a1a1a; font-family: 'Trebuchet MS','Helvetica Neue',sans-serif; -webkit-font-smoothing: antialiased; }
        a { color: inherit; text-decoration: none; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes slideUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes popIn { 0% { opacity:0; transform:scale(0.85); } 100% { opacity:1; transform:scale(1); } }
        input:focus { outline: none; }
        ::placeholder { color: #b0a898; }
      `}</style>

      {/* ── NAVBAR ─────────────────────────────────────────── */}
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
          <button onClick={() => setModal("join")} style={{
            display: "flex", alignItems: "center", gap: 7,
            border: "2px solid #1a1a1a", background: "transparent",
            padding: "8px 18px", borderRadius: 8, fontSize: 14, fontWeight: 600,
            cursor: "pointer", transition: "transform 0.15s, background 0.15s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#f0ece4"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <LinkIcon /> Join room
          </button>
          <button onClick={() => setModal("create")} style={{
            display: "flex", alignItems: "center", gap: 7,
            background: "#1a1a1a", color: "white",
            padding: "9px 18px", borderRadius: 8, fontSize: 14, fontWeight: 600,
            border: "none", cursor: "pointer", transition: "transform 0.15s, background 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#333"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <PlusIcon /> Create room
          </button>
        </div>
      </nav>

      {/* ── MAIN ───────────────────────────────────────────── */}
      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 80px 100px", animation: "fadeUp 0.6s ease both" }}>

        {/* page header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <div>
            <p style={{ fontSize: 14, color: "#e8735a", fontStyle: "italic", marginBottom: 8 }}>— your workspace</p>
            <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-1.2px" }}>
              Welcome back,{" "}
              <em style={{
                fontStyle: "italic",
                background: "linear-gradient(180deg, transparent 60%, #f5b8ac 60%)",
                padding: "0 4px",
              }}>Tanishq.</em>
            </h1>
          </div>
          <span style={{ fontSize: 15, color: "#5a5a5a", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            {rooms.length} board{rooms.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* grid */}
        {rooms.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#8a8070" }}>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 24, fontStyle: "italic", marginBottom: 16 }}>No boards yet.</p>
            <p style={{ fontSize: 15 }}>Hit <strong style={{ color: "#1a1a1a" }}>Create room</strong> to start your first sketch.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {rooms.map(r => <RoomCard key={r.id} room={r} isNew={newIds.has(r.id)} />)}
          </div>
        )}
      </main>

      {/* ── CREATE MODAL ───────────────────────────────────── */}
      {modal === "create" && (
        <Modal onClose={() => setModal(null)}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, letterSpacing: "-0.5px" }}>Create a room</h2>
            <button onClick={() => setModal(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "#5a5a5a", padding: 4 }}><XIcon /></button>
          </div>

          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#5a5a5a", marginBottom: 8, letterSpacing: "0.04em" }}>BOARD NAME</label>
          <input
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
            placeholder="e.g. Product Roadmap, System Design…"
            style={{
              width: "100%", padding: "12px 16px", fontSize: 15,
              border: "2px solid #1a1a1a", borderRadius: 10, background: "white",
              fontFamily: "inherit", marginBottom: 24,
            }}
          />

          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#5a5a5a", marginBottom: 8, letterSpacing: "0.04em" }}>ROOM ID</label>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "white", border: "2px solid #1a1a1a", borderRadius: 10,
            padding: "12px 16px", marginBottom: 8,
          }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: 28, letterSpacing: "0.15em", fontWeight: 700, color: "#1a1a1a" }}>
              {generatedId}
            </span>
            <button onClick={copyId} style={{
              display: "flex", alignItems: "center", gap: 6,
              background: copied ? "#c8e8c8" : "#f0ece4", border: "1.5px solid #d4cec4",
              borderRadius: 8, padding: "6px 12px", fontSize: 13, fontWeight: 600,
              cursor: "pointer", transition: "background 0.2s", color: "#1a1a1a",
            }}>
              <CopyIcon /> {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p style={{ fontSize: 13, color: "#8a8070", fontStyle: "italic", fontFamily: "Georgia, serif", marginBottom: 28 }}>
            Share this 6-digit ID with collaborators.
          </p>

          <button onClick={handleCreate} style={{
            width: "100%", background: "#1a1a1a", color: "white",
            border: "none", borderRadius: 10, padding: "14px",
            fontSize: 16, fontWeight: 600, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            transition: "background 0.2s, transform 0.15s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#333"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Start drawing →
          </button>
        </Modal>
      )}

      {/* ── JOIN MODAL ─────────────────────────────────────── */}
      {modal === "join" && (
        <Modal onClose={() => { setModal(null); setJoinDigits(["","","","","",""]); setJoinError(""); }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, letterSpacing: "-0.5px" }}>Join a room</h2>
            <button onClick={() => setModal(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "#5a5a5a", padding: 4 }}><XIcon /></button>
          </div>
          <p style={{ fontSize: 15, color: "#5a5a5a", marginBottom: 32, lineHeight: 1.55 }}>
            Enter the 6-digit room ID shared by your collaborator.
          </p>

          {/* digit boxes */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 12 }}>
            {joinDigits.map((d, i) => (
              <input
                key={i}
                id={`digit-${i}`}
                value={d}
                onChange={e => handleDigit(i, e.target.value)}
                onKeyDown={e => handleDigitKey(i, e)}
                maxLength={1}
                inputMode="numeric"
                style={{
                  width: 52, height: 64, textAlign: "center",
                  fontSize: 28, fontFamily: "Georgia, serif", fontWeight: 700,
                  border: `2px solid ${joinError ? "#e8735a" : d ? "#1a1a1a" : "#d4cec4"}`,
                  borderRadius: 10, background: d ? "white" : "#faf8f4",
                  color: "#1a1a1a", transition: "border-color 0.15s, background 0.15s",
                }}
              />
            ))}
          </div>

          {joinError && (
            <p style={{ textAlign: "center", fontSize: 13, color: "#e8735a", fontStyle: "italic", fontFamily: "Georgia, serif", marginBottom: 16 }}>
              {joinError}
            </p>
          )}

          <div style={{ height: joinError ? 0 : 16 }} />

          <button onClick={handleJoin} style={{
            width: "100%", background: "#1a1a1a", color: "white",
            border: "none", borderRadius: 10, padding: "14px",
            fontSize: 16, fontWeight: 600, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            transition: "background 0.2s, transform 0.15s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#333"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <LinkIcon /> Join room
          </button>
        </Modal>
      )}
    </>
  );
}