/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const inPage = () => {
  const ifclicked = 
  window.localStorage.getItem('dyslexic') === 'true' ;
  if(ifclicked) {
    document.body.classList.add('dyslexia-mode');
  }
  const toggle = document.querySelector('#dyslexia-toggle');
  if(ifclicked) {
    toggle.setAttribute('aria-pressed', 'true');
  }
  toggle.addEventListener('click', toggleEventhandler);
}

const toggleEventhandler = ev => {
  let clicked = ev.currentTarget.getAttribute('aria-pressed') === 'true' ;
  ev.currentTarget.setAttribute('aria-pressed' ,
  String(!clicked));
  document.body.classList.toggle("dyslexia-mode"); 
  window.localStorage.setItem("dyslexic", String(!clicked));
}


inPage(); 