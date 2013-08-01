$(document).ready(function(){
	$('img').on('mouseover',function(){

		var name = $(this).attr('src');
    	changeBG(name);
	});

	function changeBG(name){
		var parts = name.split('/');
    	name = parts[parts.length-1];
		$('body').css('background-image','url(pictures/'+name +')')
	};

	var pageMax = 2;
	var imgNum = 20;

	var x = 0;
	var y = pageMax;

	$('li').slice(pageMax).hide();


	changeBG($('li').find(":visible").first().attr('src'));

	function next(){
		if (x!=imgNum-pageMax) {
			$('li').eq(x).hide();
			x++;
		} ;	
		if (y!=imgNum) {
			$('li').eq(y).show();
			y++;
		} ;
	changeBG($('li').find(":visible").first().attr('src'));
	};

	

	function perv(){
		if (y!=pageMax) {
			$('li').eq(y-1).hide();
			y--;
		} ;	
		if (x!=0) {
			$('li').eq(x-1).show();
			x--;
		} ;	
	changeBG($('li').find(":visible").first().attr('src'));
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