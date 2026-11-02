import './style.css'

const experience = [
  ['2020–2026', '수업평가나눔 교사단 활동'],
  ['2024, 2026', 'AI · 에듀테크 교사단'],
  ['2024', '강서양천 학교로 찾아가는 디지털 역량 강화 연수 강사 활동'],
  ['2024', '교실혁명 선도교사단'],
  ['2024', 'AIEDAP 마스터교원'],
  ['2024', '서울시교육청 디지털 기반 수업·평가 전문가'],
  ['2024', '성취평가 선도교원'],
  ['2025, 2026', '서울시교육청 학생평가지원단'],
  ['2025', '서울시교육청 디지털 기반 수업·평가 전문가 강사'],
  ['2026', '컨설팅장학 지원단'],
  ['2026', '인공지능 활용 선도교사 강사 활동'],
  ['2026', '학생 질문 중심 수업평가 선도교원'],
  ['2026', '질문이 있는 탐구기반 수업 평가 실천역량 강화 직무연수(기본) 강사'],
]

const programs = [
  ['2024, 2025', '생각을 쓰는 교실 실천팀'],
  ['2025', 'AI활용 서논술형 평가 실천학교'],
  ['2025', '논술형 평가 전문가 아카데미'],
  ['2025', '서울형 독서토론 기반 프로젝트 수업'],
  ['2025', '중등 AI·디지털 글로벌 역량 강화 직무연수'],
  ['2026', '개념탐독 실천교실'],
  ['2026', '학교통일교육 프로젝트 수업'],
]

const renderItems = (items) => items.map(([year, title]) => `
  <li class="timeline-item">
    <span class="item-year">${year}</span>
    <span class="item-title">${title}</span>
  </li>
`).join('')

document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <a class="wordmark" href="#home" aria-label="프로필 홈">HW<span>.</span></a>
    <nav aria-label="프로필 메뉴">
      <a href="#profile">기본 정보</a>
      <a href="#experience">경력</a>
      <a href="#programs">사업 및 연수</a>
    </nav>
    <a class="contact-link" href="mailto:airwalk9854@gmail.com">연락하기 <span aria-hidden="true">↗</span></a>
  </header>

  <main id="home">
    <section class="intro" aria-labelledby="intro-title">
      <div class="intro-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span> HISTORY EDUCATOR · HWA-WON MIDDLE SCHOOL</p>
        <h1 id="intro-title">질문에서 시작해,<br /><span>배움의 의미를 넓히다.</span></h1>
        <p class="intro-description">학생의 질문과 탐구를 중심으로 수업을 설계하고, AI와 에듀테크를 활용해 학습의 의미를 확장하는 교사로 성장하고 있습니다. 수업의 설계와 평가를 함께 고민하며, 학생이 수업 속에서 주도적으로 참여하고 성취감을 느끼도록 돕는 것을 목표로 합니다.</p>
        <a class="text-link" href="#profile">프로필 살펴보기 <span aria-hidden="true">↓</span></a>
      </div>
      <div class="intro-art" aria-hidden="true">
        <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div><div class="art-sun"></div>
        <div class="art-card card-back"><span>ASK</span><i>?</i></div>
        <div class="art-card card-front"><span>EXPLORE</span><div class="art-lines"><i></i><i></i><i></i></div><b>배움의<br />다음 장면</b></div>
        <span class="art-note note-top">생각을 꺼내고</span><span class="art-note note-bottom">함께 탐구하기</span><span class="art-star">✳</span>
      </div>
      <div class="intro-index"><span>01</span><i></i><span>TEACHER PROFILE</span></div>
    </section>

    <section class="section profile-section" id="profile" aria-labelledby="profile-title">
      <div class="section-heading"><div><p class="eyebrow">A LITTLE ABOUT ME</p><h2 id="profile-title">기본 정보</h2></div><p class="section-caption">교실에서 질문을 발견하고<br />배움의 가능성을 함께 엽니다.</p></div>
      <div class="profile-grid">
        <div class="profile-lead"><span class="lead-mark">“</span><p>학생의 호기심이<br />배움의 시작이 되도록.</p><span class="lead-caption">HISTORY · INQUIRY · AI EDUCATION</span></div>
        <dl class="info-list">
          <div><dt>이름</dt><dd>심하늘</dd></div>
          <div><dt>학교</dt><dd>화원중학교</dd></div>
          <div><dt>과목</dt><dd>역사</dd></div>
          <div><dt>대학원</dt><dd>숙명여대 교육대학원<br />AI융합교육 전공</dd></div>
          <div><dt>연락처</dt><dd><a href="mailto:airwalk9854@gmail.com">airwalk9854@gmail.com <span aria-hidden="true">↗</span></a></dd></div>
        </dl>
      </div>
    </section>

    <section class="section career-section" id="experience" aria-labelledby="experience-title">
      <div class="section-heading"><div><p class="eyebrow">TEACHING &amp; PRACTICE</p><h2 id="experience-title">경력</h2></div><p class="section-caption">수업과 평가를 함께 고민하며<br />학교 현장의 변화를 만들어갑니다.</p></div>
      <ol class="timeline">${renderItems(experience)}</ol>
    </section>

    <section class="section programs-section" id="programs" aria-labelledby="programs-title">
      <div class="section-heading"><div><p class="eyebrow">PROJECTS &amp; LEARNING</p><h2 id="programs-title">사업 및 연수</h2></div><p class="section-caption">실천과 배움을 이어가며<br />새로운 수업을 탐색합니다.</p></div>
      <ol class="timeline">${renderItems(programs)}</ol>
    </section>
  </main>

  <footer class="footer"><a class="wordmark" href="#home">HW<span>.</span></a><p>질문과 탐구가 살아 있는 교실을 위해.</p><a class="footer-email" href="mailto:airwalk9854@gmail.com">airwalk9854@gmail.com <span aria-hidden="true">↗</span></a><span class="footer-copy">© 2026 HWA-WON MIDDLE SCHOOL</span></footer>
`

const revealTargets = document.querySelectorAll('.section-heading, .profile-grid, .timeline-item')

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  revealTargets.forEach((target, index) => {
    target.classList.add('reveal-on-scroll')
    if (target.matches('.timeline-item')) target.style.transitionDelay = `${(index % 5) * 55}ms`
    revealObserver.observe(target)
  })
}
