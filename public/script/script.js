
$(document).ready(changeColor('#999999', '#666666'));
 $(document).ready(adjustPageWidth);


 $(window).resize(adjustPageWidth);


// this function adjusts page width to accomodate for the sidebar

 function adjustPageWidth(){
  var pageWidth = $(document).width();
  if(pageWidth < 760){
  	$(".page-body").css("margin-left", "0px");
  	console.log(pageWidth);
  	console.log("margin removed");
  }
  else {
  	$(".page-body").css("margin-left", "300px");
  	console.log(pageWidth);
  	console.log("margin added");
  }
 }


 function changeColor(darkColor, lightColor){
  
  $('.color-dark').each(function(){
  	$(this).css('transition', '1s');
  	$(this).css('background-color', darkColor);

  });

    $('.color-light').each(function(){
    	$(this).css('transition', '1s');
  	$(this).css('background-color', lightColor);
  });
}


$("#make-pretty-btn").click(function(){
  changeColor("black","white");
});


















