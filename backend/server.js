const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorhandler } = require("./middleware/error_middleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("checking ");
});
app.use("/api/user", userRoutes);

app.use(notFound)
app.use(errorhandler)

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server started on PORT ${PORT}`.yellow.bold));
