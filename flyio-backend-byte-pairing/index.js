const express = require("express");
const cors = require("cors"); // Import CORS package
const { spawn } = require("child_process");
const app = express();
const port = 4000;

// Middleware to parse JSON bodies. This should come before your routes.
app.use(express.json());

// Use CORS middleware (This will enable CORS for all routes)
// Simplify the cors() usage for default options, or specify your options as needed.
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: "GET,POST", // Specifically allow GET and POST requests
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// GET request handler
app.get("/", (req, res) => {
  res.send("Hello World from Vercel!");
});

app.post("/run_code", (req, res) => {
  const { code } = req.body;
  const pythonProcess = spawn("python3", ["-c", code]);

  pythonProcess.stdout.on("data", (data) => {
    res.send(data.toString());
  });

  pythonProcess.stderr.on("data", (data) => {
    res.status(400).send(data.toString());
  });
});

// POST request handler
app.post("/submit-data", (req, res) => {
  // Make sure to check if the body is defined
  if (!req.body) return res.sendStatus(400);

  const { name, age } = req.body;
  res.status(200).json({ message: `Hello ${name}, you are ${age} years old.` });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
