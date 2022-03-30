import { hideAll } from "./hideAll.js";
import { homePage } from "./homePage.js";
import { clickOnYear } from "./clickOnYear.js"
import { clickOnMonth } from "./clickOnMonth.js";
import { clickOnDay } from "./clickOnDay.js";



let allYears = document.querySelectorAll('#years td');
allYears.forEach(year => year.addEventListener('click', clickOnYear));

let monthsCalendar = document.querySelectorAll('.monthCalendar table');
monthsCalendar.forEach(month => month.addEventListener('click', clickOnMonth));

let daysCalendar = document.querySelectorAll('.daysCalendar table');
daysCalendar.forEach(day => day.addEventListener('click', clickOnDay));



hideAll();
homePage();