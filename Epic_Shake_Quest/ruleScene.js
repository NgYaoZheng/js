class ruleScene extends Phaser.Scene {
  constructor() {
    super({ key: "ruleScene" });
  }

  preload(){
    this.load.image("intro_3", "assets/rules.png");
  }

  create() {
    console.log("ruleScene");
    
    this.add
    .image(0, 0, "intro_3")
    .setOrigin(0, 0)
    .setScale(1);

    ;

    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        console.log("Spacebar pressed, goto instructionScene");
        this.scene.start("instructionScene");
      },
      this
    );
  }
}
