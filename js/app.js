//need to flowchart before anything else

function products(name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
}

var allProducts = [new products('bag', 'img/bag.jpg'),
                    new products('banana', 'img/banana.jpg'),
                    new products('boots', 'img/boots.jpg'),
                    new products('chair', 'img/chair.jpg'),
                    new products('cthulu', 'img/cthulhu.jpg')]

var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var randomize1;
var randomize2;
var randomize3;

function displayImage() {
  randomize1 = Math.floor(Math.random() * allProducts.length);
  one.innerHTML = '<img src="' + allProducts[randomize1].path + '">';

  randomize2 = Math.floor(Math.random() * allProducts.length);
    while (randomize1 === randomize2) {
      randomize2 = Math.floor(Math.random() * allProducts.length);
    }
  two.innerHTML = '<img src="' + allProducts[randomize2].path + '">';

  randomize3 = Math.floor(Math.random() * allProducts.length);
    while (randomize1 === randomize3 || randomize3 === randomize2) {
      randomize3 = Math.floor(Math.random() * allProducts.length);
    }
  three.innerHTML = '<img src="' + allProducts[randomize3].path + '">';
}

displayImage();


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
