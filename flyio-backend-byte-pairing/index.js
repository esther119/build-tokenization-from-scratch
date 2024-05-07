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
// app.post("/submit_data", (req, res) => {
//   const { code } = req.body;
//   // Regular expression to match function definitions
//   const functionRegex = /def\s+(\w+)\s*\(/;
//   const match = functionRegex.exec(code);
//   const functionName = match ? match[1] : null;
//   let updatedCodeBlock;

//   console.log("Function name:", functionName);

//   if (match) {
//     const updatedCodeBlock = code + `\n${functionName}(1, 2, 3)`;
//     console.log("Updated code block:", updatedCodeBlock);
//   } else {
//     console.log("Function not found.");
//   }

//   const pythonProcess = spawn("python3", ["-c", updatedCodeBlock]);

//   pythonProcess.stdout.on("data", (data) => {
//     res.send(data.toString());
//   });

//   pythonProcess.stderr.on("data", (data) => {
//     res.status(400).send(data.toString());
//   });
// });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.post("/submit_data", (req, res) => {
  const { code } = req.body;
  if (!code) {
    console.log("No code provided.");
    return res.status(400).send("No code provided.");
  }
  let functionName;
  let userFunction;
  const functionRegex =
    /(^|\n)(\s*)def\s+(\w+)\s*\(([^)]*)\)\s*:\s*([\s\S]*?)(?=\n\2\S|$)/g;
  let match;
  while ((match = functionRegex.exec(code)) !== null) {
    console.log("Function Name:", match[3]);
    functionName = match[3];

    // console.log("Entire Function:\n", match[0].trim());
    userFunction = match[0].trim();
  }

  if (functionName === "pair_frequency") {
    const updatedCodeBlock =
      userFunction + `\nprint(${functionName}([1, 2, 3]))`;
    console.log("Updated code block:", updatedCodeBlock);

    const pythonProcess = spawn("python3", ["-c", updatedCodeBlock]);
    let hasResponded = false;

    pythonProcess.stdout.on("data", (data) => {
      if (!hasResponded) {
        console.log("python data", data);
        // TODO: compare data with my correct output: {1:{2,3}, 2:{1,3}}
        hasResponded = true;
      }
    });

    pythonProcess.stderr.on("data", (data) => {
      if (!hasResponded) {
        res.status(400).send(data.toString());
        hasResponded = true;
      }
    });

    pythonProcess.on("close", (code) => {
      if (!hasResponded) {
        res.status(500).send(`Python script closed with code ${code}`);
      }
    });
  } else {
    console.log("Function not found in the provided code.");
    return res.status(400).send("Function not found in the provided code.");
  }
});
