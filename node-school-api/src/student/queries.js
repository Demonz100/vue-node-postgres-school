const getAllStudent = 'SELECT * FROM student';
const getStudentById = 'SELECT * FROM student WHERE id = $1';
const checkExistingEmail = 'SELECT email FROM student WHERE email = $1';
const addStudent = 'INSERT INTO student (name, email, age, dob) VALUES ($1, $2, $3, $4)';
const deleteStudent = 'DELETE FROM student WHERE id = $1';
const updateStudent = 'UPDATE student SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5';

const migrateTables = 'CREATE TABLE IF NOT EXISTS student (id serial PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), age INT, dob DATE)'

module.exports = {
  getAllStudent,
  getStudentById,
  checkExistingEmail,
  addStudent,
  deleteStudent,
  updateStudent,
  migrateTables
}