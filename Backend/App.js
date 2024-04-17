require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const emailRoutes = require("./routes/emailRoutes");

const app = express()
const PORT = process.env.PORT || 4000; // Use a default port if PORT is not specified in .env
const MONGODB_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json())
app.use(cors())

const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/user', userRoutes)

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
    .then(() => {
        // Listen for requests
        app.listen(PORT, () => {
            console.log('Connected to db & listening on port', PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// Route for handling completions
app.post('/completions', async (req, res) => {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: req.body.message }],
                max_tokens: 100,
            })
        });

        const data = await response.json();
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use("/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });