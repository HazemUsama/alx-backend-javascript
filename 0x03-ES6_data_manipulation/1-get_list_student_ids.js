export default function getListStudentIds(StudentList) {
  if (StudentList instanceof Array) {
    return StudentList.map((list) => list.id);
  }
  return [];
}
