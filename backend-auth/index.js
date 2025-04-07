const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const SECRET_KEY = "supersecretadmin";
const JWT_SECRET = "your_jwt_secret";

app.use(express.json());

const verifyJWtT = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  try {
    const decodeToken = jwt.verify(token, JWT_SECRET);
    req.user = decodeToken;
    next();
  } catch (error) {
    return res.status(402).json({ message: "Invalid token." });
  }
};

app.post("/admin/login", (req, res) => {
  const { secret } = req.body;

  if (secret === SECRET_KEY) {
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "24h" });
    res.json({ token });
  } else {
    res.json({ message: "Invalid Secret" });
  }
});

app.get("/admin/api/data", verifyJWtT, (req, res) => {
  res.json({ message: "Protected route accessible." });
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
