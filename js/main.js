$(document).ready(function () {
  $(".loader").fadeOut(1000);
});
/* Smooth scrolling script */
$(document).ready(function () {
  $(".innerLinks a, .navbar a, footer a[href='#index']").on("click", function (
    event
  ) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

document.querySelector(".fotorama").fotorama();
