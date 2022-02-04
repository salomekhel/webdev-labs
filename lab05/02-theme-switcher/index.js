/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const Default = ev => {
   document.querySelector('body').className = '' ;
   
};

const Desert = () => {
   document.querySelector('body').className = 'desert' ;
};

const Ocean = () => {
   document.querySelector('body').className = 'ocean' ;
};

const Highcontrast = () => {
   document.querySelector('body').className = 'high-contrast' ;
};

document.querySelector("#default").addEventListener('click', Default);
document.querySelector("#desert").addEventListener('click', Desert);
document.querySelector("#ocean").addEventListener('click', Ocean);
document.querySelector("#high-contrast").addEventListener('click', Highcontrast);