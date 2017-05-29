$("#target1").click(function() {
  window.location.href = "#home"
});

$("#target2").click(function() {
  window.location.href = "#aboutus"
});
$("#target3").click(function() {
  window.location.href = "#portfolio"
});
$("#target4").click(function() {
  window.location.href = "#contact-area"
});
$("#contact").click(function() {
  window.location.href = "mailto:kalpit.parikh@outlook.com"
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1) {
    $('header').addClass("sticky");
  } else {
    $('header').removeClass("sticky");
  }
});
