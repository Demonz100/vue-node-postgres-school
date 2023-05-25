const pool = require("../../db");
const queries = require("../student/queries");

const getAllStudent = (req, res) => {
  pool.query(queries.getAllStudent, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  //check if email exist already
  pool.query(queries.checkExistingEmail, [email], (error, result) => {
    if (error) throw error;

    if (result.rows.length) {
      res.send("Email of the student already exist.");
    } else {
      pool.query(
        queries.addStudent,
        [name, email, age, dob],
        (error, result) => {
          if (error) throw error;

          res.status(201).send("Student added successfully.");
        }
      );
    }
  });
};

const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);

  //Check if student exist.
  pool.query(queries.getStudentById, [id], (error, result) => {
    if (error) throw error;

    const noStudentFound = !result.rows.length;

    if (noStudentFound) {
      res.send("Student doesn't exist in the database.");
    } else {
      pool.query(queries.deleteStudent, [id], (error, result) => {
        if (error) throw error;

        res.status(200).send("Student successfully deleted.");
      });
    }
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, age, dob } = req.body;

  //Check if student exist.
  pool.query(queries.getStudentById, [id], (error, result) => {
    if (error) throw error;

    const noStudentFound = !result.rows.length;
    if (noStudentFound) {
      res.send("Student doesn't exist in the database.");
    } else {
      pool.query(queries.updateStudent, [name, email, age, dob, id], (error, result) => {
        if (error) throw error;

        res.status(200).send("Student successfully updated.");
      });
    }
  });
};

const migrateTables = (req, res) => {
  pool.query(queries.migrateTables, (error, result) => {
    if (error) throw error;
    res.status(200).json("Tables imgrated successfully.");
  });
}

module.exports = {
  getAllStudent,
  getStudentById,
  addStudent,
  deleteStudent,
  updateStudent,
  migrateTables
};