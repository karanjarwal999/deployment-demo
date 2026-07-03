require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 Deployment Demo Running!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        uptime: process.uptime(),
        timestamp: new Date(),
    });
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Karan" },
        { id: 2, name: "John" },
    ]);
});

app.post("/login", (req, res) => {
    const { email } = req.body;

    res.json({
        success: true,
        message: `Welcome ${email}`,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
