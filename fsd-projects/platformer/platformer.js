$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     


    // TODO 2 - Create Platforms
createPlatform(100, 610, 100, 20, "black");

createPlatform(500, 610, 100, 20, "black");

createPlatform(300, 475, 100, 20, "white");

createPlatform(800, 475, 100, 20, "white");

createPlatform(1000, 375, 100, 20, "black");

createPlatform(1300, 250, 100, 20, "white");

    // TODO 3 - Create Collectables
createCollectable("fazcoin", 150, 170, 0.5, 0.7);

createCollectable("fazcoin", 350, 170, 0.5, 0.7);

createCollectable("fazcoin", 550, 170, 0.5, 0.7);

createCollectable("fazcoin", 850, 170, 0.5, 0.7);

createCollectable("fazcoin", 1050, 170, 0.5, 0.7);

createCollectable("fazcoin", 1200, 170, 0.5, 0.7);

createCollectable("fazcoin", 1300, 170, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
createCannon("bottom", 200, 1000);

    createCannon("bottom", 400, 1250);
createCannon("right", 500, 3000);

    createCannon("right", 700, 2000);
    createCannon("right", 750, 2500);
        createCannon("left", 200, 2500);


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
