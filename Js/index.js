document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.main-navigation a');

    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });

//mobile 

document.querySelector('.menu-toggle').addEventListener('click', function(event) {
  event.preventDefault();
  var menu = document.getElementById('main-nav-wrap');
  menu.classList.toggle('active');
});
