

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
  location.href="https://github.com/anupamvamsi";
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

  $('.nl1').click(function(){
    window.open("https://drive.google.com/file/d/1OpLee8u_ookMAi9aJIeHqWN3Ltoj3Z7l/view");
  });

  $('.nl2').click(function(){
    window.open("https://drive.google.com/file/d/1Y94ua2KPr_TGYTGb6n1ZocwebHVYWK6P/view");
  });

  $('.nl3').click(function(){
    window.open("https://drive.google.com/file/d/1vmCcHq3yPP2yjLNHFCtKyhC5CwrsR68k/view");
  });

  $('.nl4').click(function(){
    window.open("https://drive.google.com/file/d/1nBh7XV3FH5oQ1uuDP8UnWwr4kIWbbTTc/view");
  });

  $('.nl5').click(function(){
    window.open("https://drive.google.com/file/d/1ccqkKspH3WN3ItahiTM4UNf016AftB-Z/view");
  });
  