const express = require("express");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 4000;

// init app
const app = express();
app.use(cors());

// PRODUCTION
if (process.env.NODE_ENV === "production") {
  // set static
  app.use(express.static(path.join(__dirname, "gemjoshua", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "gemjoshua", "build", "index.html"));
  });
}

app.listen(port, () => console.log("server started on port ", port));
