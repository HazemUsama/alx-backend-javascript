export default function updatestudentgradebycity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      for (const grade of newGrades) {
        if (grade.studentId === student.id) {
          return { ...student, grade: grade.grade };
        }
      }
      return { ...student, grade: 'N/A' };
    });
}
