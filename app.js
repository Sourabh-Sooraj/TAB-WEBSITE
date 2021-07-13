let curtain1=$("#curtain1");
let curtain2=$("#curtain2");
let spotlight=$("#spotlight");
let tab=$("#text");
let wordcloud=$('#wordcloud');

$(function() {
        $(document).scroll(function() {
          let ng=$("#mainNavbar");
          let ni=$(".nav-item");
          ng.toggleClass("scrolled", $(this).scrollTop() > ng.height());
          spotlight.toggleClass("off",$(this).scrollTop() > ng.height());
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
  location.href="./contactus.html";
});

$('.aboutbut').click(function(){
  location.href="./aboutus.html";
});

$('.journeybut').click(function(){
  location.href="./ourjourney.html";
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

$('#pumpum').click(function(){
  location.href="https://github.com/anupamvamsi";
});


$(function(){
  $(window).scroll(function(){ 
    let val=$(this).scrollTop();
    let t = -1366 + val*3 + 'px';
    curtain1.css('left', t); 
    curtain2.css('right', t); 
    })
  });

  $('#text').click(function(){
    wordcloud.css('display','block');
    tab.css('cursor','default');
  });


