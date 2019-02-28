//alert('test')
var x = 0;
var y = 0;
var px = 0;
var py = 0;
var dev = 0;
var inn = false;
const nothing = "nothing"
var alive = true;
var boss
//var move = true;
//var pmove = false;
//var mwest = false;
//var msouth = fasle;
//var mnorth = false;
///var meast = flase;
//iteam variables which store the iteams location
//sword
var zword = false;
var swordx = 0;
var swordy = -1;


//book
var bookx = -2;
var booky = 1;
var book = false;

//combat related sutff like health and magic that aplly to the player
var health = 20;
var magic = 20;
var power = 5;
var level = 1;

//these are combat related varables
var turnorder = 0;





	//this detels enemey location and if you have fought them
	var enemeyL={
		slime1:0,
		slime2:0,
		slimeB:false,

	}
	//these are varables relating to an enemey
	var slime ={
		health:10,
		attack: 1,
		slime: "slime",
	}




// invintory testing
var invintory = ["nothing","nothing","nothing","nothing","nothing","nothing"]
var inv ={
	nothing:0,
	nothing:0,
	cloth:0,

}

function check(x,y){
	//after a location update this function ask and updates your location
	var check = (prompt("what would you like to do"))
	//basic movment
	if (check == "north" || check == "n"){
		y += 1;
		Lc(x,y);
	}else if(check == "w" || check == "west"){
		x -= 1;
		Lc(x,y);
		
	}else if(check == "south" || check == "s"){
		y -= 1;
		Lc(x,y);
	}else if(check == "east" || check == "e"){
		x += 1;
		Lc(x,y);
	}else if(check == "inventory" || check == "iteams"){
		var i
		for (i = 0; i < 6; i++) { 
			alert(invintory[i])
		  }
		Lc(x,y);
	
	}else if(check == "talk" && x == 9 && y == -2){
		alert("vilager: so you good at fighing well i have a proposal for you.\n a monster has been teoirising are village to the south east if you go out and take it out for use we will reward you hansomely plus as long as you agree to fight the monster we will allow you free accses to the  inn in town");
		check = (prompt("will you take up his offer"));
		alert(check);
		if (check == "yes" || check == 0){
			alert("the vilagers hand you a pass to get you into the inn for free you most now fight the monster which is one south two east");
			inn = true;

		}else{
			alert("oh well i guess no harm in asking you");
		}
		
		Lc(x,y);
		
	}else if(check == "end"){
		alert("game ended");
	




	//more advanced checks
	}else if(check == "devoption"){
		dev = 1;
		Lc(x,y);
	}else if (check == "set level" && dev == 1){
		level = prompt("what your level be");
		
		Lc(x,y)
	//iteam pick up
}else if (check == "set xy" && dev == 1){
		x = prompt("what will x be");
		y = prompt("what will y be");
		Lc(x,y)
	//iteam pick up
}else if (check == "pick up sword" && swordx == x && swordy == y){
	let i;
	let j;
	for (i = 0;i <6; ++i){
		if (invintory[i] == "sword"){
			alert("you allready have the sword");
			zword =true;
			i += 6;
			Lc(x,y);
			
		}else{
			zword = false;
		}
			
		//alert("this is a test")
		}
		//alert("this is a test2")
	if (zword == false){
		let i = 0;
		for (i = 0; i <6; ++i){
		//	alert("this is test 3")
			if (invintory[i] == "nothing"){
				//alert("this is test 4")
				invintory[i] = "sword"
				i += 6
				zword = true;
				
				alert("you picked up the sword")
				Lc(x,y);
				//alert("test 6")
			}else{
				
				
			}
		}
	}


	}else if (check == "pick up book" && bookx == x && booky == y){
		var i;
		var j;
		for (i = 0;i <6; ++i){
			if (invintory[i] == "book"){
				alert("you allready have the book");
				book =true;
				i += 6;
				Lc(x,y);
				
			}else{
				book = false;
			}
				
			//alert("this is a test")
			}
			//alert("this is a test2")
		if (book == false){
			var i = 0;
			for (i = 0; i <7; ++i){
				//alert("this is test 3")
				if (i == 6 ){
					alert("not enough room")
				}
				if (invintory[i] == "nothing"){
					//alert("this is test 4")
					invintory[i] = "book"
					i += 6
					
					alert("you picked up the book")
					Lc(x,y);
					alert("test 6")
				}else{
					//alert("you have no space");
					//Lc(x,y);
					//alert ("test 5")
				}
			}
		}
		
		
	
	
	check(x,y);
	}else{
		alert("you cant do that");
		Lc(x,y);
	}

}










