const nameRegexPattern=RegExp('^[A-Z]{1}[a-z]{2,}$');
const genderRegexPattern=RegExp('[M,F]{1}$')
class EmployeePayrollData{
    //property
    id;
    salary;
    gender;
    startDate;
//constructor
constructor(...params) {
    if(!params[0]>0) throw "invalid employee id"
    {
        this.id=params[0];
    }
    if(!nameRegexPattern.test(params[1]))throw "invalid employee name"
    {
            this.name=params[1];
    }
    if(!params[2]>0) throw "invalid employee salaray must be greater than 0"
    {
        this.salary=params[2];
    }
    if(!genderRegexPattern.test(params[3])) throw "invalid gender type"
    {
        this.gender=params[3];
    }
    if(params[4]>new Date()) throw "future date not allowed"
    {
        this.startDate=params[4];
    }
}

//getter and setter
get name() { return this._name;}
set name(name){ this._name=name;}

//method
toString(){
    const options={ year: 'numeric', month: 'long', day: 'numeric'};
    const empDate=(!this.startDate)?"undefined": this.startDate.toLocaleDateString("en-US",options);
    return "Id: "+this.id+" Name: "+this.name+" salary: "+this.salary+" Gender: "+this.gender+" Start Date: "+empDate;
}
}

try{
    let invalidDateEmployeePayrollData=new EmployeePayrollData(3,"Mark",3000000,"M",new Date("December 10, 2020"));
    console.log(invalidDateEmployeePayrollData.toString());

}catch(e){
    console.log(e);
}
try{
    let invalidIdemployeePayrollData=new EmployeePayrollData(0,"Terrisa",4000000,"F",new Date());
    console.log(invalidIdemployeePayrollData.toString());
}catch(e){
    console.log(e);
}
let employeePayrollData=new EmployeePayrollData(3,"Charles",5000000,"M",new Date());
console.log(employeePayrollData.toString());
