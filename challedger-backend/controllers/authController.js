const db = require('../models/db');  // Import the database connection
const bcrypt = require('bcrypt');  // Import bcrypt for password hashing and comparison
const jwt = require('jsonwebtoken');  // Import jsonwebtoken for creating JWT tokens

// Handle user signup
exports.signup = async (req, res) => {
  const { email, password, username } = req.body;  // Extract user input from request body
  try {
    // Hash the password with salt rounds = 10
    const hashed = await bcrypt.hash(password, 10);
    // Insert the new user into the database
    await db.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, hashed]
    );
    // Send success response
    res.status(201).json({ message: 'Signup successful' });
  } catch (err) {
    // Send error if signup fails
    res.status(500).json({ error: 'Signup failed', detail: err.message });
  }
};

// Handle user login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // SELECT query
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    // If user not found
    if (!user) return res.status(401).json({ error: 'User does not exist' });

    // Compare input password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Incorrect password' });

    // Generate JWT token if login successful
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send token and user info back to client
    res.json({ token, username: user.username, email: user.email });
  } catch (err) {
    // Send error if login fails
    res.status(500).json({ error: 'Login failed', detail: err.message });
  }
  
};
