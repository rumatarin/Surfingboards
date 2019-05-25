export const span = document.querySelector(".subscribe__span"),
  email = document.getElementById("email"),
  spanEmail = document.querySelector(".subscribe__span"),
  form = document.querySelector(".__mailSending"),
  btn = document.querySelector("._subscribeBtn"),
  mobileSmall = window.matchMedia('(max-width: 20em)'),
  mobileMedium = window.matchMedia('(max-width: 23.44em)');

function validateEmail() {
  const emailValue = email.value;

  if (emailValue !== "") {
    spanEmail.style.top = "-1.8rem";
  } else {
    spanEmail.style.top = "2.2rem";
  }
}

export function inputFocus() {
  const emailValue = email.value;

  if (mobileMedium.matches) {
    spanEmail.style.top = "-3.5rem";
  } else {
    spanEmail.style.top = "-1.8rem";
  }
  


}

export function inputBlur() {
  const emailValue = email.value;
  spanEmail.style.top = "2.2rem";

  if (mobileMedium.matches) {

    if (emailValue !== "") {
      spanEmail.style.top = "-3.5rem";
      btn.disabled = false;
    } else {
      spanEmail.style.top = "4.5rem";
      btn.disabled = true;
    }

  } else {

    if (emailValue !== "") {
      spanEmail.style.top = "-1.8rem";
      btn.disabled = false;
    } else {
      spanEmail.style.top = "2.2rem";
      btn.disabled = true;
    }

  }

  
}

// @if $breakpoint == mobile-s {
//   @media only screen and (max-width: 20em) {
//     //320px
//     @content
//   }
// }

// @if $breakpoint == mobile-m {
//   @media only screen and (max-width: 23.44em) {
//     //375px
//     @content
//   }
// }

// @if $breakpoint == mobile-l {
//   @media only screen and (max-width: 26.563em) {
//     //425px
//     @content
//   }
// }

// @if $breakpoint == tablet {
//   @media only screen and (max-width: 48em) {
//     //768px
//     @content
//   }
// }

// @if $breakpoint == laptop {
//   @media only screen and (max-width: 64em) {
//     //1024px
//     @content
//   }
// }

// @if $breakpoint == laptop-l {
//   @media only screen and (max-width: 90em) {
//     //1440px
//     @content
//   }
// }

// @if $breakpoint == fullHD {
//   @media only screen and (max-width: 120em) {
//     //1920px
//     @content
//   }
// }

// @if $breakpoint == 4k {
//   @media only screen and (max-width: 160em) {
//     //2560px
//     @content
//   }
// }
