const express = require("express");
const cors = require("cors")
const studentRoutes = require("./src/student/routes");

const app = express();
const port = 9090;

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello!!",
    api: "/api/v1/student",
    reminder: "Make sure to run /migrate to initialize database"
  });
});

app.use("/api/v1/student", studentRoutes);

app.listen(port, () => console.log(`app is listening on port ${port}`));
