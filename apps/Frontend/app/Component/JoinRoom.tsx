
"use client"
import { useState, useRef } from 'react';

export default function JoinRoom({ onClose }: { onClose: () => void }) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
    if (value && index < 5) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ background: '#f8f5f0', borderRadius: '16px', padding: '32px', width: '400px' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{ fontSize: '22px', fontWeight: 500, color: '#1a1a1a', fontFamily: 'Georgia, serif' }}>Join a room</span>
        <span onClick={onClose} style={{ fontSize: '18px', color: '#888', cursor: 'pointer' }}>×</span>
      </div>

      {/* Description */}
      <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px', lineHeight: 1.5 }}>
        Enter the 6-digit room ID shared by your collaborator.
      </p>

      {/* 6 digit inputs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
        {code.map((digit, index) => (
          <input
            key={index}
            ref={el => { inputs.current[index] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={e => handleChange(index, e.target.value)}
            onKeyDown={e => handleKeyDown(index, e)}
            style={{ width: '52px', height: '58px', textAlign: 'center', fontSize: '22px', fontWeight: 500, border: '1.5px solid #ddd', borderRadius: '10px', background: '#fff', color: '#1a1a1a', outline: 'none' }}
          />
        ))}
      </div>

      {/* Button */}
      <button style={{ width: '100%', background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '10px', padding: '16px', fontSize: '15px', fontWeight: 500, cursor: 'pointer' }}>
        🔗 Join room
      </button>

    </div>
  );
}