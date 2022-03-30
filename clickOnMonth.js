import { clickOnYear } from "./clickOnYear.js";
import { hideAll } from "./hideAll.js";
import { homePage } from "./homePage.js";

export function clickOnMonth(e) {
    e.preventDefault();
    let idOfCalendar

    if (e.target.tagName === 'CAPTION') {
        hideAll();
        homePage();
    }
    if (e.target.tagName === 'TD') {
        let idOfCalendar = clickOnYear(e).id;
        let clickedMonth = e.target.children[0].textContent;
        let indexOfMonth = 0;
        let currentCalendarYear = idOfCalendar.split('-')[1];

        let allMonthsFromCurrentCalendar = document.querySelectorAll(`#${idOfCalendar} div`);
        for (let i = 0; i < allMonthsFromCurrentCalendar.length; i++) {
            if (clickedMonth === allMonthsFromCurrentCalendar[i].textContent) {
                indexOfMonth = i + 1;
            }
        }
        let idElToShow = `month-${currentCalendarYear}-${indexOfMonth}`;
        hideAll();
        document.getElementById(idElToShow).style.display = 'block';

    }
}