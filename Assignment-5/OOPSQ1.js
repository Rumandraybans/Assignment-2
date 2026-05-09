
class Student {
  constructor(name, rollNo, marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
  }

  displayDetails() {
    console.log("Name: " + this.name + "  Roll No: " + this.rollNo + "  Marks: " + this.marks);
  }

  checkResult() {
    if (this.marks >= 40) {
      console.log("Result: Pass");
    } else {
      console.log("Result: Fail");
    }
  }
}

let student = new Student("Bhuvan Singh", 45, 39);
student.displayDetails();
student.checkResult();
console.log("-------------------------")