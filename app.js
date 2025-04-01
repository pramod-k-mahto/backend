const express = require("express");
const connectDb = require("./db/connect.js");
connectDb();

const User = require("./model/userModel.js");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());
app.post("/user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({ name, email, password });
    user = await user.save();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
