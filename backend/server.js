const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());

           app.use("/api/payment", require("./routes/payment"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});
