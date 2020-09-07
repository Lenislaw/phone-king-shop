const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const fileupload = require("express-fileupload");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Enable cors
app.use(cors());
// Init Middleware
app.use(express.json());

// File uploading
app.use(fileupload());

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/products", require("./routes/api/products"));
app.use("/api/filter", require("./routes/api/filter"));

// Set static folder
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "public")));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
