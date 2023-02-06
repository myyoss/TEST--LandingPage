"use strict";

var faders = document.querySelectorAll(".fade-in");
var sliders = document.querySelectorAll(".slide-in");
var appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
};
var appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(function (fader) {
  appearOnScroll.observe(fader);
});
sliders.forEach(function (slider) {
  appearOnScroll.observe(slider);
});

function submitForm() {
  var form = document.getElementsByName("contact-form")[0];
  var popUp = document.querySelector(".pop-up-window");
  form.submit();
  form.reset();
  popUp.classList.add("show");
  return false;
}