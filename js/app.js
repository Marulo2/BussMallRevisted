//need to flowchart before anything else

function products(name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
}

var allProducts = [new products('bag', 'img/bag.jpg'),
                    new products('banana', 'img/banana.jpg'),
                    new products('boots', 'img/banana.jpg'),
                    new products('chair', 'img/chair.jpg'),
                    new products('cthulu', 'img/cthulu.jpg')]



var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');

one.addEventListener('click', oneHandle);
two.addEventListener('click', twoHandle);
three.addEventListener('click', threeHandle);

function oneHandle() {
  console.log('clicked!');
}

function twoHandle() {
  console.log('clicked!');
}

function threeHandle() {
  console.log('clicked!');
}
