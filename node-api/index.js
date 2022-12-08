const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { v4: uuidv4 } = require("uuid");

const users = [
  { id: uuidv4(), title: "alice", status: "todo" },
  { id: uuidv4(), title: "bek", status: "todo" },
  { id: uuidv4(), title: "chris", status: "todo" },
  { id: uuidv4(), title: "holy", status: "todo" },
  { id: uuidv4(), title: "moly", status: "todo" },
];

app.use(cors());
app.use(morgan("dev"));

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log(`server is running`);
});
