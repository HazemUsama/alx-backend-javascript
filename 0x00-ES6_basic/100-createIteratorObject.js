export default function createIteratorObject(report) {
  console.log(report);
  const itr = {
    [Symbol.iterator]() {
      const employees = [];
      for (const department in report.allEmployees) {
        employees.push(...report.allEmployees[department]);
      }

      let currIdx = 0;
      return {
        next() {
          if (currIdx < employees.length)
            return { value: employees[currIdx++], done: false };
          else
            return {done: true};
        }
      }
    }
  };
  return itr;
}
