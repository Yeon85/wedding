// src/pages/LandingPage.jsx
import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('/images/landing-bg.png') center/cover no-repeat;
  position: relative;
`;

const Nav = styled.nav`
  position: absolute;
  top: 24px;
  right: 48px;
  display: flex;
  gap: 24px;
  z-index: 2;
`;

const Logo = styled.div`
  position: absolute;
  top: 24px;
  left: 48px;
  z-index: 2;
`;

const MainText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2.8rem;
  font-weight: bold;
  text-align: center;
  z-index: 2;
`;

export default function LandingPage() {
  return (
    <Background>
      <Logo>
        {/* 로고 이미지 */}
        <img src="/images/logo-c.png" alt="로고" width={32} />
      </Logo>
      <Nav>
        <a href="/faq">자주 묻는 질문</a>
        <a href="/history">제작내역</a>
        <a href="/first" style={{ background: '#3d5a2a', color: '#fff', padding: '8px 16px', borderRadius: 4 }}>제작하기</a>
      </Nav>
      <MainText>
        합리적인 결혼을 위한<br />
        모바일 청첩장
      </MainText>
    </Background>
  );
}