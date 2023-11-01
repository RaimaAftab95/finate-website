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
