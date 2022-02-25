

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const previousButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect(); //get all size property of that particular element

const slideWidth = slideSize.width; // from all the properties available we are gettign only the width value

//! Arranging slides next to each another
//? line 12,13,14 are managing the left property of images/div
// slides[0].style.left = slideWidth*0 + "px";;
// slides[1].style.left = slideWidth*1 + "px";
// slides[2].style.left = slideWidth*2 + "px";

//?instead arranging them seprately using forEach loop
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//*  Utility Function for moving slides to the left or right
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-` + targetSlide.style.left + `)`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowButton = (targetIndex, previousButton, nextButton) => {
  if (targetIndex === 0) {
    previousButton.style.display = 'none';
    nextButton.style.display = 'block';
  } else if (targetIndex === slides.length - 1) {
    // getting slides from global
    previousButton.style.display = 'block';
    nextButton.style.display = 'none';
  } else {
    previousButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
};
//* --------*-------------*-------------*-------------*
//! right button to move slides right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  //move to the next slide-- Basically moving the complete 'ul' at a certain width
  moveToSlide(track, currentSlide, nextSlide);

  //updating the current Dot
  const currentDot = dotsNav.querySelector(".current-slide"); // current-slide inside the dotsNav 'ul'
  const nextDot = currentDot.nextElementSibling;
  updateDots(currentDot, nextDot);

  // hide or display next or previous button
  const targetIndex = slides.findIndex((slide) => slide === nextSlide); // getting the index of the target dot
  hideShowButton(targetIndex, previousButton, nextButton);
});

//! click left button to move slide to the left
previousButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const previousSlide = currentSlide.previousElementSibling;
  //move to the previous slide-- Basically moving the complete 'ul' at a certain width
  moveToSlide(track, currentSlide, previousSlide);

  //updating the current Dot
  const currentDot = dotsNav.querySelector(".current-slide"); // current-slide inside the dotsNav 'ul'
  const previousDot = currentDot.previousElementSibling;
  updateDots(currentDot, previousDot);

  // hide or display next or previous button
  const targetIndex = slides.findIndex((slide) => slide === previousSlide); // getting the index of the target dot
  hideShowButton(targetIndex, previousButton, nextButton);
});

//! nav indicator for current slide
dotsNav.addEventListener("click", (e) => {
  // console.log(e.target.closest('button')) --Get the element which has or is  a button
  const targetDot = e.target.closest("button");
  if (!targetDot) return; // don't traverse through all if target is not a button
  const currentSlide = track.querySelector(".current-slide"); // current-slide inside the track 'ul'
  const targetIndex = dots.findIndex((dot) => dot === targetDot); // getting the index of the target dot
  const targetSlide = slides[targetIndex];
  //move to the target slide
  moveToSlide(track, currentSlide, targetSlide);

  //updating target dot design
  const currentDot = dotsNav.querySelector(".current-slide"); // current-slide inside the dotsNav 'ul'
  updateDots(currentDot, targetDot);

  // disaperaing next or previous button when slide index is 0 or last respectively
  hideShowButton(targetIndex, previousButton, nextButton);
});
