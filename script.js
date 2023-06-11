document.addEventListener("DOMContentLoaded", () => {
    const balloonContainer = document.getElementById("balloon-container");
  
    function random(num) {
      return Math.floor(Math.random() * num);
    }
  
    function getRandomStyles() {
      var r = random(255);
      var g = random(255);
      var b = random(255);
      var mt = random(200);
      var ml = random(50);
      var dur = random(5) + 5;
      const colors = [
        [214, 178, 119],   // gold
        [255, 255, 255], // white
        [0, 0, 0],       // black
        // [172, 127, 153],  // pink
        // [135, 206, 250],  // pink

      ];
      // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * colors.length);

    // Get the RGB values of the randomly chosen color
    const randomColor = colors[randomIndex];
    r = randomColor[0];
    g = randomColor[1];
    b = randomColor[2];

      return `
        background-color: rgba(${r},${g},${b},0.7);
        color: rgba(${r},${g},${b},0.7); 
        box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
        margin: ${mt}px 0 0 ${ml}px;
        animation: float ${dur}s ease-in infinite;
      `;
    }
  
    function createBalloons(num) {
      for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        balloonContainer.append(balloon);
      }
    }
  
    createBalloons(30);
  });

