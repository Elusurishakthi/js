
let passingMarks = 50;
function StudentsMarks(students) {

    
    let upperCaseStudents = students.map(student => {
        return {
            name: student.name.toUpperCase(),
            marks: student.marks
        };
    });


    let passedStudents = upperCaseStudents.filter(student => {
        return student.marks >= passingMarks;
    });


    passedStudents.forEach(student => {


        let grade;
        if (student.marks >= 75) {
            grade = "A";
        } else if (student.marks >= 60) {
            grade = "B";
        } else {
            grade = "C";
        }

    
        let shortName = student.name.slice(0, 3);
        let hasLetterA = student.name.includes("A");

        console.log("Name:", student.name);
        console.log("Short Name:", shortName);
        console.log("Marks:", student.marks);
        console.log("Grade:", grade);
        console.log("Includes 'A' or 'a':", hasLetterA);
       
    });
}


let studentData = [
    { name: "Alice", marks: 78 },
    { name: "Bob", marks: 45 },
    { name: "Amanda", marks: 62 },
    { name: "John", marks: 50 }
]
StudentsMarks(studentData);
