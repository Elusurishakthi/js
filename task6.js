
let student = {
    name: "Rahul",
    rollNo: 101,
    marks: 85
};
function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else {
        return "Fail";
    }
}


function selectSubject(subjectCode) {
    switch (subjectCode) {
        case 1:
            return "Mathematics";
        case 2:
            return "Science";
        case 3:
            return "English";
        default:
            return "Invalid Subject";
    }
}


function evaluateStudent() {
    let grade = calculateGrade(student.marks);
    let subject = selectSubject(2);

    console.log("Student Name:", student.name);
    console.log("Roll No:", student.rollNo);
    console.log("Subject:", subject);
    console.log("Marks:", student.marks);
    console.log("Grade:", grade);
}

evaluateStudent();
