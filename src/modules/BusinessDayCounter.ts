
import { HolidayRule } from '../interfaces/HolidayRule.js';
import {isWeekday} from '../utils/helper.js'

// BusinessDayCounter Class
class BusinessDayCounter {
    // Weekdays count for Task 1
    WeekdaysBetweenTwoDates(firstDate:Date, secondDate:Date):number {
        let count       = 0;
        let startDate   = new Date(firstDate.toDateString());
        startDate.setDate(startDate.getDate() + 1);
        let endDate     = new Date(secondDate.toDateString());
        endDate.setDate(endDate.getDate() - 1);
        
        while (startDate <= endDate) {
            if (isWeekday(startDate)) {
                count++;
            }
            startDate.setDate(startDate.getDate() + 1);
        }
        return count;
    }
    
    // Business days count for Task 2 and Task 3
    BusinessDaysBetweenTwoDates(firstDate: Date,secondDate: Date,holidayRules : HolidayRule[]): number {
        let count           = 0;
        let currentDate     = new Date(firstDate.toDateString());
        currentDate.setDate(currentDate.getDate() + 1);
        let endDate         = new Date(secondDate.toDateString());
        endDate.setDate(endDate.getDate() - 1);
        
        while (currentDate <= endDate ) {
            let isHoliday   = false;
            //Condition used fro Task 2 (Not removing for rerence)
            // if (isWeekday(currentDate) && !isHoliday(currentDate, holidays)) {
            if (isWeekday(currentDate)) { 
                for (const holidayRule of holidayRules) { // We will iterate through the hholiday inputs and campare whether the current date is a holiday
                    if (holidayRule.isHoliday(currentDate)) {
                        isHoliday = true;
                        break;
                    }
                }
                if (!isHoliday) {
                    count++;
                }
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return count;
    }
  }

  export default BusinessDayCounter;