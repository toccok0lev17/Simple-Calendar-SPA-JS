
import { hideAll } from "./hideAll.js";

export function clickOnDay(e) {
    e.preventDefault();
    if (e.target.tagName === 'CAPTION') {

        let yearOnCurrentCalendar = e.target.textContent.split(' ')[1];
        let id = `year-${yearOnCurrentCalendar}`;
        hideAll();
        document.getElementById(id).style.display = 'block'; 

    }
    if(e.target.tagName === 'TD'){
        let pressedDay = e.target.children[0].textContent;
        e.target.style.backgroundColor = 'red';

    }
}