let inputLeft = document.getElementById("input-left");
let inputRight = document.getElementById("input-right");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let thumbLeft = document.querySelector(".slider > .thumb.left");
let thumbRight = document.querySelector(".slider > .thumb.right");
let range = document.querySelector(".slider > .range");

function setLeftValue() {
  let _this = inputLeft,
    min = parseInt(_this.min);
  max = parseInt(_this.max);
//   console.log(_this,min,_this.min,max,_this.max)
//   console.log(_this.value)
//   console.log(_this.min)
  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value));
  let percent = ((_this.value - min) / (max - min)) * 100;
  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
  displayValOne.textContent = parseInt(_this.value);
}
setLeftValue();
function setRightValue() {
  let _this = inputRight,
    min = parseInt(_this.min);
  max = parseInt(_this.max);
    console.log('this.value ' +this.value)
    console.log('min ' +min)
    console.log('max ' +max)
  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value));
  let percent = ((_this.value - min) / (max - min)) * 100;
  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
  displayValTwo.textContent = parseInt(_this.value);
}
setRightValue();
inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

// //! Active effect for left thumb

inputLeft.addEventListener("mousedown", function () {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function () {
  thumbLeft.classList.remove("active");
});
// //! Active effect for Right thumb
inputRight.addEventListener("mousedown", function () {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function () {
  thumbRight.classList.remove("active");
});
