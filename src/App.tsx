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
  const [showPolicy, setShowPolicy] = useState<'privacy' | 'terms' | null>(null)

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
          <p>나도 모르는 나의 진짜 성격을 알아보세요.<br />심리학적 기반의 정률 분석으로 당신의 성향을 정확히 진단합니다.</p>
          <button className="btn-primary" onClick={handleStart}>테스트 시작하기</button>

          <div className="info-content">
            <h2>🧠 MBTI란 무엇인가요?</h2>
            <p>MBTI(Myers-Briggs Type Indicator)는 심리학자 <strong>칼 융(Carl Jung)</strong>의 심리 유형론을 바탕으로 캐서린 브릭스와 이사벨 마이어스가 고안한 성격 유형 검사입니다. 인간의 성격 유형을 16가지로 분류하여, 자신과 타인에 대한 깊이 있는 이해를 돕습니다.</p>

            <h3 style={{ marginTop: '15px', fontSize: '1rem', color: 'var(--accent-color)' }}>4가지 핵심 지표</h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
              <li><strong>E/I (외향/내향):</strong> 에너지의 방향 (외부 세계 vs 내부 성찰)</li>
              <li><strong>S/N (감각/직관):</strong> 정보 수집 방식 (사실과 실제 vs 아이디어와 가능성)</li>
              <li><strong>T/F (사고/감정):</strong> 의사결정 방식 (논리적 근거 vs 인간관계와 가치)</li>
              <li><strong>J/P (판단/인식):</strong> 생활 양식 (계획적/체계적 vs 즉흥적/유연함)</li>
            </ul>

            <h2>🌟 프리미엄 MBTI 테스트의 장점</h2>
            <p>본 사이트는 단순히 결과를 보여주는 데 그치지 않고, <strong>전문적인 조언(Personalized Advice)</strong>과 <strong>강점/약점 분석</strong>을 통해 당신의 성장을 돕습니다. 모든 데이터는 안전하게 보호되며, 직관적이고 세련된 UI를 통해 최상의 경험을 제공합니다.</p>

            <h2 style={{ marginTop: '20px' }}>⚖️ 테스트 정확도를 높이는 팁</h2>
            <p>문항을 읽고 너무 오래 고민하지 마세요. 자신이 되고 싶은 모습이 아니라, <strong>평소에 자연스럽게 느끼고 행동하는 방식</strong>을 선택하는 것이 가장 정확한 결과를 얻는 방법입니다.</p>
          </div>
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


          <div className="result-content">
            <p className="description">{mbtiResults[result]?.description}</p>

            <div className="trait-tags">
              {mbtiResults[result]?.traits.map(t => (
                <span key={t} className="tag">#{t}</span>
              ))}
            </div>

            <div className="info-section">
              <h3>🎯 당신의 장점</h3>
              <ul>
                {mbtiResults[result]?.strengths.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>

            <div className="info-section">
              <h3>📍 주의할 점</h3>
              <ul>
                {mbtiResults[result]?.weaknesses.map(w => <li key={w}>{w}</li>)}
              </ul>
            </div>

            <div className="info-section advice-section">
              <h3>💡 성장을 위한 조언</h3>
              <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{mbtiResults[result]?.advice}</p>
            </div>

            <div className="compatibility-section">
              <div className="comp-item good">
                <span>💕 최고의 짝꿍</span>
                <strong>{mbtiResults[result]?.matches.good}</strong>
              </div>
              <div className="comp-item bad">
                <span>🤔 조금 불편한 사이</span>
                <strong>{mbtiResults[result]?.matches.bad}</strong>
              </div>
            </div>
          </div>

          <div className="share-buttons">
            <button className="btn-secondary share-btn" onClick={copyLink}>🔗 링크 복사</button>
            <button className="btn-secondary share-btn" style={{ background: '#FEE500', color: '#000', border: 'none' }} onClick={shareKakao}>💬 카카오 공유</button>
          </div>

          <button className="btn-primary" onClick={reset}>🔄 다시 테스트하기</button>
        </div>
      )}
      {showPolicy && (
        <div className="glass-card policy-card">
          <div className="policy-header">
            <h2>{showPolicy === 'privacy' ? '🛡️ 개인정보처리방침' : '📜 이용약관'}</h2>
            <button className="close-btn" onClick={() => setShowPolicy(null)} aria-label="닫기">×</button>
          </div>
          <div className="policy-content">
            {showPolicy === 'privacy' ? (
              <>
                <p>본 사이트는 사용자의 개인정보를 소중히 다룹니다.</p>
                <h3>데이터 수집 및 이용</h3>
                <p>본 사이트는 별도의 회원가입 없이 이용 가능하며, 어떠한 개인식별정보도 서버에 저장하지 않습니다. 테스트 데이터는 브라우저 세션 동안에만 유지됩니다.</p>
                <h3>제3자 서비스 이용</h3>
                <p>구글 애드센스 등 제3자 광고주는 맞춤형 광고 제공을 위해 쿠키를 사용할 수 있습니다. 사용자는 브라우저 설정에서 이를 제어할 수 있습니다.</p>
              </>
            ) : (
              <>
                <h3>서비스 이용안내</h3>
                <p>본 서비스는 성격 유형 파악을 돕는 엔터테인먼트 목적의 콘텐츠를 제공합니다. 결과는 통계적 경향성에 기반하며 전문적 진단을 대신하지 않습니다.</p>
                <h3>저작권 안내</h3>
                <p>본 사이트의 디자인과 문항, 결과 콘텐츠에 대한 무단 복제 및 상업적 이용을 금합니다. 개인적 공유는 얼마든지 환영합니다.</p>
              </>
            )}
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-links">
          <button onClick={() => setShowPolicy('privacy')}>개인정보처리방침</button>
          <button onClick={() => setShowPolicy('terms')}>이용약관</button>
          <button onClick={() => { setStep('START'); window.scrollTo(0, 0); }}>사이트 소개</button>
        </div>
        <p>© 2026 프리미엄 MBTI 테스트. All rights reserved.</p>
        <p style={{ marginTop: '5px' }}>Contact: saraho76@example.com</p>
      </footer>
    </div>
  )
}

export default App
