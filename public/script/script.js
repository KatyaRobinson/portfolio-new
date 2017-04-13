
/*$(document).ready(changeColors('#666666', '#999999'));
 $(document).ready(adjustPageWidth);*/

var colors = {
  green: {
    baseColor: "#666666",
    darkColor: "#E9D985",
    lightColor: "#749C75",
    popColor: "#D2A1B8"
  },
  blue: {
    baseColor: "#666666",
    darkColor: "#6290C8",
    lightColor: "#1F487E",
    popColor: "#EDB183"
  },
  purple: {
    baseColor: "#666666",
    darkColor: "#B75D69",
    lightColor: "#372549",
    popColor: "#EACDC2"
  },
  original: {
    baseColor:"#666666",
    darkColor: "#999999",
    lightColor: "#999999",
    popColor: "#999999"
  }
};



setColorPageScheme();

function setColorPageScheme(){
    var $chosenColorScheme = "";
  //get the most recently chosen color scheme from local storage
  if(localStorage.getItem("chosenColorScheme")) {
    $chosenColorScheme = localStorage.getItem("chosenColorScheme"); 
    console.log("the chosen scheme is " + $chosenColorScheme);
    } else {
       $chosenColorScheme = "original";
        console.log("the chosen scheme is " + $chosenColorScheme);
    }


    switch($chosenColorScheme){
      case "blue": setColorScheme(colors.blue.baseColor, colors.blue.darkColor, colors.blue.lightColor, colors.blue.popColor, "blue");
          break;

      case "green": setColorScheme(colors.green.baseColor, colors.green.darkColor, colors.green.lightColor, colors.green.popColor, "green");
      break;

      case "purple": setColorScheme(colors.purple.baseColor, colors.purple.darkColor, colors.purple.lightColor, colors.purple.popColor, "purple");
      break;

      default:
      resetColorsToOriginal();
      //setColorScheme(colors.original.baseColor, colors.original.darkColor, colors.original.lightColor, colors.original.popColor, "original");

    }
    console.log("setColorPageScheme called");
}

function setColorScheme(base, dark, light, pop, scheme){
  changeColors(base, dark, light, pop);
    $(this).css('border', '1px solid yellow');
    localStorage.setItem("chosenColorScheme", scheme);
    var $chosenColorScheme = localStorage.getItem("chosenColorScheme");
     console.log($chosenColorScheme);

     console.log("setColorScheme called");
}


function changeColors(baseColor, darkColor, lightColor, altColor){
  
  setColors(baseColor, darkColor, lightColor, altColor);
  $("#make-pretty-btn").css('background-color', baseColor);
  $("#make-pretty-btn").text('Hide color options');
  $("#make-pretty-options li").css('border', 'none');
  $("#make-pretty-options-sidebar li").css('border', '1px solid white');
  $('img').css('filter', 'grayscale(0%)');
  $('#logo').css('border-color', altColor);
  $('h1').css('color', darkColor);
  $('.projects-outline').css('border-color', lightColor);
  $('.projects-outline').css('border-width', '3px');
  $('.glyphicon').css('color', lightColor);
  $('.tab-title').find('a').css('color', lightColor);
  $('.about-pic').css('border-color', lightColor);
  console.log("changeColors called");
}


function resetColorsToOriginal(){
   var  darkerColor = colors.original.darkColor,
        lighterColor = colors.original.lightColor,
        popColor = colors.original.popColor,
        baseeColor = colors.original.baseColor;
  changeColors(baseeColor, darkerColor, lighterColor, popColor);
  $('img').css('filter', 'grayscale(100%)');
  $("#make-pretty-btn").css('background-color', '#C6392F');
  $("#make-pretty-btn").text('Sprinkle some color');
 //$("#footer").css('background-color', darkerColor);
 console.log("resetColorsTiOriginal called");
}





 $(document).ready(function(){
  //resetColorsToOriginal();
  adjustPageWidth();
  
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




 function setColors(baseColor, darkColor, lightColor, altColor){
  
  $('.color-base').each(function(){
   // $(this).css('transition', '0.1s');
    $(this).css('background-color', baseColor);

  });

  $('.color-dark').each(function(){
  	//$(this).css('transition', '0.1s');
  	$(this).css('background-color', darkColor);

  });

    $('.color-light').each(function(){
  //  $(this).css('transition', '0.1s');
  	$(this).css('background-color', lightColor);
  });

    $('.color-alt').each(function(){
   // 	$(this).css('transition', '0.1s');
  	$(this).css('background-color', altColor);
  });

}


$("#blue").click(function(){
    baseeColor = colors.blue.baseColor;
    darkerColor = colors.blue.darkColor;
    lighterColor = colors.blue.lightColor;
    popColor = colors.blue.popColor;
    scheme = "blue";
     setColorScheme(baseeColor, darkerColor, lighterColor, popColor, scheme);
     $(this).css('border', '2px solid yellow');

});


$("#green").click(function(){
    baseeColor = colors.green.baseColor;
    darkerColor = colors.green.darkColor;
    lighterColor = colors.green.lightColor;
    popColor = colors.green.popColor;
    scheme = "green";
    setColorScheme(baseeColor, darkerColor, lighterColor, popColor, scheme);
    $(this).css('border', '2px solid yellow');
});

$("#purple").click(function(){

    baseeColor = colors.purple.baseColor;
    darkerColor = colors.purple.darkColor;
    lighterColor = colors.purple.lightColor;
    popColor = colors.purple.popColor;
    scheme = "purple";
    setColorScheme(baseeColor, darkerColor, lighterColor, popColor, scheme);
    $(this).css('border', '2px solid yellow');
});

$("#original").click(function(){
  resetColorsToOriginal();
  $(this).css('border', '2px solid yellow');
   localStorage.setItem("chosenColorScheme", "original");
   var $chosenColorScheme = localStorage.getItem("chosenColorScheme");
    console.log($chosenColorScheme);
});




$(function(){

    var url = window.location.pathname, 
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        $('.menu-content a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).find("li").addClass('menu-list-active');
            }
        });

});

function toggleColorOptions(){
$("#make-pretty-options li").toggle("slow", "swing");

}

$("#make-pretty-btn").text('Sprinkle some color');
toggleColorOptions(); // hide the color options initially


$("#make-pretty-btn").on("click", function(){
  toggleColorOptions();
  $(this).toggleClass('clicked');
  if($(this).hasClass('clicked')){
    $(this).text('Hide color options');
  }
  else {
    $(this).text('Sprinkle some color');
  }
});






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












