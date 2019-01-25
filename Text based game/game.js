// single line comment

/*
multiline comment
*/



//document.write("<h1>I cant wait for <em>spring</em>!</h1>");

//alert("warning! will robinson... Warning!");

//confirm("do you like pokemon?");

//prompt("what type of pokemon do you like?");

function start(){
	var pc = prompt("what is your name");
	var check = confirm("so your name is " + pc);
	if (check){
		Game();
	}
	else{
		start();
	}

}



function Game(){
	document.write ("place holder name");


	alert("Test Text");
	tunel();

	function tunel (){
		var tunel = prompt("you wake up in a tunel you can feel wind to your east leading to an exit but it might be good to explore some more you may move to the east west and south you may also inspect your location").toLowerCase();
		if (tunel == "inspect" || tunel == "i");
			alert("you find dirt just everywhere do you pick up dirt");
			var check = confirm("do you want to pick up dirt");
			if (check){
				alert("you pick up dirt congdulations");
				tunel();
			}
			else
		if (tunel == "west" || tunel == "w");


	}
}
start();

