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
const NUM_OF_WORKING_DAYS=20;
const TOTAL_WORKING_HRS=100;

//function to get working hrs
const getWorkingHours=(empCheck)=>{
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

//function to calculate daily wages
const calculateDailyWage=(empHrs)=>{
    return empHrs*WAGE_PER_HR;
}

const findTotal=(totalWage, dailyWage)=>{
    return totalWage+dailyWage;
}

let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyHrsAndWageArr=new Array();

//calculating wages till a condition of 100hrs or 20 days is met
while(totalEmpHrs<=TOTAL_WORKING_HRS && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    //UC10 using object to store daily hrs, count of days and daily wage
    empDailyHrsAndWageArr.push({
        dayNumber: totalWorkingDays,
        dailyhrs: empHrs,
        dailyWage: calculateDailyWage(empHrs),
        toString(){
            return "\n Day "+this.dayNumber +"=> Working Hrs: "+this.dailyhrs+" wage Earned: "+this.dailyWage; 
        },
    });
}
console.log("UC 10 daily Hrs and Wage Earned: "+empDailyHrsAndWageArr);