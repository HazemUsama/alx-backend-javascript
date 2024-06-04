export default function getStudentIdsSum(students) {
  return students.reduce((sum, curr) => sum + curr.id, 0);
}
