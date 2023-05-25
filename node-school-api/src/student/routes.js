const { Router } = require("express");
const controller = require("../student/controller");

const router = Router();

// Migrate Tables
router.get("/migrate", controller.migrateTables);

router.get("/", controller.getAllStudent);

router.get("/:id", controller.getStudentById);

router.post("/", controller.addStudent);

router.delete("/:id", controller.deleteStudent);

router.put("/:id", controller.updateStudent);

module.exports = router;
