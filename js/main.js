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

	$('img').slice(pageMax).hide();

	function tumborder(imgBorder){


		$("div").find("img").css("border-width","medium");
		$("div").find("img").eq(imgBorder).css("border-width","15px");
	    changeBG($("div").find("img").eq(imgBorder).attr('src'));
	} ;

	tumborder(x+2);

	function next(){
		if (x<imgNum-pageMax) {
			$("div").find("img").eq(x).hide();
			x++;
			tumborder(x+2);
		} else if (x!=imgNum-3)  {
		x++;
		tumborder(x+2);	

		}
		if (y!=imgNum) {
			$("div").find("img").eq(y).show();
			y++;
		} ;

		
	};

	

	function perv(){
		if (y!=pageMax) {
			$("div").find("img").eq(y-1).hide();
			y--;
		} ;	
		if (x!=0) {
			$("div").find("img").eq(x-1).show();
			x--;
		} ;	

	tumborder(x+2);

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