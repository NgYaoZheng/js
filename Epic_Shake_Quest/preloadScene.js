class preloadScene extends Phaser.Scene {
  constructor() {
    super({ key: "preloadScene" });
  }

  preload(){
  this.load.image("intro_4", "assets/instruction.png");
}

  create() {
    console.log("preloadScene");

    this.add
    .image(0, 0, "intro_4")
    .setOrigin(0, 0)
    .setScale(1);

    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        console.log("Spacebar pressed, goto storylineScene");
        this.scene.start("storylineScene");
      },
      this
    );

    spaceDown.on(
      "down",
      function () {
        let playerPos = {};
        playerPos.x = 641;
        playerPos.y = 1191;
        this.scene.start("gym_Map", { player: playerPos });
      },
      this
    );

  }
}
