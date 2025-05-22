import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FirstPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ fontSize: 22, marginBottom: 16 }}>안녕하세요</div>
      <div style={{ fontSize: 64, marginBottom: 16 }}>👏</div>
      <div style={{ fontSize: 18, marginBottom: 32 }}>결혼을 진심으로 축하드립니다.</div>
      <button
        style={{
          background: '#1a2d13',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '10px 32px',
          fontSize: 22,
          cursor: 'pointer'
        }}
        onClick={() => navigate('/card')}
      >
        →
      </button>
    </div>
  );
}
