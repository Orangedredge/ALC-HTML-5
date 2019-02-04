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
		if (slime.health <= 0){
			alert("you may go south and west you can now see light coming to your south");


		}else{
			alert("a group of slimes come out to attacks you   ");
			Combat(slime.slime);
		}
		
		
	}else if(x == -1 && y == 0){
		px = x;
		py = y;
		alert("");
		check(x,y);
	}else{

	
	
		
	









	
	
	alert("Can not do that command");
	x = px;
	y = py;
	Lc(x,y);
	}
}










var slime ={
	health:10,
	attack: 1,
	slime: "slime",
}

var currentE = ""

function combatcheck(enemeyhealth){
	
	var combatcheck = prompt("what would you like to do" )
	if (combatcheck == "attack"){
		
		alert("attack function runing");
		enemeyhealth -= level * 1.25;
		if (currentE == "slime"){
			slime.health = enemeyhealth;
		}
		alert(enemeyhealth);
		alert(slime.health);
		
		if (enemeyhealth <= 0){
			Lc(x,y);


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
	alert("runing combat")
	if (turnorder == 0){
		alert("turnorder = 0");
		if(enemey == slime.slime){
			
			currentE = "slime";
			alert(slime.health);
			combatcheck(slime.health);
		}
			

	}else if (enemey == slime.slime && turnorder == 1){
		
		//var enemeyrandom = Math.floor(Math.random() * 3);
		//if (enemeyrandom <= 2){
			
			
		health -= 1;
		alert(health);
		turnorder = 0;
		Combat(slime.health);
		//}
		

	}
	
}






if (confirm("Would you like to \nplay the game")) {
	alert("you wake up in a cave,\n you have no memory and nothing but cloth on \n you can feel wind coming to your east but it might be good to explore some more \n your opion are east/e, west/w, south/s,north/n, inventory/iteam");
    Lc(x,y);
  } else {
    alert('OK \ if you wish to play again');
  }

