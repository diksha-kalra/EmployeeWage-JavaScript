class EmployeePayrollData{
    //property
    id;
    salary;
    gender;
    startDate;

//constructor
constructor(...params) {
    this.id=params[0];
    this.name=params[1];
    this.salary=params[2];
    this.gender=params[3];
    this.startDate=params[4];
}

//getter and setter
get name() { return this._name;}
set name(name) {this._name=name;}

//method
toString(){
    const options={ year: 'numeric', month: 'long', day: 'numeric'};
    const empDate=(!this.startDate)?"undefined": this.startDate.toLocaleDateString("en-US",options);
    return "Id: "+this.id+" Name: "+this.name+" salary: "+this.salary+" Gender: "+this.gender+" Start Date: "+empDate;
}
}
let employeePayrollData=new EmployeePayrollData(1,"Mark",3000000);
console.log(employeePayrollData.toString());
employeePayrollData.name="John";
console.log(employeePayrollData.toString());
let newemployeePayrollData=new EmployeePayrollData(2,"Terrisa",4000000,"F",new Date());
console.log(newemployeePayrollData.toString());
