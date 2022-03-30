let allSections = document.querySelectorAll('section');
import { hideAll } from "./hideAll.js";

export function homePage(){
    hideAll();
    allSections[0].style.display = 'block';
    
    
}