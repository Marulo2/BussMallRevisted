//need to flowchart before anything else

var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');

one.addEventListener('click', oneHandle);
two.addEventListener('click', twoHandle);
three.addEventListener('click', threeHandle);

function oneHandle() {
  console.log('clicked!');
}
