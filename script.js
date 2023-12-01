const header = document.querySelector("header");
      const menuToggler = document.querySelectorAll(".menu_toggle");
      const body = document.body;

      // menuToggler.forEach(toggler => {
      //   toggler.addEventListener("click", () => header.classList.toggle("showMenu"));
        
      // });

// *********to give blur back groung on menue btn  click


menuToggler.forEach(toggler => {
  toggler.addEventListener("click", () => {

    //create or destroy element
    if (document.getElementById("shadowDiv") === null) {
      let shadow = document.createElement("div");
      shadow.setAttribute("id", "shadowDiv");
      shadow.classList.add("shadowDivStyle");
      body.appendChild(shadow);
      //use z-index to not affect the nav bar
      body.classList.remove("addScrollBar");
      body.classList.add("removeScrollBar");
    }
    else {
      let shadow = document.getElementById("shadowDiv");
      body.removeChild(shadow);
      body.classList.remove("removeScrollBar");
      body.classList.add("addScrollBar");
    }

    header.classList.toggle("showMenu");
    
  });
  
});


// ********scroll to top********
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

 // iframe seting with blur bg and close btn
  
 function playVideo() {
  // Get the necessary elements
  var videoPopup = document.querySelector('.video-popup');
  var videoIframe = document.querySelector('.video-iframe');
  // var playbtn=document.querySelector('.video-popup');
  // var centervideo=document.querySelector('.center-video');
  // var videoContainer = document.querySelector('.video-container');
  var body = document.body;
  var closebtn=document.getElementById('closebtn');


  // Create and append an overlay element
  var overlay2 = document.createElement("div");
  overlay2.setAttribute("id","videoblurbg");
  overlay2.classList.add ("videobg");
  body.appendChild(overlay2);
// to remove scroll on video play
body.classList.add("removeScrollBar");

  // Display the iframe
   videoIframe.style.display = 'block';
   //videoIframe.classList.add('no-animation');
   videoPopup.style.display='none';
// centervideo.style.display='flex';
closebtn.style.display='block';

  // Disable the click event after the video is played
  videoPopup.onclick = function() 
  {
    // Revert the background blur when the video is closed
    document.body.style.filter = 'none';
  };
}

function closeVideo() {
  var videoIframe = document.querySelector('.video-iframe');
  var overlay2 = document.getElementById('videoblurbg'); // Get the overlay element
  var closebtn=document.getElementById('closebtn');
  var playbtn=document.querySelector('.video-popup');
  // Hide the video iframe and overlay
  videoIframe.style.display = 'none';
  overlay2.style.display = 'none';

  // to remove hidden scroll
  body.classList.remove("removeScrollBar");
  // Revert the background blur when the video is closed
  document.body.style.filter = 'none';
  // to hide close btn after close
  closebtn.style.display='none';
  playbtn.style.display='flex';
}