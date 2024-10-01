const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs
      .readFileSync(filePath, 'utf-8')
      .trim()
      .split('\n')
      .slice(1);
    console.log(`Number of students: ${data.length}`);
    const fields = new Map();
    for (const student of data) {
      const [firstName, lastName, age, field] = student.split(',');

      if (!firstName || !lastName || !age || !field) return;
      if (!fields.has(field)) {
        fields.set(field, []);
      }
      fields.get(field).push(firstName);
    }
    for (const [field, names] of fields) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

countStudents('database.csv');
