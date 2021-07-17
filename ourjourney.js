

$(function() {
    $(document).scroll(function() {
      let ng=$("#mainNavbar");
      ng.toggleClass("scrolled", $(this).scrollTop() > ng.height());
    })
});

$('.brtxt').click(function(){
location.href="./index.html";
});

$('.homebut').click(function(){
  location.href="./index.html";
});

$('.blogsbut').click(function(){
  location.href="./blogs.html";
});

$('.contactbut').click(function(){
  location.href="templates/Contactus.html";
});

$('.aboutbut').click(function(){
  location.href="./aboutus.html";
});

$('.journeybut').click(function(){
  location.href="./ourjourney.html";
});

$('#pumpum').click(function(){
  location.href="https://www.linkedin.com/in/anupamvamsi/";
});

$('.logos').click(function(){
  location.href="./index.html";
});

$('.ficon').click(function(){
location.href="https://www.facebook.com/toastmastersamritabengaluru";
});

$('.licon').click(function(){
location.href="https://www.linkedin.com/in/toastmasters-amrita-bengaluru-2830b51b4/";
});

$('.iicon').click(function(){
location.href="https://www.instagram.com/toastmastersamritabengaluru/";
});

// $("#fiftpost").hover(function(){
//   $(this).css('filter','grayscale(0)');
//   $('#fift').css('filter','grayscale(0)');
//   }, function(){
//     $(this).css('filter','grayscale(100)');
//     $('#fift').css('filter','grayscale(100)');
// });