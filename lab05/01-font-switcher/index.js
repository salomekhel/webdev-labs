let nowFont = 1.2; 
const makeBigger = () => {
   alert('make bigger!');
   nowFont += 0.3;
   setFont()
};

const makeSmaller = () => {
   alert('make smaller!');
   nowFont -= 0.3; 
   setFont()
};

const setFont = () => {
   document.querySelector('.content').style.fontSize = `${nowFont}em`
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

