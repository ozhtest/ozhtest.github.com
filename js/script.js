var variation = 200;
var speed = 3000;

$(document).ready(function(){ 
	go();
});

function go() {
	
	shrink( $('#ozh') );
}

function shrink( el ) {
	el.animate( { width:'-='+variation, height:'-='+variation, opacity: 0.25 }, 3000, function() { grow( el ); } );
}

function grow( el ) {
	el.animate( { width:'+='+variation, height:'+='+variation, opacity: 1 }, 3000, function() { rnd(); shrink( el ); } );
}

function rnd() {
	speed = Math.floor((Math.random()*5000)+500);
	variation = Math.floor((Math.random()*180)+20);
}