const http = require('http');

const DB = process.argv.length > 2 ? process.argv[2] : '';
const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));

      if (data) {
        const students = data
          .trim()
          .split('\n')
          .slice(1);

        const result = [];
        const fields = new Map();

        result.push(`Number of students: ${students.length}`);
        for (const student of students) {
          const [firstName, lastName, age, field] = student.split(',');

          if (!firstName || !lastName || !age || !field) return;
          if (!fields.has(field)) {
            fields.set(field, []);
          }
          fields.get(field).push(firstName);
        }
        for (const [field, names] of fields) {
          result.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
        resolve(result.join('\n'));
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  console.log(req.url);
  if (req.url === '/') res.end('Hello Holberton School!');
  if (req.url === '/students') {
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

app.listen(1245);

module.exports = app;
