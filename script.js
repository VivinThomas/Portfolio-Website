// ...........................................................
// Preloader
// ...........................................................

var loader = document.getElementById("preloader");
// window.addEventListener("load", function(){
//   loader.style.display = "none";
// })

// Add a delay of 2 seconds (2000 milliseconds) before hiding the preloader
setTimeout(function() {
    loader.style.display = "none";
}, 1700);


// ...........................................................
// To Change Text at every window relaoad
// ...........................................................

window.onload = function() {
    // Array of texts to display
    var texts = [

         "Data analysts: turning coffee into queries and spreadsheets into stories since... well, forever.",
         "Data analysts: because who else would find joy in cleaning messy data?",
         "Data analysts: we make Excel spreadsheets exciting... at least, that's what we tell ourselves.",
         "Data analysts: where every day is a 'data-riffic' adventure.",
         "Data analysts: because even numbers need a little love and attention.",
         "I am fluent in Excel, SQL, and sarcasm.",
         "Data analysts: because 'data wrangler' sounds cooler than 'spreadsheet jockey.'",
         "Data analysts: because life's too short to manually enter data.",
         "Data analysts: we're like wizards, but instead of wands, we wield pivot tables."];

    // Get a random index from the texts array
    var randomIndex = Math.floor(Math.random() * texts.length);

    // Set the text to be displayed
    document.getElementById("changing-text").textContent = texts[randomIndex];
  };
  
// ...........................................................
// types my name at every window relaoad
// ...........................................................

document.addEventListener('DOMContentLoaded', function(){
    // Your name to type
    var name = "Vivin Thomas";
    var typingSpeed = 630; // Typing speed in milliseconds
  
    // Get the element where you want to display the typing effect
    var nameElement = document.getElementById('typingName');
  
    // Function to add typing effect
    function typeWriter(text, i) {
      if (i < text.length) {
        nameElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
          typeWriter(text, i);
        }, typingSpeed);
      }
    }
  
    // Start typing effect
    typeWriter(name, 0);
  });

// ...........................................................
// MAIN SCRIPT
// ...........................................................

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// ...........................................................

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }
      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }
      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });
  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });
   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }
  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }
  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


// ......................
// ......................

 