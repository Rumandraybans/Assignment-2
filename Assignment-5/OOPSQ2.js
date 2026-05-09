// Parent Class
class Employee {
  constructor(empId, empName, salary) {
    this.empId = empId;
    this.empName = empName;
    this.salary = salary;
  }

  displayEmployee() {
    console.log("Employee ID: " + this.empId);
    console.log("Employee Name: " + this.empName);
    console.log("Salary: " + this.salary);
  }
}

// Child Class
class Manager extends Employee {
  constructor(empId, empName, salary, department) {
    super(empId, empName, salary); 
    this.department = department;
  }

  displayManager() {
    this.displayEmployee();
    console.log("Department: " + this.department);
  }
}

let emp = new Employee(119, "Salman Khan", 56750);
let mgr = new Manager(114, "Sanjay Dutt", 77462, "Accounts");

console.log("Employee Details");
emp.displayEmployee();

console.log("Manager Details");
mgr.displayManager();
console.log("-------------------------")