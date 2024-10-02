import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    const DB = process.argv.length > 2 ? process.argv[2] : '';

    res.setHeader('Content-Type', 'text/plain');
    readDatabase(DB)
      .then((fieldCounts) => {
        const text = ['This is the list of our students'];
        fieldCounts.forEach((names, field) => {
          text.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });

        res.status(200).send(text.join('\n'));
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const DB = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    res.setHeader('Content-Type', 'text/plain');
    if (major === 'CS' || major === 'SWE') {
      readDatabase(DB)
        .then((fieldCounts) => {
          console.log(fieldCounts.get(major));
          const students = [];
          for (const student of fieldCounts.get(major)) {
            students.push(student);
          }
          res.status(200).send(`List: ${students.join(', ')}`);
        })
        .catch((err) => {
          res.status(500).send(err.message);
        });
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}
