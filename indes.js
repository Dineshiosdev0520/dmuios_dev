

//Navigation active status code  start

  document.addEventListener("DOMContentLoaded", function () {
    // Get all the navigation links
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Add click event listeners to each link
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        // Remove 'active' class from all links
        navLinks.forEach(function (navLink) {
          navLink.classList.remove("active");
        });

        // Add 'active' class to the clicked link
        this.classList.add("active");
      });
    });
  });

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });


//Navigation active status code  end



