const http = require('http');
const fs = require('fs');

const DB = process.argv.length > 2 ? process.argv[2] : '';

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

        const Text = [];
        Text.push(`Number of students: ${students.length}`);

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
          Text.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });

        resolve(Text.join('\n'));
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(DB)
      .then((answer) => {
        const text = ['This is the list of our students', answer].join('\n');
        res.end(text);
      })
      .catch((err) => {
        const text = ['This is the list of our students', err.message].join('\n');
        res.end(text);
      });
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
