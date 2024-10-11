let toSwitch = function() {
  /*
   <button></button>
     content
   */
  let toDark = function() {
    let body = document.querySelector(['body']);
    body.classList.toggle('dark__theme');
  }

  let switchButton = document.querySelector('.switch__button');
  
  if(!switchButton) return;
  switchButton.addEventListener('click', toDark);
}