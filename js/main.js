$(document).ready(function(){


	function changeBG(name){
		var parts = name.split('/');
    	name = parts[parts.length-1];
		$('body').css('background-image','url(pictures/'+name +')')
	};

	var pageMax = 5;
	var imgNum = 20;

	var x = 0;
	var y = pageMax;
	var z = 2;

	$('img').slice(pageMax).hide();

	function tumborder(imgBorder){


		$("div").find("img").css("border-width","medium");
		$("div").find("img").eq(imgBorder).css("border-width","15px");
	    changeBG($("div").find("img").eq(imgBorder).attr('src'));
	} ;

	tumborder(x+2);

	function next(){
		if (x!=imgNum-pageMax && z>=2) {
			$("div").find("img").eq(x).hide();
			x++;
			$("div").find("img").eq(y).show();
			y++;
			tumborder(x+z);
		} else if (x+z!=imgNum-1) {
			z++;
			tumborder(x+z);
		};

		
	};

	function perv(){
		if (y!=pageMax && z<=2) {
				$("div").find("img").eq(y-1).hide();
				y--;	
				$("div").find("img").eq(x-1).show();
				x--;

		tumborder(x+z);
	
		} else if (x+z!=0) {
				z--;
				tumborder(x+z);
		};
	};

// Bind functions:

	$('#perv').on('click',perv);
	$('#next').on('click',next);

	$('body').keydown(function(e) {
	  if(e.keyCode == 37) { // left
		perv();
	  }
	  else if(e.keyCode == 39) { // right
		next();
	  }
	});

});