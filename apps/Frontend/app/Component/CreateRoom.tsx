import axios from 'axios';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import {HTTP_URL} from "@repo/backend-common/config";

export default function CreateRoom({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [rid, setRid] = useState("");
  const [roomId] = useState(() => 
    Math.floor(100000 + Math.random() * 900000).toString() // generates random 6 digit ID
  );

  const handleCopy = () => {
     navigator.clipboard.writeText(roomId);
    setCopied(true);
    setRid(roomId);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ background: '#f8f5f0', borderRadius: '16px', padding: '32px', width: '400px', position: 'relative' }} className='border-r-8 border-b-8 border-l-2 border-t-2'>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <span style={{ fontSize: '22px', fontWeight: 500, color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>Create a room</span>
        <span onClick={onClose} style={{ fontSize: '18px', color: '#888', cursor: 'pointer' }}>×</span>
      </div>

      {/* Board Name */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', color: '#888', display: 'block', marginBottom: '8px' }}>BOARD NAME</label>
        <input
          type="text"
          defaultValue="Untitled board"
          style={{ width: '100%', padding: '12px 14px', border: '1.5px solid #ddd', borderRadius: '10px', fontSize: '15px', background: '#fff', color: '#1a1a1a', boxSizing: 'border-box', outline: 'none' }}
        />
      </div>

      {/* Room ID */}
      <div style={{ marginBottom: '8px' }}>
        <label style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', color: '#888', display: 'block', marginBottom: '8px' }}>ROOM ID</label>
        <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #ddd', borderRadius: '10px', background: '#fff', padding: '12px 14px' }}>
          <span style={{ fontSize: '22px', fontWeight: 500, letterSpacing: '0.12em', color: '#1a1a1a', flex: 1 }}>{roomId}</span>
          <button
            onClick={handleCopy}
            style={{ display: 'flex', alignItems: 'center', gap: '5px', background: copied ? '#d4edda' : '#f0ece6', border: `1px solid ${copied ? '#28a745' : '#ddd'}`, borderRadius: '7px', padding: '6px 12px', fontSize: '13px', color: copied ? '#28a745' : '#333', cursor: 'pointer', transition: 'all 0.2s ease' }}
          >
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Hint */}
      <p style={{ fontSize: '13px', color: '#999', fontStyle: 'italic', margin: '8px 0 24px' }}>Share this 6-digit ID with collaborators.</p>

      {/* Button */}
      <button style={{ width: '100%', background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '10px', padding: '16px', fontSize: '15px', fontWeight: 500, cursor: 'pointer' }}
      onClick={async()=>{
        // alert(roomId);
      const res = await axios.post(`${HTTP_URL}/room`,{
        name:roomId
       },{
        headers:{
          Authorization: localStorage.getItem("token")
        }
       });
       console.log("droom id = ",res.data.roomId);
       const slug = res.data.roomId; 
         router.push(`/canvas/${slug}`);
      }}
      >
        Start drawing →
      </button>

    </div>
  );
}