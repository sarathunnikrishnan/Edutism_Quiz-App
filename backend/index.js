require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();

const edutismModel = require("./mongodb");

// MongoDB Connection
mongoose
  .connect(`${process.env.MONGODB_URI}/edutism`)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

// Session Store
const store = new MongoDBStore({
  uri: `${process.env.MONGODB_URI}/session-store`,
  collection: "sessions",
});

store.on("error", (error) => {
  console.error(error);
});

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 600000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    },
    store,
    resave: false,
    saveUninitialized: false,
  }),
);

// Register
app.post("/dataregister", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    birthDate,
    state,
    password,
  } = req.body;

  try {
    const existingUser = await edutismModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    await edutismModel.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      birthDate,
      state,
      password,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Login
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await edutismModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    req.session.loggedIn = true;
    req.session.user = user;

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Logout failed",
      });
    }

    res.clearCookie("connect.sid");

    res.json({
      success: true,
      message: "Logged out successfully",
    });
  });
});

// Health Check
app.get("/", (req, res) => {
  res.send("Server Running");
});

// Start Server
const PORT = process.env.PORT || 7070;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
