const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000; // Choose your desired port number

app.use(bodyParser.json());
// Serve static files (CSS, images, etc.)
//app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    //res.sendFile(__dirname + '/public/index.html');
  });

// Handle POST requests to /server/send-email
app.post("/server/send-email", (req, res) => {
    const userData = req.body; // Get user data from the request body
    console.log("Received user data:", userData);
    
    // You can perform additional processing or send a response if needed
    res.json({ success: true, message: "Data received successfully!" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
