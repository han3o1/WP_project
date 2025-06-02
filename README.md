# # 💸ChalLedger - Challenge + Ledger

**ChalLedger** is a personal challenge tracking and budgeting web application.  
Track your goals, monitor spending, and earn badges
as you achieve challenges! 🎯💰🏅

<img src="https://raw.githubusercontent.com/kimm00/WP_project/main/challedger-frontend/public/logo-main.png" alt="ChalLedger Logo" width="300"/>

---



## 🌟 Key Features

| Feature | Description |
|---------|-------------|
| 🔐 Sign Up / Login | User authentication and session management |
| 🧾 Create Challenge | Set goal spending amount and challenge duration |
| 💳 Expense Tracking | Record and update actual spending |
| 🏅 Badge System | Automatically grants badges when conditions are met |
| 📊 Data Visualization | Monthly spending chart and challenge progress display |

---

## 🏅 Badge Types

ChalLedger rewards users with unique badges based on challenge completion and spending patterns.

### ✅ 1. Challenge-related Badges

| Badge Name         | Icon | Criteria                                                                 |
|--------------------|------|--------------------------------------------------------------------------|
| First Challenge    | 🎉   | Granted when user registers at least 1 challenge                         |
| 3-Time Streak      | 🏅   | Granted when user registers 3 or more challenges                         |
| Challenge Achiever | 🎯   | Granted when user successfully completes at least 1 challenge            |
| Perfect Saver      | 🧊   | Granted when `actual_spending` is 0 in at least one successful challenge |

---

### ✅ 2. Spending Pattern Badges

| Badge Name              | Icon   | Criteria                                                                 |
|-------------------------|--------|--------------------------------------------------------------------------|
| Food Budget Destroyer   | 💥🍔   | Granted when last 5 expenses are all in the 'Food' category              |
| Savings Superstar       | ⭐💵   | Granted when last 3 expenses are each less than 5,000 KRW                |

---

### ✅ 3. Category-specific Badges

| Category      | Badge Name             | Icon    | Criteria              |
|---------------|------------------------|---------|------------------------|
| Transport     | Transport Tracker       | 🚗      | 3+ expenses in category |
| Shopping      | Shopping Spree          | 🛍️      | 2+ expenses             |
| Entertainment | Entertainment Lover     | 🎬🎮    | 3+ expenses             |
| Health        | Health First            | 💪🥗    | 2+ expenses             |
| Travel        | Travel Budgeter         | ✈️🌍    | 1+ expense              |
| Education     | Lifelong Learner        | 📚      | 1+ expense              |
| Bills         | Bill Payer              | 🧾      | 2+ expenses             |
| Pets          | Pet Lover               | 🐾      | 2+ expenses             |
| Gifts         | Gift Giver              | 🎁      | 1+ expense              |
| Others        | Explorer                | 🧭      | 4+ expenses             |
| Cafe          | Cafe Enthusiast         | ☕      | 3+ expenses             |
| Daily         | Everyday Essentials     | 🛒      | 5+ expenses             |


---

## 🛠 Tech Stack

- **Frontend**: React.js, React Router, CSS (custom responsive design)  
- **Backend**: Node.js, Express.js  
- **Database**: MySQL  
- **Testing**: React Testing Library  
- **Performance**: web-vitals (optional Core Web Vitals reporting)

---

## 📸 데모 스크린샷

> 아래에는 실제 동작 화면 캡처 혹은 GIF를 넣어주세요!

- 홈 화면  
- 챌린지 생성  
- 소비 기록  
- 뱃지 획득  
- 통계 시각화

---

## 👨‍👩‍👧‍👦 Team Introduction

| Name         | Role                        | Main Contributions                                                                 |
|--------------|-----------------------------|-------------------------------------------------------------------------------------|
| Doyi Kim     | 🧠 Project Planning & Design | Project planning, UI/UX design, badge system logic & display, chart visualization, footer layout |
| Haneol Lee  | 👨‍💻 Backend Lead             | DB modeling, API development, user authentication, badge logic implementation      |
| Sodam Lee    | 👩‍🎨 Frontend Lead            | Challenge creation & logging UI, calendar-based expense tracking, responsive layout, footer styling |

---

## 🧪 How to Run the Project

### 📦 1) Clone the Repository

```bash
git clone https://github.com/kimm00/WP_project.git
cd WP_project
```

### 🛠️ 2) Installation & Startup 

```bash
# backend
cd challedger-backend
npm install
npm run start

# frontend
cd challedger-frontend
npm install
npm start
