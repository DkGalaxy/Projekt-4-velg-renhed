// Hamburger-menu 
document.querySelector('.menu-toggle').addEventListener('click', function() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');

  const icon = document.querySelector('.menu-toggle i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Dropdown-menu
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
    dropdownToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('active');

        const icon = this.querySelector('i');
            icon.classList.toggle('fa-chevron-right');
            icon.classList.toggle('fa-chevron-down');
      });
    });
  });

  