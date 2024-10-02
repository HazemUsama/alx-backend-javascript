const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';
      const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      for (const field of sortedFields) {
        const count = students[field].length;
        const list = students[field].join(', ');
        output += `Number of students in ${field}: ${count}. List: ${list}`;
        if (field !== sortedFields[sortedFields.length - 1]) {
          output += '\n';
        }
      }

      return response.status(200).send(output);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(process.argv[2]);
      const studentsInMajor = students[major] || [];
      return response.status(200).send(`List: ${studentsInMajor.join(', ')}`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
