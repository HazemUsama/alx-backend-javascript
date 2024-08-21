const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const students = data
          .trim()
          .split('\n')
          .slice(1);

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

        resolve(true);
      }
    });
  });
}

module.exports = countStudents;
