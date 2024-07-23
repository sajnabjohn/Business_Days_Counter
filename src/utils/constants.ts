import FixedDateHoliday from "../modules/FixedDateHoliday.js";
import WeekendHolidayAdjustment from "../modules/WeekendHolidayAdjustment.js";
import NthDayInMonthHoliday from "../modules/NthDayInMonthHoliday.js";
import { HolidayRule } from "../interfaces/HolidayRule.js";
import { FixedHoliday, WeekendHoliday, NthDayMonthHoliday} from "../interfaces/Holidays.js";

//Const used for Task 2 (NOT REMOVING FRO REFERRNCE)

// export const holidays = [
//     new Date('12/25/2013'), 
//     new Date('12/26/2013'), 
//     new Date('01/01/2014'), 
// ];


//Add yours holiday inputs here
// 0 = Sunday, 1 = Monday, ..., 6 = Saturday
// 1 = Jan, 2 = Feb, ........., 12 =  Dec

const FixedHolidayInput         : FixedHoliday          = {month:4, day : 25}; // Anzac Day on April 25th every year
const WeekendHolidayInput       : WeekendHoliday        = {month:1, day : 1}; // New Year's Day on January 1st, adjusted if it's a weekend
const NthDayMonthHolidayInput   : NthDayMonthHoliday    = {nth:2, day : 1, month:6}; // Queen's Birthday on the second Monday in June every year


// Define holiday rules
export const holidayRules: HolidayRule[] = [
    new FixedDateHoliday(FixedHolidayInput.month, FixedHolidayInput.day), 
    new WeekendHolidayAdjustment(WeekendHolidayInput.month, WeekendHolidayInput.day), 
    new NthDayInMonthHoliday(NthDayMonthHolidayInput.nth,NthDayMonthHolidayInput.day,NthDayMonthHolidayInput.month)
];