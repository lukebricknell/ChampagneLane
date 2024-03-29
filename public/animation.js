document.addEventListener("DOMContentLoaded", function (event) {
  document.addEventListener("scroll", function (event) {
    const animatedBoxes = document.getElementsByClassName("animate");
    const windowOffsetTop = window.innerHeight + window.scrollY;

    Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
      const animatedBoxOffsetTop = animatedBox.offsetTop;

      if (windowOffsetTop >= animatedBoxOffsetTop) {
        addClass(animatedBox, "animate__fadeInUp");
      }
    });
  });
});

function addClass(element, className) {
  const arrayClasses = element.className.split(" ");
  if (arrayClasses.indexOf(className) === -1) {
    element.className += " " + className;
  }
}

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("#loader").classList.add("hidden");
  }
};
