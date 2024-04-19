const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// PostgreSQL configuration
const pool = new Pool({
  user: "tbagen", // Change this to your PostgreSQL username
  host: "localhost", // Change this to your PostgreSQL server hostname
  database: "triumph",
  password: "postgres", // Change this to your PostgreSQL password
  port: 5432, // Change this to your PostgreSQL port
});

// Serve static files (CSS, images, etc.)
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle POST requests to /server/send-email
app.post("/server/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Insert user data into the user_request table
    const insertQuery = `
      INSERT INTO user_request (userName, userEmail, userMsg, request_time)
      VALUES ($1, $2, $3, NOW())
    `;

    await pool.query(insertQuery, [name, email, message]);

    // Respond with a success message
    res.json({ success: true, message: "Data received and saved successfully!" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ success: false, message: "Failed to save data." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

