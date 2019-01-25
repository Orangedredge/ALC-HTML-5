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

function game(){
	var x = 0 
	var y = 0
}



