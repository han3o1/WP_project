// src/pages/HomePage.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function HomePage() {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  const [challenges, setChallenges] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user')) || {};
        const token = user.token;
        const res = await axios.get('http://localhost:4000/api/challenges/current', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const list = Array.isArray(res.data) ? res.data : [res.data];
        setChallenges(list);
      } catch (err) {
        console.error('❌ 진행 중 챌린지 조회 실패:', err);
        setError('No active challenge.');
      }
    };

    fetchChallenges();
  }, []);

  // 버튼 클릭 핸들러
  const goToRecord = () => navigate('/record');
  const goToChallenge = () => navigate('/challenge');
  const goToStats = () =>navigate('/stats');

  return React.createElement(
    React.Fragment,
    null,

    // ✅ Header는 페이지 바깥에 위치
    React.createElement(Header),

    // ✅ 본문 콘텐츠는 별도 wrapper에
    React.createElement(
      'div',
      { className: 'home-container' },

      // 로고 + 타이틀
      React.createElement('img', {
        src: '/logo.png',
        alt: 'ChalLedger Logo',
        className: 'home-logo',
      }),
      React.createElement('h1', { className: 'home-title' }, 'Welcome back to ChalLedger!'),
      React.createElement('p', { className: 'home-date' }, today),

      // 챌린지 정보
      React.createElement(
        'div',
        { className: 'challenge-summary' },
        React.createElement('h2', null, 'Current Challenges'),
        error
          ? React.createElement('p', { style: { color: 'gray' } }, error)
          : challenges.length === 0
          ? React.createElement('p', null, 'No challenges right now.')
          : challenges.map((c, i) =>
              React.createElement(
                'div',
                { key: i, style: { marginBottom: '12px' } },
                React.createElement(
                  'p',
                  null,
                  `🎯 ${c.title || 'Untitled'} — Spend less than ${c.goal_amount.toLocaleString()} KRW on ${c.category.toLowerCase()}`
                ),
                React.createElement(
                  'p',
                  null,
                  `💸 Current spending: ${c.actual_spending ? c.actual_spending.toLocaleString() : '0'} KRW`
                )
              )
            )
      ),

      // 버튼 영역
      React.createElement(
        'div',
        { className: 'home-buttons' },
        React.createElement('button', {
          className: 'home-btn',
          onClick: goToChallenge
        }, '📍 New Challenge'),

        React.createElement('button', {
          className: 'home-btn home-btn-highlight',
          onClick: goToRecord
        }, '🧾 Track Your Spending'),

        React.createElement('button', {
          className: 'home-btn',
          onClick: goToStats
        }, '📊 View Your Progress')
      )
    )
  );
}

export default HomePage;