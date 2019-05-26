function b () {
  var a = 8000000000;
  while (a > 0) {
    a -= 1;
  }
}

function clickHandlerFirstButton () {
  console.log('button is clicked');
  b();
  console.log('Blocking code executed!!');
}

function clickHandlerThirdButton () {
  setTimeout(() => {
    console.log('Non Blocking code executed!!');
  }, 10000);
}

var firstButton = document.getElementById('btn1');
firstButton.addEventListener('click', clickHandlerFirstButton);

var secondButton = document.getElementById('btn2');
secondButton.addEventListener('click', () => alert('second button is clicked'));

var thirdButton = document.getElementById('btn3');
thirdButton.addEventListener('click', clickHandlerThirdButton);

var fourthButton = document.getElementById('btn4');
fourthButton.addEventListener('click', () => alert('Fourth button is clicked'));