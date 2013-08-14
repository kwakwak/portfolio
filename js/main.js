$(document).ready(function(){

	var pageMax = 5; // Tumb pictures to display
	var imgNum = 20; // Number of pictures exist

// initial state
	var x = 0;
	var y = pageMax;
	var z = Math.floor(pageMax/2);
	var centerImg = z;

	tumborder(x+centerImg);
	$('.tumb').slice(pageMax).hide();

// change main picture
	function changeBG(name){
		var parts = name.split('/');
    	name = parts[parts.length-1];
		$("#mainImg").attr('src','pictures/'+name)
	};

// highlight selected tumb img
	function tumborder(imgBorder){
		$("div.tumb-imgs").find("img").removeClass("selectedTumb");
		$("div.tumb-imgs").find("img").eq(imgBorder).addClass("selectedTumb");
	    changeBG($("div.tumb-imgs").find("img").eq(imgBorder).attr('src'));
	} ;

// next & prev functions
	function next(){
		if (x!=imgNum-pageMax && z>=centerImg) {
			$("div.tumb-imgs").find("img").eq(x).hide();
			x++;
			$("div.tumb-imgs").find("img").eq(y).show();
			y++;
			tumborder(x+z);
		} else if (x+z!=imgNum-1) {
			z++;
			tumborder(x+z);
		};
	};

	function prev(){
		if (y!=pageMax && z<=centerImg) {
				$("div.tumb-imgs").find("img").eq(y-1).hide();
				y--;	
				$("div.tumb-imgs").find("img").eq(x-1).show();
				x--;
		tumborder(x+z);
		} else if (x+z!=0) {
				z--;
				tumborder(x+z);
		};
	};

// Show arrows on main picture

	$('a.prev').mouseover(function() {
		var image=$(this);
		image.fadeOut(200, function () {
	        image.css('background-image', 'url("img/prev.png")');
	        image.fadeIn(200);
 	 	});
	});
	$('a.next').mouseover(function() {
		var image=$(this);
		image.fadeOut(200, function () {
	        image.css('background-image', 'url("img/next.png")');
	        image.fadeIn(200);
 	 	});
	});

	$('a.prev').mouseout(function() {
	  $(this).css('background-image', 'none');
	});
	$('a.next').mouseout(function() {
	  $(this).css('background-image', 'none');
	});

// Bind next & prev functions to:

// Main img click
	$('a.prev').on('click',prev);
	$('a.next').on('click',next);
// Keyboard right&left keys
	$('body').keydown(function(e) {
	  if(e.keyCode == 37) { // left
		prev();
	  }
	  else if(e.keyCode == 39) { // right
		next();
	  }
	});
// Mousewheel:
	$('body').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            prev();
        }
        else{
            next();
        }
    });

});