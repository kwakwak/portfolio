$(document).ready(function(){


	function changeBG(name){
		var parts = name.split('/');
    	name = parts[parts.length-1];
		$("#mainImg").attr('src','pictures/'+name)
	};

	var pageMax = 5;
	var imgNum = 20;

	var x = 0;
	var y = pageMax;
	var z = Math.floor(pageMax/2);
	var centerImg = z;

	$('.tumb').slice(pageMax).hide();

	function tumborder(imgBorder){


		$("#tumb-imgs").find("img").removeClass("selectedTumb");
		$("#tumb-imgs").find("img").eq(imgBorder).addClass("selectedTumb");
	    changeBG($("#tumb-imgs").find("img").eq(imgBorder).attr('src'));
	} ;

	tumborder(x+centerImg);

	function next(){
		if (x!=imgNum-pageMax && z>=centerImg) {
			$("#tumb-imgs").find("img").eq(x).hide();
			x++;
			$("#tumb-imgs").find("img").eq(y).show();
			y++;
			tumborder(x+z);
		} else if (x+z!=imgNum-1) {
			z++;
			tumborder(x+z);
		};

		
	};

	function prev(){
		if (y!=pageMax && z<=centerImg) {
				$("#tumb-imgs").find("img").eq(y-1).hide();
				y--;	
				$("#tumb-imgs").find("img").eq(x-1).show();
				x--;

		tumborder(x+z);
	
		} else if (x+z!=0) {
				z--;
				tumborder(x+z);
		};
	};

// Bind functions:


	$('a.prev').on('click',prev);
	$('a.next').on('click',next);

	$('#mainImg').on('click',next);

	$('body').keydown(function(e) {
	  if(e.keyCode == 37) { // left
		prev();
	  }
	  else if(e.keyCode == 39) { // right
		next();
	  }
	});

});