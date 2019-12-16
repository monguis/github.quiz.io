
timer() 

function timer() {
    var counter = 75;
    var countdownInterval = setInterval(function () {
  
      if (counter === 0) {
        clearInterval(countdownInterval);
      } else {
        counter--;
      }
    }, 10);
}