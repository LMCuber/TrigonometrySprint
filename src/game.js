// constants
const Application = PIXI.Application;
const Graphics = PIXI.Graphics;

// functions
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function hex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// classes
class Player {
    constructor() {
        //
        this.x = 0;
        this.y = 0;
        this.yvel = 0;
        this.yacc = 0.15;
        //
        this.rect = new Graphics();
        this.rect.beginFill(hex(130, 40, 24))
        this.rect.drawRect(0, 0, 30, 30);
        this.rect.endFill();
    }

    draw() {}

    update() {
        this.yvel += this.yacc;
        this.y += this.yvel;
        this.rect.position.set(this.x, this.y); 
        this.draw();
    }
}
var player = new Player();

// onload setup
window.onload = () => {
    app = new Application(
        {
            width: 800,
            height: 600,
            backgroundColor: hex(120, 120, 120),
        }
    );
    document.body.appendChild(app.view);
    app.stage.addChild(player.rect)
    loop();
}

// loop
function loop() {
    let elapsed = 0;
    app.ticker.add((delta) => {
        // elapsed
        elapsed += delta
        
        // update game
        player.update();
    })
}