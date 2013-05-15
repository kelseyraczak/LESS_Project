/**
* @author Kelsey Raczak
*/$(document).ready(function(){function t(){$("header h1").append(" made it")}var e=$("header h1").get();TweenLite.to(e,5,{left:400,onComplete:t});$("nav a").click(function(e){var t=$(this).html().toLowerCase();$.get("content/"+t+".txt",function(e){$("#content").html(e)})})});