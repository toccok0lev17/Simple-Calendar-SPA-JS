let allSections = document.querySelectorAll('section');

export function hideAll(){
    allSections.forEach(section => section.style.display = 'none');
}