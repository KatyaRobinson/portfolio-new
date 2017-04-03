
/*$(document).ready(changeColors('#666666', '#999999'));
 $(document).ready(adjustPageWidth);*/


function resetColorsToOriginal(){
   var  darkerColor = "#999999",
        lighterColor = "#999999",
        popColor = "#999999",
        baseeColor = "#666666";
  changeColors(baseeColor, darkerColor, lighterColor, popColor);
  $('img').css('filter', 'grayscale(100%)');
}





 $(document).ready(function(){
  resetColorsToOriginal();
  adjustPageWidth();
  colorActiveTab(); // TODO
 });


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

 function colorActiveTab(){
  $(".active").forEach(function(){
    $(this).addClass('color-alt');
  });
 }


 function setColors(baseColor, darkColor, lightColor, altColor){
  
  $('.color-base').each(function(){
    $(this).css('transition', '1s');
    $(this).css('background-color', baseColor);

  });

  $('.color-dark').each(function(){
  	$(this).css('transition', '1s');
  	$(this).css('background-color', darkColor);

  });

    $('.color-light').each(function(){
    	$(this).css('transition', '1s');
  	$(this).css('background-color', lightColor);
  });

    $('.color-alt').each(function(){
    	$(this).css('transition', '1s');
  	$(this).css('background-color', altColor);
  });

}


$("#blue").click(function(){
    baseeColor = "#666666";
    darkerColor = "#6290C8";
    lighterColor = "#1F487E";
    popColor = "#EDB183";
    changeColors(baseeColor, darkerColor, lighterColor, popColor);
    $(this).css('border', '1px solid yellow');

});

$("#green").click(function(){
    baseeColor = "#666666";
    darkerColor = "#E9D985";
    lighterColor = "#749C75";
    popColor = "#D2A1B8";
    changeColors(baseeColor, darkerColor, lighterColor, popColor);
    $(this).css('border', '1px solid yellow');
});

$("#purple").click(function(){

    baseeColor = "#666666";
    darkerColor = "#B75D69";
    lighterColor = "#372549";
    popColor = "#EACDC2";
    changeColors(baseeColor, darkerColor, lighterColor, popColor);
    $(this).css('border', '1px solid yellow');
});

$("#original").click(function(){
  resetColorsToOriginal();
  $(this).css('border', '1px solid yellow');
});

function changeColors(baseColor, darkColor, lightColor, altColor){
  
  setColors(baseColor, darkColor, lightColor, altColor);
  $("#make-pretty-options li").css('border', 'none');
  $('img').css('filter', 'grayscale(0%)');
  $('#logo').css('border-color', altColor);
  $('h1').css('color', darkColor);
  $('.projects-outline').css('border-color', lightColor);
  $('.projects-outline').css('border-width', '3px');
}



$(function(){

    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        $('.menu-content li a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
            }
        });

});

function toggleColorOptions(){
$("#make-pretty-options li").toggle("slow", "swing");
}

toggleColorOptions(); // hide the color options initially

$("#make-pretty-btn").on("click", toggleColorOptions);





/* The blue scheme
Dark #1D3461
Medium #1F487E
Light 6290C8
Alt #EDB183
*/

/*
The green scheme
Dark 749C75
Light E9D985
Alt D2A1B8
*/

/*
Purple scheme
Dark 372549
Light B75D69
Alt EACDC2
*/

/*
Pop colors
EE6352
EB5E55
*/












