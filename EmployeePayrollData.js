class EmployeePayrollData{
    //property
    id;
    salary;

//constructor
constructor(id,name,salary) {
    this.id=id;
    this.name=name;
    this.salary=salary;
}

//getter and setter
get name() { return this._name;}
set name(name) {this._name=name;}

//method
toString(){
    return "Id: "+this.id+" Name: "+this.name+" salary: "+this.salary;
}
}
let employeePayrollData=new EmployeePayrollData(1,"Mark",3000000);
console.log(employeePayrollData.toString());
employeePayrollData.name="John";
console.log(employeePayrollData.toString());
