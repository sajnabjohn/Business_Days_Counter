import { NthDayMonthHoliday } from "../interfaces/Holidays";

//nth day in a month class returns holiday for a purticular day in a month (example: 2nd monday of June)
class NthDayInMonthHoliday implements NthDayMonthHoliday {
    nth: number;
    day: number; 
    month: number;
  
    constructor(nth: number, day: number, month: number) {
        this.nth = nth; //2
        this.day = day; //monday
        this.month = month; // june
    }
    
    isHoliday(date: Date): boolean {
        const firstOfMonth = new Date(date.getFullYear(), this.month - 1, 1); // find the day of the month start
        let dayOffset      = 0; 
        if(firstOfMonth.getDay() == 0 || firstOfMonth.getDay() == 1 ){ 
            dayOffset = (7- firstOfMonth.getDay() + 2)
        }else{
            dayOffset = (7- firstOfMonth.getDay() + 9)
        }
        let holidayDate = new Date(date.getFullYear(), this.month -1, dayOffset)
  
        return  date.getTime() === holidayDate.getTime();
    }
  }

  export default NthDayInMonthHoliday;