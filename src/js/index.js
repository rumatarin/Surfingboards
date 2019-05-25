import "./../sass/main.scss";
import "jquery";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
import {span, email, spanEmail, form, btn} from "./../js/emailSending";
import {inputFocus, inputBlur} from "./../js/emailSending";
import someSlider from "./../js/slider";


email.addEventListener("focus", inputFocus);

email.addEventListener("blur", inputBlur);

document.addEventListener("DOMContentLoaded", () => {
  btn.disabled = true;
});

form.addEventListener("submit", e => {
  e.preventDefault();
});


document.addEventListener('click', function(e) {
  let target = e.target;
 
  if (target.tagName === 'A') {
    e.preventDefault();
  }
});

const newSlider = new someSlider();




