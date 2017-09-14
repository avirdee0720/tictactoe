var currentPlayer = 'X';
var count = 0;

$('.box1').on('click', function (event) {
	$('.box1').html(currentPlayer);
	swapPlayers();
	count++;
	checkWinner();
});

$('.box2').on('click', function (event) {
	$('.box2').html(currentPlayer);
	swapPlayers();
	count++;
	checkWinner();
});

$('.box3').on('click', function (event) {
	$('.box3').html(currentPlayer);
	swapPlayers();
	count++;
	checkWinner();
});

$('.box4').on('click', function (event) {
	$('.box4').html(currentPlayer);
	swapPlayers();
	count++;
	checkWinner();
});

$('.box5').on('click', function (event) {
	$('.box5').html(currentPlayer);
	swapPlayers();
	count++;
	checkWinner();
});

$('.box6').on('click', function (event) {
	$('.box6').html(currentPlayer);
	swapPlayers();
	count++;
	checkWinner();
});

$('.box7').on('click', function (event) {
	$('.box7').html(currentPlayer);
	swapPlayers();
	count++;
	checkWinner();
});

$('.box8').on('click', function (event) {
	$('.box8').html(currentPlayer);
	swapPlayers();
	count++;
	checkWinner();
});

$('.box9').on('click', function (event) {
	$('.box9').html(currentPlayer);
	swapPlayers();
	count++;
	checkWinner();
});

$('.clear').on('click', function (event) {
	$('.box').html("");
	
});

$('.clear').on('click', function (event) {

	$('h1').html('TicTacToe');
	
});

function swapPlayers() {
	if (currentPlayer === 'X') {
		currentPlayer = '0';
	} else {
		currentPlayer = 'X';
	}
}

 function displayWinner(winner) {
 	 $('h1').html('Player ' + winner + ' is the winner!');
}

function checkWinner() {
	var $boxes = $('.box');

	
	if ($boxes.eq(0).html() === currentPlayer &&  // checks if boxes 1,2,3 match
    $boxes.eq(1).html() === currentPlayer &&
    $boxes.eq(2).html() === currentPlayer) {
	    winner = currentPlayer; 
		displayWinner(winner);
	}

	else if ($boxes.eq(3).html() === currentPlayer && // checks if boxes 4,5,6 match
    $boxes.eq(4).html() === currentPlayer && 
    $boxes.eq(5).html() === currentPlayer) {
	    winner = currentPlayer; 
		displayWinner(winner);
	}

	else if ($boxes.eq(6).html() === currentPlayer && // checks if boxes 7,8,9 match
    $boxes.eq(7).html() === currentPlayer && 
    $boxes.eq(8).html() === currentPlayer) {
	    winner = currentPlayer; 
		displayWinner(winner);
	}

	else if ($boxes.eq(0).html() === currentPlayer && // checks if boxes 1,4,7 match
    $boxes.eq(3).html() === currentPlayer && 
    $boxes.eq(6).html() === currentPlayer) {
	    winner = currentPlayer; 
		displayWinner(winner);
	}

	else if ($boxes.eq(1).html() === currentPlayer && // checks if boxes 2,5,8 match
    $boxes.eq(4).html() === currentPlayer && 
    $boxes.eq(7).html() === currentPlayer) {
	    winner = currentPlayer; 
		displayWinner(winner);
	}

	else if ($boxes.eq(2).html() === currentPlayer && // checks if boxes 3,6,9 match
    $boxes.eq(5).html() === currentPlayer && 
    $boxes.eq(8).html() === currentPlayer) {
	    winner = currentPlayer; 
		displayWinner(winner);
	}

	else if ($boxes.eq(0).html() === currentPlayer && // checks if boxes 1,5,9 match
    $boxes.eq(4).html() === currentPlayer && 
    $boxes.eq(8).html() === currentPlayer) {
	    winner = currentPlayer; 
		displayWinner(winner);
	}

	else if ($boxes.eq(2).html() === currentPlayer && // checks if boxes 3,5,7 match
    $boxes.eq(4).html() === currentPlayer && 
    $boxes.eq(6).html() === currentPlayer) {
	    winner = currentPlayer; 
		displayWinner(winner);   
	} 
	else if (count === 9){
		$('h1').html('Draw!');
	 }    
}





