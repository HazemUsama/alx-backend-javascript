export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const employees = [];
      for (const department in report.allEmployees) {
        if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
          employees.push(...report.allEmployees[department]);
        }
      }

      let currIdx = 0;
      return {
        next() {
          if (currIdx < employees.length) {
            currIdx += 1;
            return { value: employees[currIdx - 1], done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
