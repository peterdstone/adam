function runadam2() {
    
    // Create the application helper and add its render target to the page
    let app = new PIXI.Application({ width: 640, height: 360 });
    document.body.appendChild(app.view);

    // Create the sprite and add it to the stage
    let ship = PIXI.Sprite.from('sprites/sample.png');
    ship.y = 96; 
    ship.vx = 0;
    ship.vy = 0;
    app.stage.addChild(ship);


    const left = keyboard("ArrowLeft");
    const up = keyboard("ArrowUp");
    const right = keyboard("ArrowRight");
    const down = keyboard("ArrowDown");

    //Left arrow key `press` method
    left.press = () => {
        //Change the ship's velocity when the key is pressed
        ship.vx = -5;
        ship.vy = 0;
    };
  
    //Left arrow key `release` method
    left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the ship isn't moving vertically:
        //Stop the ship
        if (!right.isDown && ship.vy === 0) {
            ship.vx = 0;
        }
    };

    //Up
    up.press = () => {
        ship.vy = -5;
        ship.vx = 0;
    };
    up.release = () => {
        if (!down.isDown && ship.vx === 0) {
            ship.vy = 0;
        }
    };

    //Right
    right.press = () => {
        ship.vx = 5;
        ship.vy = 0;
    };
    right.release = () => {
        if (!left.isDown && ship.vy === 0) {
            ship.vx = 0;
        }
    };

    //Down
    down.press = () => {
        ship.vy = 5;
        ship.vx = 0;
    };
    down.release = () => {
        if (!up.isDown && ship.vx === 0) {
            ship.vy = 0;
        }
    };



    // Main draw loop
    app.ticker.add((delta) => {
        //Use the ship's velocity to make it move
        ship.x += ship.vx;
        ship.y += ship.vy;
    });
}