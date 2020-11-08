//UC1 check employee present or absent
{
const IS_PRESENT=1;
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==1){
    console.log("UC1 Employee is Present");
}else{
    console.log("UC1 Employee is Absent");
    return;
}
}

//refactoring the code to use function to get working hrs
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;

//function to get working hrs
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
            break;
        case IS_PART_TIME:
            return PART_TIME_HRS;
            break;
        default:
            return 0;
    }
}
let empHrs=0;
let empCheck=Math.floor(Math.random()*10)%3;
empHrs=getWorkingHours(empCheck);
let empWage=empHrs*WAGE_PER_HR;
console.log("UC3 Employee Wage: "+empWage);


