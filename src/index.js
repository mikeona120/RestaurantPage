import {navBar, home, menu, contact, clear} from './modules'


navBar();
home();


document.getElementById("homeTab").addEventListener("click", function() {
    clear();
    home();
});

document.getElementById("menuTab").addEventListener("click", function() {
    clear();
    menu();
});

document.getElementById("contactTab").addEventListener("click", function() {
    clear();
    contact();
});
