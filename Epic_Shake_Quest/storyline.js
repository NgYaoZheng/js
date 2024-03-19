class storylineScene extends Phaser.Scene {
  constructor() {
    super({ key: "storylineScene" });
  }

  preload(){
    this.load.image("intro_2", "assets/storyline.png");
  }

  create() {
    console.log("storylineScene");
   
    this.add
    .image(0, 0, "intro_2")
    .setOrigin(0, 0)
    .setScale(1);

    ;

    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        console.log("Spacebar pressed, goto ruleScene");
        this.scene.start("ruleScene");
      },
      this
    );
  }
}
