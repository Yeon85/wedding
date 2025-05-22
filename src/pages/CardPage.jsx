import React, { useState } from 'react';

// 아코디언 항목 데이터
const accordionData = [
    {
        title: "신랑측 정보",
        content: ({ groomName, setGroomName }) => (
          <div>
            <input
              value={groomName}
              onChange={e => setGroomName(e.target.value)}
              placeholder="신랑 이름"
              style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ddd', marginBottom: 12 }}
            />
          </div>
        )
      },
  {
    title: "신부측 정보",
    content: ({ brideName, setBrideName }) => (
      <div>
        <input
          value={brideName}
          onChange={e => setBrideName(e.target.value)}
          placeholder="신부 이름"
          style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ddd', marginBottom: 12 }}
        />
      </div>
    )
  },
  {
    title: "인삿말",
    content: ({ greeting, setGreeting }) => (
      <div>
        <div style={{ marginBottom: 8, fontWeight: 500 }}>인삿말 아이콘</div>
        {/* 아이콘 선택 등은 생략 */}
        <textarea
          style={{
            width: '100%',
            minHeight: 120,
            border: '1px solid #ddd',
            borderRadius: 8,
            padding: 12,
            fontSize: 15,
            marginBottom: 12,
            resize: 'vertical'
          }}
          value={greeting}
          onChange={e => setGreeting(e.target.value)}
        />
        <button
          style={{
            background: '#1a2d13',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '10px 24px',
            fontSize: 16,
            cursor: 'pointer'
          }}
        >
          샘플보기
        </button>
      </div>
    )
  },
  // ...다른 항목도 같은 방식으로 추가
];

export default function CardPage() {
  // 상태
  const [openIndex, setOpenIndex] = useState(null);
  const [groomName, setGroomName] = useState('공성민');
  const [brideName, setBrideName] = useState('정연주');
  const [greeting, setGreeting] = useState(
    `각자 서로 다른 길을
걸어온 저희가 이제 부부의 연으로
한 길을 걸어가고자 합니다.

항상 처음을 생각하며,
서로 아껴주고 사랑하며 살겠습니다.

부디 참석해 주시어 저희의 약속을
따뜻한 격려로 축복해 주시기 바랍니다.`
  );

  // ...다른 상태도 필요에 따라 추가

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
        display: 'flex',
        width: '100%',
        maxWidth: 1200,
        gap: 32,
        alignItems: 'flex-start'
      }}>
        {/* 왼쪽: 모바일 청첩장 미리보기 */}
        <div style={{
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          width: 400,
          minWidth: 320,
          padding: 0,
          overflow: 'hidden'
        }}>
          {/* 달력, 인삿말, 이름 등 */}
          <div style={{ padding: 24 }}>
            <div style={{ fontSize: 32, fontWeight: 700, textAlign: 'center', marginBottom: 16 }}>5</div>
            <div style={{ textAlign: 'center', marginBottom: 8 }}>2025년 5월 21일 수요일<br />오후 1시</div>
            {/* 달력, 카운트다운 등은 생략 */}
            <div style={{ fontSize: 24, fontWeight: 700, margin: '24px 0 8px', textAlign: 'center' }}>
              {groomName} &nbsp; | &nbsp; {brideName}
            </div>
            <div style={{ fontSize: 16, color: '#888', marginBottom: 16, textAlign: 'center' }}>
              2025.05.21. WED 1:00PM
            </div>
            <div style={{ fontSize: 15, color: '#444', marginBottom: 24, textAlign: 'center', whiteSpace: 'pre-line' }}>
              {greeting}
            </div>
            {/* ...아래로 SAVE THE DATE, 기타 내용 등 */}
          </div>
        </div>
        {/* 오른쪽: 아코디언/설정 패널 */}
        <div style={{
          flex: 1,
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          padding: 32,
          minWidth: 320,
          maxHeight: '80vh',
          overflowY: 'auto'
        }}>
          {accordionData.map((item, idx) => (
            <div key={idx} style={{
              border: '1px solid #eee',
              borderRadius: 8,
              marginBottom: 12,
              background: '#fafafa',
              cursor: 'pointer',
              overflow: 'hidden',
              transition: 'box-shadow 0.2s'
            }}>
              <div
                style={{
                  padding: '14px 18px',
                  fontWeight: 500,
                  fontSize: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {item.title}
                <span style={{
                  marginLeft: 8,
                  fontSize: 18,
                  transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s'
                }}>
                  ▼
                </span>
              </div>
              {openIndex === idx && (
                <div style={{
                  padding: '16px 18px',
                  background: '#fff',
                  borderTop: '1px solid #eee',
                  fontSize: 15,
                  color: '#444'
                }}>
                  {/* 각 항목에 상태와 set함수 전달 */}
                  {item.content({
                    brideName, setBrideName,
                    groomName, setGroomName,
                    greeting, setGreeting,
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}