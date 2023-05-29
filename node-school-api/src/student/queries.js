const getAllStudent = 'SELECT * FROM student';
const getStudentById = 'SELECT * FROM student WHERE id = $1';
const checkExistingEmail = 'SELECT email FROM student WHERE email = $1';
const addStudent = 'INSERT INTO student (name, email, age, dob) VALUES ($1, $2, $3, $4)';
const deleteStudent = 'DELETE FROM student WHERE id = $1';
const updateStudent = 'UPDATE student SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5';

const migrateTables = 'CREATE TABLE IF NOT EXISTS student (id serial PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), age INT, dob DATE)'
const seedTables = "INSERT INTO student (name, email, age, dob) VALUES ('student_1', 'student1@gmail.com', 23, '2000-02-20')"

module.exports = {
  getAllStudent,
  getStudentById,
  checkExistingEmail,
  addStudent,
  deleteStudent,
  updateStudent,
  migrateTables,
  seedTables
}