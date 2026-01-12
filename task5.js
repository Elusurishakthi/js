


let students = [
  { name: "Anjali", marks: 80 },
  { name: "Balu", marks: 70 },
  { name: "Chakri", marks: 90 },
  { name: "Raju", marks: 85 }
];

let totalMarks = 0;

for (var i = 0; i < students.length; i++) {
  totalMarks = totalMarks + students[i].marks;
}


let averageMarks = totalMarks / students.length;

console.log("Average Marks:", averageMarks);
