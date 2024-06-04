export default function getListStudentIds(StudentList) {
  if (typeof StudentList !== 'object') {
    return [];
  }
  return StudentList.map(list => list.id);
}
