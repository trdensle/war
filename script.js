$(document).ready(function() {

	//what does this do?  Converts the number to a string so you can view 11, 12 and 13s as Jack, Queen, King.


	var convert_value_to_string = function(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}



	//what does this do?

// creates 52 cards, 13 cards into each suit


	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	};
	
	//what does this do?




	var shuffle = function(array) { 
		var copy = [];
		var n = array.length; 
		var i; 
		while (n) { i = Math.floor(Math.random() * array.length);  
			if (i in array) { 
		 		copy.push(array[i]); 
		 		delete array[i]; 
		 		n--; 
		 	} 
		} 
		return copy; 
	}
	
	//Now call the shuffle function and save the result of what shuffle returns into your deck variable
	
	var cards_player_1 = [];
	var cards_player_2 = [];

	deck = shuffle(deck);

	// write a function called deal that will evently divide the deck up between the two players

	var deal = function(array) {
		for(var i = 0; i < array.length; i+2) {
			cards_player_1.push(array[i])
			cards_player_2.push(array[i + 1])
		}

	};

	deal(deck);
	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	var war = function(cards_player_1,cards_player_2){
		if (cards_player_1 > cards_player_2) {
			return "Player 1 wins!";
		}
		if (cards_player_1 < cards_player_2) {
			return "Player 2 wins!";
		}

		else {
			return false
		}
	}
	
	var advance = function(){
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	var play = function(){
		var winner = war(cards_player_1[0], cards_player_2[0]);

		if (winner === "Player 1 wins") {
			cards_player_1.push(cards_player_2.shift());
			cards_player_1.push(cards_player_1).shift());
		}
		else if (winner === "Player 2 wins") {
			cards_player_2.push(cards_player_1.shift());
			cards_player_2.push(cards_player_2.shift());
		}

		else {
			cards_player_1.push("Player 1 wins");
			cards_player_2.push("Player 2 wins");
		}


		
		
		advance();
	}
	

	advance();
	
	$(".btn").click(function() {
		play();
	});
});
