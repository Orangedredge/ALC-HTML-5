//alert('test')
var x = 0;
var y = 0;
var px = 0;
var py = 0;
var dev = 0;
//iteam variables which store the iteams location
//sword
var zword = false
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
	var i;
	var j;
	for (i = 0;i <6; ++i){
		if (invintory[i] == "sword"){
			alert("you allready have the sword");
			zword =true;
			i += 6;
			Lc(x,y);
			
		}else{
			zword = false;
		}
			
		alert("this is a test")
		}
		alert("this is a test2")
	if (zword == false){
		var i = 0;
		for (i = 0; i <6; ++i){
			alert("this is test 3")
			if (invintory[i] == "nothing"){
				alert("this is test 4")
				invintory[i] = "sword"
				i += 6
				zword = true;
				
				alert("you picked up the sword")
				Lc(x,y);
				alert("test 6")
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
				
			alert("this is a test")
			}
			alert("this is a test2")
		if (book == false){
			var i = 0;
			for (i = 0; i <7; ++i){
				alert("this is test 3")
				if (i == 6 ){
					alert("not enough room")
				}
				if (invintory[i] == "nothing"){
					alert("this is test 4")
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
			alert("you enter a small area with a rusted sword on the ground and may move to the north");
		
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
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 4 && y == -1){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 4 && y == -2){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 4 && y == -3){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 4 && y == -4){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		//this is layer two of the plains
		//or x = 5 in plains
	}else if(x == 5 && y == 0){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 5 && y == -1){
		px = x;
		py = y;
		alert("you can move in any direction exit to east south");
		check(x,y);




		
	}else if(x == 5 && y == -2){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 5 && y == -3){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		//this is layer 3 of plains
		//or x = 6
	}else if(x == 6 && y == 0){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 6 && y == -1){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 6 && y == -2){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 6 && y == -3){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
		check(x,y);




		
	}else if(x == 6 && y == -4){
		px = x;
		py = y;
		alert("you can now see th end of the cave to your south");
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




		
	}else if(x == 2 && y == -3){
		px = x;
		py = y;
		alert("you exit ");
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

function combatcheck(enemeyhealth){
	
	var combatcheck = prompt("what would you like to do" );
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
			}else{
				alert("you have just broke my code");
			}
			
			
			


		}else{
			
			turnorder = 1;
			
			Combat(currentE);
		}
		
	
	}else{
		alert("can not do that star fox");
		Combat(currentE)

	}

}


function Combat(enemey){
	
	if (turnorder == 0){
		
		if(enemey == slime.slime){
			
			currentE = "slime";
			
			combatcheck(slime.health);
		}
			

	}else if (enemey == slime.slime && turnorder == 1){
		
		var enemeyrandom = Math.floor(Math.random()* 4);
		//if (enemeyrandom <= 2){
			
			
		health -= enemeyrandom;
		alert("slime attacks you and leaves you at"+health);
		turnorder = 0;
		Combat(currentE);
		//}
		

	}
	
}






if (confirm("Would you like to \nplay the game")) {
	alert("you wake up in a cave,\n you have no memory and nothing but cloth on \n you can feel wind coming to your east but it might be good to explore some more \n your opion are east/e, west/w, south/s,north/n, inventory/iteam");
    Lc(x,y);
  } else {
    alert('OK \ if you wish to play again');
  }

//switch (){
//	case:
//	break;
//  	default:
//}




//Math.floor(Math.random(