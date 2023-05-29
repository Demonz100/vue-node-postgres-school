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
    student_api: "/api/v1/student",
    migrate: "/api/v1/student/migrate",
    seed: "/api/v1/student/seed"
  });
});

app.use("/api/v1/student", studentRoutes);

app.listen(port, () => console.log(`app is listening on port ${port}`));
