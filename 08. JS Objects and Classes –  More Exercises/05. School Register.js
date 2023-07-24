function solve(input) {
  let result = input.reduce((acc, curr) => {
    let [student, gradeInfo, scoreInfo] = curr.split(", ");
    let name = student.split(": ")[1];
    let grade = Number(gradeInfo.split(": ")[1]);
    let score = Number(scoreInfo.split(": ")[1]);

    if (score >= 3.0) {
      if (acc.hasOwnProperty(grade)) {
        acc[grade][name] = score;
      } else {
        acc[grade] = {};
        acc[grade][name] = score;
      }
    }

    return acc;
  }, {});

  function printStudents(students) {
    const arrayOutput = [];

    Object.keys(students).forEach((key) => {
      arrayOutput.push(key);
    });

    return arrayOutput.join(", ");
  }

  function avg(students) {
    let output = 0;
    let numerator = 0;

    Object.values(students).forEach((x) => {
      output += x;
      numerator++;
    });

    return (output / numerator).toFixed(2);
  }

  sortedGrades = Object.entries(result);

  sortedGrades.forEach(([grade, students]) => {
    console.log(`${grade} Grade`);
    console.log(`List of students: ${printStudents(students)}`);
    console.log(`Average annual score from last year: ${avg(students)}`);
    console.log();
  });
}

solve([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
