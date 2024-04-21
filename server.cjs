const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", "https://themealdb.com"],
      frameSrc: ["'self'", "https://www.youtube.com"],
      "img-src": ["'self'", "https://www.themealdb.com", "data:"],
    },
  })
);

app.use(cors());

// path
app.use(express.static(path.join(__dirname, "dist")));

// host dist
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Portfolio is live on port ${PORT}`);
});
