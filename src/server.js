const express = require('express');
const app = express();
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Dummy login
app.post('/login', (req, res) => {
  res.status(200).json({ token: 'dummy-token' });
});

// Tasks CRUD (import dari routes)
const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
