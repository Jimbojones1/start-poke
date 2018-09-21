let score = 0;
let time = 10;
let round = 1;

$('button').on('click', () => {
  console.log('click works');
  // When the user clicks the button, populate the squares
  createSquares(30);
  setTimer();

});

//now try to write a function called setTimer
//thats starts an interval and countsdown to 0
//and when it reaches 0 increase the round

const setTimer = () => {
  const interval = setInterval(() => {
    time--;

    if(time === 0){
      clearInterval(interval);
      round++

      $('#round').text('round: ' + round);
    }

    $('#timer').text('Timer: ' + time + 's');



  }, 1000)
}






// Create a function named createSquares, that takes
// a parameter of an arbitary number and creates
// divs according to the number in the square class

const createSquares = (numberOfSquares) => {

  for (let i = 0; i < numberOfSquares; i++){
    // creating squares
    const $div = $('<div/>').on('click', disappearSquares);
    // this is where the color is applied
    applyRandomColor($div);
    // attach to the square class
    $('.squares').append($div);

  }
};

const disappearSquares = (e) => {
      // e is short for event
      // e.currentTarget gives you the div
      // you are clicking on
      const color =  $(e.currentTarget).css('background-color');

      checkValidPoke(color);

      $(e.currentTarget).css('opacity', 0);

    }


//lets write a function called (checkValidPoke)
//that takes that color string
//and if it is blue lets update a global score variable.
const checkValidPoke = (colorAsString) => {


  if(colorAsString === 'rgb(0, 0, 255)'){
    //updating the score
    score++
  } else {
    score--
  }
  // actuall updating on the DOM
  $('h1').text('Scoreboard: ' + score);
}





//Now we have a bunch of blue squares,
// but we want our squares to have a random,
// red, blue, or green color
// try to write a function to make that happen.

const applyRandomColor = (square) => {
  const randNum = Math.floor(Math.random() * 3) + 1;

  // im assuming square is a jquery object
  if(randNum === 1){
    square.css('background-color', 'red');
  } else if(randNum === 2){
    square.css('background-color', 'blue');
  } else {
    square.css('background-color', 'green');
  }

}



