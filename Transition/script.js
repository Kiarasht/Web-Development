$(document).ready(function(){

function change(which, init_value, expand_to, dimension){
	var element = $(which);
	var ani_args = {};

	if( element.css(dimension)==init_value ){
		ani_args[dimension] = expand_to;
		element.animate(ani_args, 500);
	}
	else{
		ani_args[dimension] = init_value;
		element.animate(ani_args, 500);
	}
}
$("#expand_this li:nth-of-type(1)").click(function(){
	var ex_to = $("#expand_this").get(0).scrollHeight+"px";
	change("#expand_this", "20px", ex_to, "height");
});
$("#pop_out").click(function(){
	change("#pop_out", "20px", "100px", "height");
	change("#pop_out", "10px", "250px", "bottom");
});

});