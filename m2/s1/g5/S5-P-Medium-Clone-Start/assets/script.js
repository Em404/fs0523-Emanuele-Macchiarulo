window.addEventListener("scroll",function(){
  let top = window.scrollY;
  let nav = document.querySelector('.wrap-nav');
  let button = document.querySelector('.item');

  let sectionSticky = this.document.querySelector('.wrap-sf')

  if (top >= 400) {
      nav.classList.add('white');
      button.classList.add('green');
  } else {
      nav.classList.remove('white');
      button.classList.remove('green');
  }

  if (top >= 800) {
    sectionSticky.classList.add('sf-fix')
  } else {
    sectionSticky.classList.remove('sf-fix')
  }

})