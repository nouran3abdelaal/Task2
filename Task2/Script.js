
let counter = 4;
const imageUrl = "images/home.png";

document.addEventListener("DOMContentLoaded", function () {
 // Get references to the div elements
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");

// Get reference to the container element
var container = document.getElementById("container");

// Apply CSS styles to the container
container.style.display = "flex";  // Use flexbox
container.style.width = "100%";  // Set width to 100%

// Get references to the div elements
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");

// Apply CSS styles to the divs
div1.style.width = "50%";  // Set width to 50%
div2.style.width = "50%";  // Set width to 50%
div1.style.height = "100vh";  // Set height to the full viewport height
div2.style.height = "100vh";  // Set height to the full viewport height
div1.style.border = "1px solid gray";  // Set gray border
div2.style.border = "1px solid gray";  // Set gray border

  createContent(counter);

});

function createContent(counter) {
  // const screenWidth = window.innerWidth;
  // const screenHeight = window.innerHeight;
  // const verticalLinePosition = screenHeight / 2;

  // const verticalLine = document.createElement("div");
  // verticalLine.style.height = screenHeight;
  // verticalLine.style.width = "1px";
  // verticalLine.style.position = "absolute";
  // verticalLine.style.top = verticalLinePosition;
  // verticalLine.style.borderLeft = "1px solid black";

  // document.body.appendChild(verticalLine);

  const positions = getUniqueRandomXYPositions(counter + 1);
  const imgs = [];

  for (const position of positions.slice(0, positions.length - 1)) {
    //////debugger   

    var img = document.createElement("img");
    img.src = imageUrl;

    var img = document.createElement("img");
    img.src = imageUrl;
    img.innerHTML = "This is a img";
    img.style.position = "absolute";
    img.style.width = "4%";
    img.style.height = "4%";

    // img.style.width="50%";
    img.style.left = position.x + "px";
    img.style.top = position.y + "px";
    img.addEventListener('click', function () {
      //////debugger
      console.log('The button was clicked!');
      var xPosition = Math.floor(Number(Number(img.style.left.split("px")[0]) + window.innerWidth / 2));
      console.log(Number(img.style.left.split("px")[0]) + window.innerWidth / 2);

      var element = document.elementFromPoint(xPosition, Math.floor(Number(Number(img.style.top.split("px")[0]))));
      if (element) {
        console.log('loser11');
      }
      else {
        var xPosition = Math.floor(Number(Number(img.style.left.split("px")[0]) - window.innerWidth / 2));
        console.log(img.style.left.split("px")[0] - window.innerWidth / 2);

        var element = document.elementFromPoint(xPosition, Math.floor(Number(Number(img.style.top.split("px")[0]))));
        if (element) {
          console.log('loser12');
        }
        else {
          console.log('winner13');
        }
      }
    });
    document.body.appendChild(img);

    var img = document.createElement("img");
    img.src = imageUrl;
    //   img.style.width="50%";

    img.innerHTML = "This is a img2";
    img.style.position = "absolute";

    img.style.left = position.x + window.innerWidth / 2 + "px";
    img.style.top = position.y + "px";
    img.style.width = "4%";
    img.style.height = "4%";
    img.addEventListener('click', function () {
      ////debugger
      console.log('The button was clicked!');
      var xPosition = Math.floor(Number(Number(img.style.left.split("px")[0]) + window.innerWidth / 2));
      console.log(img.style.left.split("px")[0] - window.innerWidth / 2);

      var element = document.elementFromPoint(xPosition, Math.floor(Number(Number(img.style.top.split("px")[0]))));
      if (element) {
        console.log('loser21');
      }
      else {
        const xPosition = Math.floor(Number(Number(img.style.left.split("px")[0]) - window.innerWidth / 2));
        console.log(img.style.left.split("px")[0] - window.innerWidth / 2);

        const element = document.elementFromPoint(xPosition, Math.floor(Number(Number(img.style.top.split("px")[0]))));
        if (element) {
          console.log('loser22');
        }
        else {
          console.log('winner23');
        }
      }
    });
    //   imgs.push(img);
    document.body.appendChild(img);

  }
  const lastElement = positions[positions.length - 1];
  var img = document.createElement("img");
  img.src = imageUrl;
  //   img.style.width="50%";

  img.innerHTML = "The odd one";
  img.style.position = "absolute";

  img.style.left = lastElement.x + "px";
  img.style.top = lastElement.y + "px";
  img.style.width = "4%";
  img.style.height = "4%";
  document.body.appendChild(img);

  img.addEventListener('click', function () {
    console.log('The button was clicked!');
    counter++;
    const elements = document.querySelectorAll("img");

    for (const element of elements) {
      element.remove();
    }

    createContent(counter);


    // *** this works
    //     var rect = img.getBoundingClientRect(); // Get the position of the img relative to the viewport

    // // Calculate the X and Y positions relative to the document
    // var xPosition = Math.floor(rect.left + window.pageXOffset + rect.width / 2);
    // var yPosition = Math.floor(rect.top + window.pageYOffset);

    // console.log(xPosition, yPosition); // Verify the calculated positions

    // var element = document.elementFromPoint(xPosition, yPosition);


    // console.log(element); // Print the element at the specified position


    var xPosition = (Math.floor(Number(Number(img.style.left.split("px")[0]) + window.innerWidth / 2)));
    //console.log(img.style.left.split("px")[0]-window.innerWidth/2);
    var element = document.elementFromPoint(xPosition, Math.floor(Number(Number(img.style.top.split("px")[0]))));
    const element2 = document.querySelectorAll("*");
    // const rect = element2.getBoundingClientRect();

    // if (rect.x === xPosition) {
    //   // There is an element at the x position of 100px.
    //   console.log('loooooooo');
    // } else {
    //   // There is no element at the x position of 100px.
    //   console.log('yes');
    // }

    //     if(element){
    //     console.log('loser31');
    //     console.log(element);
    // }
    // else{
    //     var xPosition = Math.floor(Number(Number(img.style.left.split("px")[0])-window.innerWidth/2));
    //     console.log(img.style.left.split("px")[0]-window.innerWidth/2);

    //     var element = document.elementFromPoint(xPosition,Math.floor(Number(Number(img.style.top.split("px")[0]))));
    //               if(element){
    //         console.log('loser32');
    //     }

    //     else{
    //         console.log('winner3');
    //     }
    // }
  });
  //   imgs.push(img);
  // document.body.appendChild(img);

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
