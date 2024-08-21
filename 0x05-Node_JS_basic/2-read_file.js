const fs = require('fs');

function countStudents(filePath) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const data = fs
    .readFileSync(filePath, 'utf-8')
    .trim()
    .split('\n');

  const students = data.slice(1);
  console.log(`Number of students: ${students.length}`);

  const fieldCounts = new Map();

  for (const student of students) {
    const [firstName, lastName, age, field] = student.split(',');

    if (!firstName || !lastName || !age || !field) return;
    if (!fieldCounts.has(field)) {
      fieldCounts.set(field, []);
    }
    fieldCounts.get(field).push(firstName);
  }

  fieldCounts.forEach((names, field) => {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  });
}

module.exports = countStudents;