// this functino is used for checking location
function Lc(x,y){
	
	if (dev == 1){
		alert(x);
		alert(y);

	}
	

	//this is area that checks your loctaion
	// This is the cave area
	if (x == 0 && y == 0){
		px = x;
		py = y;
		alert("you are in the cave and can go east west and south also there may be an exit to your east")
		check(x,y);



	}else if(x == -1 && y == 0){
		
		px = x;
		py = y;
		alert("you are in the cave and can go east, west also there may be an exit to your east")
		check(x,y);
		
		



	}else if(x == 0 && y == -1){
		px = x;
		py = y;
		if (zword == false){
			alert("you enter a small area with a rusted sword on the ground and may move to the north and pick up sword");
		
		}else{
			alert("you enter a small area and may move to the north");
		}

		check(x,y);




	}else if(x == 1 && y == 0){
		px = x;
		py = y;
		alert("getting closer to exit you may move east and west")
		check(x,y);




	}else if(x == -2 && y == 0){
		px = x;
		py = y;
		alert("you  are able to move east and north")
		check(x,y);
	}else if(x == -2 && y == 1){
		px = x;
		py = y;
		
		var i;
		for (i = 0; i < 6; i++) { 
			if (invintory[i] == "book"){




				alert("nothing to see in here it is a dead end you may go south");

				check(x,y);

			}else{



				alert("it is dead end but there is a book lying on the ground ");



				check(x,y);

			}
				
			  
		
	}
		
	}else if(x == 2 && y == 0){
		px = x;
		py = y;
		switch (enemeyL.slime1){
			case 1:
			alert("you may go south and west you can now see light coming to your south");
			check(x,y);
			break;

			case 0:
			alert("a group of slimes come out to attacks you   ");
			slime.health = 10;
			turnorder = 0;

			Combat(slime.slime);
			break;
			default:
			alert("computer: you have broke my code and i dont know what to do");
			alert(enemeyL.slime1)
		
			break;
		}
		
		
	}else if(x == 2 && y == -1){
		px = x;
		py = y;
		alert("you can now see thee end of the cave to your south");
		check(x,y);




		
	}else if(x == 2 && y == -2){
		px = x;
		py = y;
		switch (enemeyL.slime2){
			
			case 1:
			alert("you exit the cave you see a house to you west and plains to your east");
			check(x,y);
			break;

			case 0:
			alert("befor you leave a group of slimes come out to attacks you   ");
			alert(enemeyL.slime2);
			slime.health = 10;
			turnorder = 0;

			Combat(slime.slime);
			break;
			default:
			alert("computer: you have broke my code and i dont know what to do");
			alert(enemeyL.slime2)
		
			break;
		}
		check(x,y);




		
	}else if(x == 1 && y == -3){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 3 && y == -3){
		px = x;
		py = y;
		alert("you move closer to the plains they are now just to you east \n you may move east and west");
		check(x,y);




// this is the first layer of the plains
//so x = 4 in plains
		
	}else if(x == 4 && y == 0){
		px = x;
		py = y;
		alert("you are in the top coner of the plains and are able to move south and east");
		check(x,y);




		
	}else if(x == 4 && y == -1){
		px = x;
		py = y;
		alert(" you may move east north and south");
		check(x,y);




		
	}else if(x == 4 && y == -2){
		px = x;
		py = y;
		alert(" you may move east north and south");
		check(x,y);




		
	}else if(x == 4 && y == -3){
		px = x;
		py = y;
		alert("you may move east north and south");
		check(x,y);




		
	}else if(x == 4 && y == -4){
		px = x;
		py = y;
		alert("you are in bottom of plains may move east north");
		check(x,y);




		//this is layer two of the plains
		//or x = 5 in plains
	}else if(x == 5 && y == 0){
		px = x;
		py = y;
		alert("you are at the top of the plains and can move in any south east and west ");
		check(x,y);




		
	}else if(x == 5 && y == -1){
		px = x;
		py = y;
		alert("eyou can move in any direction");
		check(x,y);




		
	}else if(x == 5 && y == -2){
		px = x;
		py = y;
		alert(" you can move in any direction");
		check(x,y);




		
	}else if(x == 5 && y == -3){
		px = x;
		py = y;
		alert("you can move in any direction");
		check(x,y);




		//this is layer 3 of plains
		//or x = 6
	}else if(x == 6 && y == 0){
		px = x;
		py = y;
		alert("exit to plains east you are at the top of the plains and can move south east and west");
		check(x,y);




		
	}else if(x == 6 && y == -1){
		px = x;
		py = y;
		alert("exit to plains east you can move in any direction");
		check(x,y);




		
	}else if(x == 6 && y == -2){
		px = x;
		py = y;
		alert("exit to plains east you can move in any direction");
		check(x,y);




		
	}else if(x == 6 && y == -3){
		px = x;
		py = y;
		alert("exit to plains east you can move in any direction");
		check(x,y);




		
	}else if(x == 6 && y == -4){
		px = x;
		py = y;
		alert("you are at the bottom of the plains and can move north east and west");
		check(x,y);




		//layer 4 or x = 7
	}else if(x == 7 && y == 0){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 7 && y == -1){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 7 && y == -2){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 7 && y == -3){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 7 && y == -4){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 8 && y == -2){
		px = x;
		py = y;
		alert("you exit the plains you are now in a town the viligers acomidate and ask you if you are skilled at combat and say if you are to go talk to the at town center\n the inn is just east and then north to where you are now \n you may also be able to talk to viligers in the town square just east \n you may move west(to the plains)\n or east to town center");

		check(x,y);




		
	}else if(x == 9 && y == -2){
		px = x;
		py = y;
		alert("you enter in the center of town you can move in any direction you may also talk to the vilagers");
		check(x,y);




		
	}else if(x == 9 && y == -3){
		px = x;
		py = y;
		alert("you are still in town you may move north south and east");
		check(x,y);




		
	}else if(x == 9 && y == -1){
		px = x;
		py = y;
		if (inn == true){
			if (prompt("would you like to sleep in the inn \n yes or no") == "yes"){
				health = 20;
				alert("you health is now at max"); 
			}else{
				alert("you do not sleep in the inn if you want to just leave and come back");
			}
		}
		alert("you may move south to the village center");

		check(x,y);




		
	}else if(x == 10 && y == -2){
		px = x;
		py = y;
		alert("you are still in the town the monster is to your south");
		check(x,y);




		
	}else if(x == 10 && y == -3){
		px = x;
		py = y;
		alert("the monster is now just to your east you may move east west and north");
		check(x,y);




		
	}else if(x == 9 && y == -3){
		px = x;
		py = y;
		alert("town monster is to the east you may move south east and north");
		check(x,y);




		
	}else if(x == 11 && y == -3){
		px = x;
		py = y;
		if (enemeyL.slimeB == false){
			alert("The Towns menace comes out to fight");
			slime.attack = 4;
			slime.health = 20;
			turnorder = 0;
			Combat(slime.slime);

		}else{
			slime.attack = 1;
			alert("you have beat this game i dont have anywhere else so if you type in devoption you will be given accsses to commands set xy and set level feel free to mess around if you ");

			check(x,y);
		}
		alert("you sould not see this alert");
		check(x,y);




		
	}else if(x == 2 && y == -1){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 2 && y == -1){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 2 && y == -1){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 2 && y == -1){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 2 && y == -1){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else{

	
	
		
	









	
	
	alert("Can not do that command");
	x = px;
	y = py;
	Lc(x,y);
	}
}













var currentE = ""
//This is the check of combat
if (alive == true){
	function combatcheck(enemeyhealth){
		if (health <= 0){
			Death();
		}
		
		var combatcheck = prompt("what would you like to do you may attack and nothing" );
		if(combatcheck == "nothing"){
			turnorder = 1;
			Combat(currentE);
		}

		if (combatcheck == "attack"){
			
			
			enemeyhealth -= 4 *(level * 1.25);
			if (currentE == "slime"){
				slime.health = enemeyhealth;
			}
			alert("you attack and leave the slime at "+enemeyhealth);
			
			
			if (enemeyhealth <= 0){
				
				if (px == 2 && py == 0){
					enemeyL.slime1 = 1;
					Lc(px,py);
					
				}else if(px == 2 && py == -2){
					enemeyL.slime2 = 1;
					Lc(px,py);
					
				}else if(px == 11 && py == -3){
					enemeyL.slimeB = true;
					Lc(px,py);
					
				}else{
					alert("you have just broke my code");
				}
				
				
				
			
			

			}else{
				
				turnorder = 1;
				
				Combat(currentE);
			}
			
		
		}else{
			alert("you can not do that");
			Combat(currentE)

		}

	}
}
if (alive == true){
	function Combat(enemey){
		
		if (turnorder == 0){
			
			if(enemey == slime.slime){
				
				
				currentE = "slime";
				
				combatcheck(slime.health);
			}
				

		}else if (enemey == slime.slime && turnorder == 1){
			
			var enemeyrandom = Math.floor(Math.random()* 4);
			//if (enemeyrandom <= 2){
				
				
			health -= enemeyrandom * slime.attack;
			alert("slime attacks you and leaves you at"+health);
			turnorder = 0;
			Combat(currentE);
			//}
			

		}
		
	}

}

function Death(){
	alert("you are super dead");
	x = 0;
	y = 0;
	px = 0;
	py = 0;
	invintory[0] = "nothing";
	invintory[1] = "nothing";
	alert("rip");
	alert("refresh page");
	alive = false;
	Killgame();

}
function Killgame(){
	Killgame2();
}
function Killgame2(){
	Killgame();
}
var rungame = false;
while(!rungame){
 if(confirm("Would you like to \nplay the game")){
	const name = prompt("what would you like your name to be");
	alert ("your name is "+ name );
	rungame = true;
	Lc(0,0);

	
	
 }else{
	alert("Ok");
 }
	
  
  
}

//switch (){
//	case:
//	break;
//  	default:
//}




//Math.floor(Math.random(