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
let empDailyWageArray=new Array();
let empDailyWageMap=new Map();
let empDailyHrsMap=new Map();

//calculating wages till a condition of 100hrs or 20 days is met
while(totalEmpHrs<=TOTAL_WORKING_HRS && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs));
    //UC8- storing day and daily wage along with total wage
    empDailyWageMap.set(totalWorkingDays,calculateDailyWage(empHrs));
    //UC9- storing daily hrs and day in map
    empDailyHrsMap.set(totalWorkingDays,empHrs);
}
console.log(empDailyWageMap);
let empWage=calculateDailyWage(totalEmpHrs);
console.log("UC6 Total Days: "+totalWorkingDays+ " Total Hrs: "+ totalEmpHrs+ " Total Wage: "+empWage);

//UC7 Refactor using array helper functions and arrow functions
//UC7A calculate total wage using array for each or reduce method
let totEmpWage=0;
const sum=(dailyWage)=>{
    totEmpWage+=dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC7A- Total Days: "+totalWorkingDays+
            " Total Hrs: "+totalEmpHrs+" Emp Wage: "+totEmpWage);
console.log("UC7A- Emp Wage with reduce: "+empDailyWageArray.reduce(findTotal,0));

//UC7B- show the day along with the daily wage using array map helper function
let dailyCounter=0;
const mapDayWithWage=(dailyWage)=>{
    dailyCounter++;
    return dailyCounter+" = "+dailyWage;
}
let mapDayWithWageArray=empDailyWageArray.map(mapDayWithWage);
console.log("UC7B- Daily wage map");
console.log(mapDayWithWageArray);

//UC7C- show days when full time wage of 160 were earned
const fullTimeWage=(dailyWage)=>{
    return dailyWage.includes("160");
}
let fullDayWageArray=mapDayWithWageArray.filter(fullTimeWage);
console.log("UC7C- Daily wage filter when fulltime wage earned");
console.log(fullDayWageArray);

//UC7D- find the first occurrence when full time wage was earned using find function
console.log("UC7D- First FullTime Wage was earned on Day: "+mapDayWithWageArray.find(fullTimeWage));

//UC7E- Check if Every Element of Full Time Wage Array truely holds Full Time Wage
console.log("UC7E- Check all element have full time wage: "+ fullDayWageArray.every(fullTimeWage));

//UC7F- Check if there is any part time wage
const isAnyPartTimeWage=(dailyWage)=>{
    return dailyWage.includes("80");
}
console.log("UC7F- Check if any part time wage: "+
            mapDayWithWageArray.some(isAnyPartTimeWage));

//UC7G- Find the number of days the Employee Worked
const totalDaysWorked=(numOfDays, dailyWage)=>{
    if(dailyWage>0){
        return numOfDays+1;
    }
    return numOfDays;
}
console.log("UC7G- Number of days employee worked: "+
            empDailyWageArray.reduce(totalDaysWorked,0));

console.log("UC8- Emp Wage Map totalHrs: "+ Array.from(empDailyWageMap.values()).reduce(findTotal,0));

//UC9A using daily wage and daily hrs map performing operations using arrow functions
let totalHrs=Array.from((empDailyHrsMap).values()).reduce(findTotal,0);
let totalSalary=empDailyWageArray.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);
console.log("UC9 Employee total wage: "+totalSalary+" total hours: "+totalHrs);

//UC9B- show full working days, part working days and no working days
let nonWorkingDays=new Array();
let partWorkingDays=new Array();
let fullWorkingDays=new Array();
empDailyHrsMap.forEach((value,key,map)=>{
    if(value==8) fullWorkingDays.push(key);
    else if(value==4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("full working days "+fullWorkingDays);
console.log("part working days "+partWorkingDays);
console.log("non working days "+nonWorkingDays);

