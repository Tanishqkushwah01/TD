"use client";
import { useState } from "react";

export default function RoomCard({variant,date,slug}:{variant:string,date: string | Date,slug:string}) {
  const [hovered, setHovered] = useState(false);
  return (

    <div 
      style={{
        width: '350px',
        height: "367.17px",
        background:variant,
        // background: '#dca7a0',
        borderRadius: '16px',
        padding: "16px",
        border: '2px solid black',
        boxShadow: hovered ? '6px 6px 0px black' : 'none',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)} >
      <div className="flex items-center justify-center" style={{ backgroundColor: 'white', height: '196px', width: '100%', borderRadius: '12px', border: '2px solid black' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-black rotate-45"></div>
          <div className="w-16 h-[2px] bg-black relative">
            <div className="absolute right-[-6px] top-[-4px] w-0 h-0 border-l-[8px] border-l-black border-y-[5px] border-y-transparent"></div>
          </div>
          <div className="w-12 h-10 border-2 border-orange-400 rounded-md"></div>
        </div>
      </div>
      {/* content one  */}

      <div style={{ padding: '4px 2px', marginTop: "10px" }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '20px', fontWeight: "bolder", color: '#3a1a14' }}>Product Roadmap Q3</span>
          <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', color: '#7a3a30' }}>PRODUCT</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px' }}>
          <span style={{ fontSize: '12px', color: '#5a2a20' }}>👥 3</span>
          <span style={{ fontSize: '12px', color: '#5a2a20' }}>{timeAgo(date)}</span>
          <button style={{ marginLeft: 'auto', background: 'white', border: '1.5px solid #3a1a14', borderRadius: '8px', padding: '5px 14px', fontSize: '12px', fontWeight: 500, color: '#3a1a14', cursor: 'pointer' }}>
            Open →
          </button>
        </div>

        <span style={{ fontSize: '11px', color: '#7a3a30', fontStyle: 'italic' }}>Room #{slug}</span>

      </div>

    </div>

  );
}


function timeAgo(date: string | Date): string {
  const now = new Date();
  const past = new Date(date);

  const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const intervals: { label: string; seconds: number }[] = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const i of intervals) {
    const count = Math.floor(seconds / i.seconds);
    if (count > 0) {
      return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}