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

	var x = 0;
	var max = 5;
	$('li').slice(max).hide();


	changeBG($('li').find(":visible").first().attr('src'));

	function next(){
		if (x!=5) {
			$('li').eq(x).hide();
			x++;
		} ;	
		if (max!=10) {
			$('li').eq(max).show();
			max++;
		} ;
	changeBG($('li').find(":visible").first().attr('src'));
	};

	

	function perv(){
		if (max!=5) {
			$('li').eq(max-1).hide();
			max--;
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