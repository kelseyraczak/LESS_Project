/**
* @author Kelsey Raczak
*/

$(document).ready(function(){
	
	var headerTag = $('header h1').get();
	TweenLite.to(headerTag, 5,{left: 400, onComplete: addText});
	
	function addText() {
		$('header h1').append(" made it");
	}
	
	$("nav a").click(function(e) {
	//alert($(this).html().toLowerCase());
	var txtName = ($(this).html().toLowerCase());
	
	 $.get("content/" + txtName + ".txt", function(data){
		 $('#content').html(data);
		 });
		
	});

	
});
