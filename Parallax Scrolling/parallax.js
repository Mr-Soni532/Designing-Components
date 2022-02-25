let parallax = document.getElementById("parallax");

window.addEventListener("scroll", () => {
    let offset = window.pageYOffset; // get the scrolling value
    // console.log('offset ' +offset)
    // console.log('offset * 0.7 ' +offset * 0.7) 
    parallax.style.backgroundPositionY = offset * 2 + "px";
})