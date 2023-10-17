let menuBar = document.getElementById('hamburger');
let cancelButton = document.querySelector('#cancel');
let navLinks = document.querySelector('.links');

menuBar.addEventListener('click', function() {
   menuBar.classList.add('disappear');
   cancelButton.classList.remove('disappear');
   navLinks.classList.add('flex-navlinks');
});

cancelButton.addEventListener('click', function() {
    cancelButton.classList.add('disappear');
    menuBar.classList.remove('disappear');
    navLinks.classList.remove('flex-navlinks'); 
 });