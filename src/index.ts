/* Created By Sajna John */

import BusinessDayCounter from "./modules/BusinessDayCounter.js";
import { holidayRules } from "./utils/constants.js";

//Caluculate no of weekdays and business days according to the holiday rules
function calculateNoOfDays() {
 
  // Collect inputs (start and end dates)
  const firstDateInput = document.getElementById('firstDate') as HTMLInputElement;
  const secondDateInput = document.getElementById('secondDate') as HTMLInputElement;
  
  // Create FormData object
  const formData = {
      firstDate: firstDateInput.value,
      secondDate: secondDateInput.value,
  };

  // Convert input strings to Date objects
  var startDate = new Date(formData.firstDate);
  var endDate = new Date(formData.secondDate);

  // Calculate weekdays days
  const weekDaysCount = new BusinessDayCounter().WeekdaysBetweenTwoDates(startDate,endDate)

  // Calculate business days
  const businessDaysCount = new BusinessDayCounter().BusinessDaysBetweenTwoDates(startDate, endDate, holidayRules);

  // Display result

  document.getElementById("table")!.style.display= "table";

  var resultElement = document.getElementById('weekdays');
  resultElement!.textContent = weekDaysCount.toString();


  var resultElement = document.getElementById('businessdays');
  resultElement!.textContent = businessDaysCount.toString();
}


//Hide table element initially
document.getElementById("table")!.style.display="none";

// Call function when form is submitted
const form = document.getElementById("businessDaysForm") as HTMLFormElement | null;
form?.addEventListener("submit", e =>{
  e.preventDefault();
  calculateNoOfDays();
})
