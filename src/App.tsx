import React, { useState, useEffect } from 'react'
import './App.css'
import { questions } from './data/questions'
import { mbtiResults } from './data/mbtiResults'

type Step = 'START' | 'TEST' | 'RESULT'

function App() {
  const [step, setStep] = useState<Step>('START')
  const [currentIdx, setCurrentIdx] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  })
  const [result, setResult] = useState('')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const goHome = () => {
    if (confirm('처음으로 돌아가시겠습니까? 진행 중인 테스트는 저장되지 않습니다.')) {
      setStep('START')
    }
  }

  const handleStart = () => {
    setStep('TEST')
    setCurrentIdx(0)
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 })
  }

  const handleAnswer = (type: string, value: number) => {
    const newScores = { ...scores, [type]: scores[type] + value }
    setScores(newScores)

    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1)
    } else {
      calculateResult(newScores)
    }
  }

  const calculateResult = (finalScores: Record<string, number>) => {
    let mbti = ''
    mbti += finalScores.E >= finalScores.I ? 'E' : 'I'
    mbti += finalScores.S >= finalScores.N ? 'S' : 'N'
    mbti += finalScores.T >= finalScores.F ? 'T' : 'F'
    mbti += finalScores.J >= finalScores.P ? 'J' : 'P'

    setResult(mbti)
    setStep('RESULT')
  }

  const reset = () => {
    setStep('START')
  }

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }

  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      triggerToast();
    }).catch(err => {
      console.error('링크 복사 실패:', err);
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        triggerToast();
      } catch (err) {
        alert('링크 복사에 실패했습니다.');
      }
      document.body.removeChild(textArea);
    });
  }

  const shareKakao = () => {
    if (!(window as any).Kakao) {
      alert('카카오톡 공유 기능을 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    const Kakao = (window as any).Kakao;
    if (!Kakao.isInitialized()) {
      Kakao.init('84c56e30b35587f7a8f1b9b5f5f5f5f5');
    }

    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '나의 MBTI 유형은?',
        description: `${result}: ${mbtiResults[result]?.title}`,
        imageUrl: 'https://images.unsplash.com/photo-1541167760496-162955ed2a96?q=80&w=1000',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '테스트 하러가기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  }

  return (
    <div className="container">
      {showToast && <div className="toast">✅ 링크가 복사되었습니다!</div>}
      <button className="theme-toggle" onClick={toggleTheme} title="테마 변경">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      {step === 'START' && (
        <div className="glass-card">
          <h1>나의 MBTI 테스트</h1>
          <p>나도 모르는 나의 진짜 성격을 알아보세요.<br />전문적인 문항을 통해 당신의 성향을 분석합니다.</p>
          <div className="ad-container">AD 영역 (구글 애드센스)</div>
          <button className="btn-primary" onClick={handleStart}>테스트 시작하기</button>
        </div>
      )}

      {step === 'TEST' && (
        <div className="glass-card">
          <div style={{ textAlign: 'left' }}>
            <button className="home-btn" onClick={goHome}>🏠 처음으로</button>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <h2>Q{currentIdx + 1}.</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{questions[currentIdx].text}</p>
          {questions[currentIdx].options.map((opt, i) => (
            <button
              key={i}
              className="btn-secondary"
              onClick={() => handleAnswer(opt.type, opt.value)}
            >
              {opt.text}
            </button>
          ))}
        </div>
      )}

      {step === 'RESULT' && (
        <div className="glass-card result-card">
          <div style={{ textAlign: 'left' }}>
            <button className="home-btn" onClick={() => setStep('START')}>🏠 처음으로</button>
          </div>
          <p style={{ marginBottom: '5px' }}>당신의 MBTI 유형은</p>
          <h1 style={{ marginBottom: '0', fontSize: '3.5rem', background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{result}</h1>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--accent-color)', fontSize: '1.4rem' }}>
            "{mbtiResults[result]?.title}"
          </h2>

          <div className="ad-container">AD 영역 (중간 광고)</div>

          <div className="result-content">
            <p className="description">{mbtiResults[result]?.description}</p>

            <div className="trait-tags">
              {mbtiResults[result]?.traits.map(t => (
                <span key={t} className="tag">#{t}</span>
              ))}
            </div>

            <div className="info-section">
              <h3>💪 장점</h3>
              <ul>
                {mbtiResults[result]?.strengths.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>

            <div className="info-section">
              <h3>⚠️ 단점</h3>
              <ul>
                {mbtiResults[result]?.weaknesses.map(w => <li key={w}>{w}</li>)}
              </ul>
            </div>

            <div className="compatibility-section">
              <div className="comp-item good">
                <span>최고의 궁합</span>
                <strong>{mbtiResults[result]?.matches.good}</strong>
              </div>
              <div className="comp-item bad">
                <span>아쉬운 궁합</span>
                <strong>{mbtiResults[result]?.matches.bad}</strong>
              </div>
            </div>
          </div>

          <div className="share-buttons">
            <button className="btn-secondary share-btn" onClick={copyLink}>🔗 링크 복사</button>
            <button className="btn-secondary share-btn" style={{ background: '#FEE500', color: '#000', border: 'none' }} onClick={shareKakao}>💬 카카오 공유</button>
          </div>

          <button className="btn-primary" onClick={reset}>🔄 다시 테스트하기</button>
          <div className="ad-container">AD 영역 (하단 광고)</div>
        </div>
      )}
    </div>
  )
}

export default App
