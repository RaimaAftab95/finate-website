const header = document.querySelector("header");
      const menuToggler = document.querySelectorAll(".menu_toggle");
      const body = document.body;

      menuToggler.forEach(toggler => {
        toggler.addEventListener("click", () => header.classList.toggle("showMenu"));
        
      });

// *********to give blur back groung on menue btn  click
// const header = document.querySelector("header");
// const menuToggler = document.querySelectorAll(".menu_toggle");
// const body = document.body;

// menuToggler.forEach(toggler => {
//   toggler.addEventListener("click", () => {
//     header.classList.toggle("showMenu");
//     // to give blur effect on bar click btn
//     body.classList.toggle("menu-open");
//   });
// });

// scroll to top
// Get the scroll-to-top element
const scrollToTop = document.getElementById('scroll-to-top');

// Get the section2 element
const section2 = document.getElementById('section#2');

// Check if the scroll position is below the section1
window.addEventListener('scroll', function () {
  const section1OffsetTop = section2.offsetTop;
  const scrollPosition = window.scrollY + window.innerHeight;

  // Display the scroll-to-top icon only if the scroll position is below section1
  if (scrollPosition >= section1OffsetTop) {
    scrollToTop.style.display = 'block';
  } else {
    scrollToTop.style.display = 'none';
  }
});