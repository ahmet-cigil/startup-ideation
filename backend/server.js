// Configuration
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 5000;

// Initialize
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
	res.status(200).json({ msg: "Welcome to the support desk API" });
});

// Routes from 'userRoutes' file
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

// Listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
