export function scrollTo() {
  const target = $(this).attr('data-scroll');
  let dist = $(target).offset().top;
  $('html, body').animate({scrollTop: dist}, 1200, 'swing');
}