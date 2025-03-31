const express = require("express");
const app = express();
const connectDb = require("./configuration/connectDb");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const translationRoute = require("./routes/transRoute");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
connectDb();
app.use(cors());

app.listen(port, (error) => {
  console.log(port);
  if (error) {
    console.log("Server Failed");
  } else {
    console.log(`Server Started on port ${port}`);
  }
});

app.use(express.json());
app.use("/api", userRoute);
app.use("/api", translationRoute);
