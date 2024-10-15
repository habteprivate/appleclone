// if (window.innerWidth <= 768) {
//   $("footer-links-wrapper h3").on("click", function () {
//     $(this).toggleClass("dropdown-toggle");
//     $(this).next().slideToggle("dropdown-toggle");
//   });
// } else {
//   $("footer-links-wrapper h3").removeClass("dropdown-toggle");
//   $("footer-links-wrapper ul li").show();
// }


$(document).ready(function () {
  $("#footer-links-wrapper h3").click(function () {
    $(this).next().toggle()

  });
});
