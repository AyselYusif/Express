const express = require("express");
const app = express();
const port = 8080;
// const data = [
//   {
//     id: "1",
//     name: "Aysel",
//     age: 20,
//   },
//   {
//     id: "2",
//     name: "Yusif",
//     age: 24,
//   },
//   {
//     id: "3",
//     name: "Sabina",
//     age: 20,
//   },
// ];

// app.get("/", (req, res) => {
//   res.json(data);
// });

const employee = require("./employee.json");
app.get("/", (req, res) => {
  res.json(employee);
});

app.listen(port, () => {
  console.log(`app listening ${port}`);
});
