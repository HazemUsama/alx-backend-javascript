interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {firstName: "Hazem", lastName: "Osama", age: 21, location: "Egypt"};
const student2: Student = {firstName: "Mohamed", lastName: "Ramadan", age: 19, location: "Egypt"};

const studentsList: Student[] = [student1, student2];

const displayStudents = (students: Student[]): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');

  headRow.insertAdjacentHTML('beforeend', '<td>First Name</td>');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  tableHead.insertAdjacentElement('beforeend', headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');

    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);

    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }

  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);
  document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);
document.title = 'Task 0';
