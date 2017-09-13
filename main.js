var currentPlayer = 'X';

$('.box1').on('click', function (event) {
	// console.log(currentPlayer);
	$('.box1').html(currentPlayer);
	swapPlayers();
});

$('.box2').on('click', function (event) {
	$('.box2').html(currentPlayer);
	swapPlayers();

});

$('.box3').on('click', function (event) {
	$('.box3').html(currentPlayer);
	swapPlayers();

});

$('.box4').on('click', function (event) {
	$('.box4').html(currentPlayer);
	swapPlayers();
});

$('.box5').on('click', function (event) {
	$('.box5').html(currentPlayer);
	swapPlayers();
});

$('.box6').on('click', function (event) {
	$('.box6').html(currentPlayer);
	swapPlayers();
});

$('.box7').on('click', function (event) {
	$('.box7').html(currentPlayer);
	swapPlayers();
});

$('.box8').on('click', function (event) {
	$('.box8').html(currentPlayer);
	swapPlayers();
});

$('.box9').on('click', function (event) {
	$('.box9').html(currentPlayer);
	swapPlayers();

});

function swapPlayers() {
	if (currentPlayer === 'X') {
		currentPlayer = 'O';
	} else {
		currentPlayer = 'X';
	}
}

// function checkPattern {

// }