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

//UC11 Performing operations using arrow functions on object
//UC 11A- calculate total wage and total hours worked
let totalWage=empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyWage>0)
                                   .reduce((totalWage,dailyHrsAndWage)=>totalWage+=dailyHrsAndWage.dailyWage,0);
let totalHrs=empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyhrs>0)
                                  .reduce((totalHrs,dailyHrsAndWage)=>totalHrs+=dailyHrsAndWage.dailyhrs,0);
console.log("UC 11A- Totalhrs: "+totalHrs+" Total Wage: "+totalWage);

//UC 11B- show full working days using for Each
process.stdout.write("UC 11B Logging Full Work Days");
empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyhrs==8)
                     .forEach(dailyHrsAndWage=>process.stdout.write(dailyHrsAndWage.toString()));

//UC 11C- show part working days using map by reducing to string array
let partWorkingDayArray=empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyhrs==4)
                                             .map(dailyHrsAndWage=>dailyHrsAndWage.toString());
console.log("\n UC 11C- part working days: "+partWorkingDayArray);

//UC 11D- non working days using map functions
let nonWorkingDaysNum=empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyhrs==0)
                                             .map(dailyHrsAndWage=>dailyHrsAndWage.dayNumber);
console.log("UC 11D- non working days number: "+nonWorkingDaysNum);