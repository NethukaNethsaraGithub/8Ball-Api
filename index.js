// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const responses = [
  "🎱 It is certain",
  "🎱It is decidedly so",
  "🎱 Without a doubt",
  "🎱 Yes definitely",
  "🎱 You may rely on it",
  "🎱 As I see it, yes",
  "🎱 Most likely",
  "🎱 Outlook good",
  "🎱 Yes",
  "🎱 Signs point to yes",
  "🎱 Reply hazy, try again",
  "🎱 Ask again later",
  "🎱 Better not tell you now",
  "🎱 Cannot predict now",
  "🎱 Concentrate and ask again",
  "🎱 Don't count on it",
  "🎱 My reply is no",
  "🎱 My sources say no",
  "🎱 Outlook not so good",
  "🎱 Very doubtful"
];

// Endpoint to get a random 8-Ball response
app.get('/8ball', (req, res) => {
  const randomIndex = Math.floor(Math.random() * responses.length);
  const response = responses[randomIndex];
  res.json({ response });
});

// Handle GET request to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the Magic 8-Ball API');
});

app.listen(port, () => {
  console.log(`Magic 8-Ball API listening at http://localhost:${port}`);
});
