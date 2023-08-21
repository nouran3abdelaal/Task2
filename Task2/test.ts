var myName: string = "nouran";
var counter: number = 4;
var imageUrl: string = "images/home.png";

document.addEventListener("DOMContentLoaded", function () {
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");

  var container = document.getElementById("container");
  container.style.display = "flex";
  container.style.width = "100%";

  div1.style.width = "50%";
  div2.style.width = "50%";
  div1.style.height = "100vh";
  div2.style.height = "100vh";
  div1.style.border = "1px solid gray";
  div2.style.border = "1px solid gray";

  createContent(counter);
});

function createContent(counterValue) {
  var positions = getUniqueRandomXYPositions(counterValue + 1);

  for (const position of positions.slice(0, positions.length - 1)) {
    var img1 = document.createElement("img");
    img1.src = imageUrl;
    img1.style.position = "absolute";
    img1.style.width = "4%";
    img1.style.height = "4%";
    img1.style.left = position.x + "px";
    img1.style.top = position.y + "px";
    img1.addEventListener('click', function () {
      console.log('The button was clicked!');
      // Rest of the click event logic
    });
    document.body.appendChild(img1);

    var img2 = document.createElement("img");
    img2.src = imageUrl;
    img2.style.position = "absolute";
    img2.style.width = "4%";
    img2.style.height = "4%";
    img2.style.left = position.x + window.innerWidth / 2 + "px";
    img2.style.top = position.y + "px";
    img2.addEventListener('click', function () {
      console.log('The button was clicked!');
      // Rest of the click event logic
    });
    document.body.appendChild(img2);
  }

  var lastElement = positions[positions.length - 1];
  var img3 = document.createElement("img");
  img3.src = imageUrl;
  img3.style.position = "absolute";
  img3.style.width = "4%";
  img3.style.height = "4%";
  img3.style.left = lastElement.x + "px";
  img3.style.top = lastElement.y + "px";
  document.body.appendChild(img3);
  img3.addEventListener('click', function () {
    console.log('The button was clicked!');
    counterValue++;
    var elements = document.querySelectorAll("img");
    for (const element of elements) {
      element.remove();
    }
    createContent(counterValue);
  });
}

function getUniqueRandomXYPositions(numberOfPositions) {
  const positions = [];

  for (let i = 0; i < numberOfPositions; i++) {
    const position = getRandomXYPosition();

    while (positions.includes(position)) {
      position = getRandomXYPosition();
    }

    positions.push(position);
  }

  return positions;
}

function getRandomXYPosition() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const randomX = Math.abs(Math.floor(Math.random() * screenWidth / 2));
  const randomY = Math.abs(Math.floor(Math.random() * screenHeight));

  return {
    x: randomX,
    y: randomY
  };
}