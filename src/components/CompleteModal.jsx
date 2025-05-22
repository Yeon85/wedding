import React from 'react';

export default function CompleteModal({ onClose, link }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 12,
        padding: 40,
        minWidth: 320,
        textAlign: 'center',
        boxShadow: '0 4px 24px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🎉</div>
        <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>링크 생성이 완료되었습니다.</div>
        <div style={{ fontSize: 15, marginBottom: 24 }}>
          나머지 내용을 자유롭게 입력하여<br />청첩장을 완성해주세요
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#1a2d13', fontWeight: 500, display: 'block', marginBottom: 16 }}>
          {link}
        </a>
        <button
          onClick={onClose}
          style={{
            background: '#1a2d13',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '10px 32px',
            fontSize: 18,
            cursor: 'pointer'
          }}
        >
          창 닫기
        </button>
      </div>
    </div>
  );
}