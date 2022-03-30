import { hideAll } from "./hideAll.js";

export function clickOnYear(e) {
    e.preventDefault();
    let year = e.currentTarget.children[0];
    let currCalendar = '';
    document.querySelectorAll('.monthCalendar').forEach(calendar => {
        if (calendar.id.includes(year.textContent)) {
            hideAll();
            currCalendar = document.getElementById(`${calendar.id}`);
            currCalendar.style.display = 'block';
            

        }
    })
    return year,currCalendar;
}