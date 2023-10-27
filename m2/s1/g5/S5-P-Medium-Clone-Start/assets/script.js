window.addEventListener("scroll",function(){
  let top = window.scrollY;
  let nav = document.querySelector('.wrap-nav');
  let button = document.querySelector('.item');


  if (top >= 400) {
      nav.classList.add('white');
      button.classList.add('green');
  } else {
      nav.classList.remove('white');
      button.classList.remove('green');
  }

})