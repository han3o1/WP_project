# 💸 WP_project - Weekly Challenge Planner

> **예산을 계획하고, 소비를 기록하며, 배지를 모아보세요!**  
> 실생활에 도움이 되는 똑똑한 소비 습관 형성 프로젝트 🌱

---

## 📌 프로젝트 소개

**WP_project**는 사용자가 매달 목표 지출을 설정하고, 그에 맞춰 소비를 기록하며,  
목표 달성 여부에 따라 다양한 배지를 받을 수 있는 **챌린지 기반 소비 기록 웹 애플리케이션**입니다.

---

## 🌟 주요 기능

| 기능명 | 설명 |
|--------|------|
| 🔐 회원가입 / 로그인 | 사용자 인증 및 세션 관리 |
| 🧾 챌린지 생성 | 목표 지출 금액, 기간 설정 |
| 💳 소비 기록 등록 | 실제 지출 금액 기록 및 수정 |
| 🏅 배지 시스템 | 조건 달성 시 자동 배지 부여 |
| 📊 통계 시각화 | 월별 지출 차트, 진행률 표시 |
| 🌙 다크모드 지원 | 사용자 친화적 인터페이스 |

---

## 🛠️ 기술 스택

| 분야 | 사용 기술 |
|------|-----------|
| Frontend | React, React Router, Axios, Chart.js |
| Backend  | Node.js, Express.js |
| Database | MySQL |
| 인증 및 배포 | JWT, Postman (API Test), Vercel / Railway 예정 |

---

## 📂 프로젝트 구조
WP_project/
├── challedger-backend/ # 백엔드: Node + Express + MySQL
│ ├── controllers/ # 라우터 로직
│ ├── models/ # DB 모델
│ └── routes/ # API 라우팅
├── challedger-frontend/ # 프론트엔드: React 기반 UI
│ ├── src/components/ # 재사용 컴포넌트
│ ├── src/pages/ # 주요 페이지 (Home, Challenge, Record 등)
│ └── src/utils/ # 유틸 함수 (날짜 포맷 등)
└── README.md # 리드미 파일


---

## 📸 데모 스크린샷

> 아래에는 실제 동작 화면 캡처 혹은 GIF를 넣어주세요!

- 홈 화면  
- 챌린지 생성  
- 소비 기록  
- 뱃지 획득  
- 통계 시각화

---

## 👨‍👩‍👧‍👦 팀 소개

| 이름 | 역할 | 주요 담당 |
|------|------|-----------|
| 김도이 (Doyi) | 🎨 Frontend & Design | 뱃지 시스템, 차트 시각화, Footer 디자인 등 |
| 박한얼 (Haneol) | 👨‍💻 Backend Lead | DB 모델링, API 설계, 인증 로직 |
| 이소담 (Sodam) | 👩‍🎨 Frontend Lead | 챌린지 생성/기록 기능, Footer 디자인 등 |

---

## 🧪 실행 방법

### 📦 1) 프로젝트 클론

```bash
git clone https://github.com/kimm00/WP_project.git
cd WP_project

## 🛠️ 설치 및 실행 방법

```bash
# 백엔드
cd challedger-backend
npm install
npm run dev

# 프론트엔드
cd challedger-frontend
npm install
npm start
