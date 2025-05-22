import React from 'react';

export default function CardPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f7f7f7',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 0'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        width: 400,
        maxWidth: '90vw',
        padding: 32,
        marginTop: 40
      }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=200"
            alt="메인사진"
            style={{ width: '100%', borderRadius: 12, marginBottom: 16, objectFit: 'cover', height: 200 }}
          />
          <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>공성민 &nbsp; | &nbsp; 정연주</div>
          <div style={{ fontSize: 16, color: '#888', marginBottom: 16 }}>2025.05.21 WED 1:00PM</div>
        </div>
        <div style={{ fontSize: 16, color: '#444', marginBottom: 24, textAlign: 'center' }}>
          각자 서로 다른 길을<br />
          걸어온 저희가 이제 부부의 연으로<br />
          새로운 출발을 하려 합니다.<br />
          <br />
          바쁘시더라도 오셔서<br />
          축복해주시면 감사하겠습니다.
        </div>
        <div style={{ borderTop: '1px solid #eee', paddingTop: 16, textAlign: 'center', color: '#888' }}>
          <div>오시는 길, 계좌번호, 갤러리 등 추가 정보는<br />아래에서 자유롭게 꾸며보세요!</div>
        </div>
      </div>
    </div>
  );
}