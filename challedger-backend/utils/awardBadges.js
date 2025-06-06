// utils/awardBadges.js
const db = require('../models/db');
const { grantBadge } = require('../models/badgeModel');

// Badge awarding logic based on user activities
const awardBadges = async (userId) => {
  try {
    // First Challenge: at least 1 challenge created
    const result1 = await db.query(
      `SELECT COUNT(*) AS count FROM challenges WHERE user_id = $1`,
      [userId]
    );
    const totalChallenges = Number(result1.rows[0].count);
    if (totalChallenges >= 1) {
      await grantBadge(userId, 'First Challenge');
    }

    // 3-Time Streak: 3 or more successful challenges
    const result2 = await db.query(
      `SELECT COUNT(*) AS count FROM challenges WHERE user_id = $1 AND status = 'Success'`,
      [userId]
    );
    const successCount = Number(result2.rows[0].count);
    if (successCount >= 3) {
      await grantBadge(userId, '3-Time Streak');
    }

    // Challenge Achiever: at least one successful challenge
    if (successCount >= 1) {
      await grantBadge(userId, 'Challenge Achiever');
    }

    // Perfect Saver: success with zero spending
    const result3 = await db.query(
      `SELECT COUNT(*) AS count FROM challenges 
       WHERE user_id = $1 AND status = 'Success' AND actual_spending = 0`,
      [userId]
    );
    const perfectSaves = Number(result3.rows[0].count);
    if (perfectSaves >= 1) {
      await grantBadge(userId, 'Perfect Saver');
    }

    // Food Budget Destroyer: latest 5 expenses all in Food
    const result4 = await db.query(
      `SELECT COUNT(*) AS count FROM (
        SELECT category FROM expenses
        WHERE user_id = $1
        ORDER BY date DESC, id DESC
        LIMIT 5
      ) AS recent
      WHERE category = 'Food'`,
      [userId]
    );
    const recentFoodCount = Number(result4.rows[0].count);
    if (recentFoodCount === 5) {
      await grantBadge(userId, 'Food Budget Destroyer');
    }

    // Savings Superstar: latest 3 expenses all ≤ 5000
    const result5 = await db.query(
      `SELECT COUNT(*) AS count FROM (
        SELECT amount FROM expenses
        WHERE user_id = $1
        ORDER BY date DESC, id DESC
        LIMIT 3
      ) AS recent
      WHERE amount <= 5000`,
      [userId]
    );
    const smallExpenses = Number(result5.rows[0].count);
    if (smallExpenses === 3){
      await grantBadge(userId, 'Savings Superstar');
    }
    
    // Category-specific badges based on usage counts
    const categoryBadges = {
      'Transport': 'Transport Tracker',
      'Shopping': 'Shopping Spree',
      'Entertainment': 'Entertainment Lover',
      'Health': 'Health First',
      'Travel': 'Travel Budgeter',
      'Education': 'Lifelong Learner',
      'Bills': 'Bill Payer',
      'Pets': 'Pet Lover',
      'Gifts': 'Gift Giver',
      'Others': 'Explorer',
      'Cafe': 'Cafe Enthusiast',
      'Daily': 'Everyday Essentials'
    };

    const counts = {};

    for (const category of Object.keys(categoryBadges)) {
      const result = await db.query(
        `SELECT COUNT(*) AS count FROM expenses WHERE user_id = $1 AND category = $2`,
        [userId, category]
      );
      counts[category] = Number(result.rows[0].count);
    }

    if (counts['Cafe'] >= 3) await grantBadge(userId, 'Cafe Enthusiast');
    if (counts['Daily'] >= 5) await grantBadge(userId, 'Everyday Essentials');
    if (counts['Transport'] >= 3) await grantBadge(userId, 'Transport Tracker');
    if (counts['Shopping'] >= 2) await grantBadge(userId, 'Shopping Spree');
    if (counts['Entertainment'] >= 3) await grantBadge(userId, 'Entertainment Lover');
    if (counts['Health'] >= 2) await grantBadge(userId, 'Health First');
    if (counts['Travel'] >= 1) await grantBadge(userId, 'Travel Budgeter');
    if (counts['Education'] >= 1) await grantBadge(userId, 'Lifelong Learner');
    if (counts['Bills'] >= 2) await grantBadge(userId, 'Bill Payer');
    if (counts['Pets'] >= 2) await grantBadge(userId, 'Pet Lover');
    if (counts['Gifts'] >= 1) await grantBadge(userId, 'Gift Giver');
    if (counts['Others'] >= 4) await grantBadge(userId, 'Explorer');

  } catch (err) {
    console.error('❌ Error while awarding badges:', err);
  }
};

module.exports = awardBadges;