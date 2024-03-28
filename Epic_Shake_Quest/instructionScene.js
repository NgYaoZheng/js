class instructionScene extends Phaser.Scene {
  constructor() {
    super({ key: "instructionScene" });
  }

  preload() {
    this.load.image("intro_4", "assets/instruction.png");
  }

  create() {
    console.log("instructionScene");

    this.add.image(0, 0, "intro_4").setOrigin(0, 0).setScale(1);

    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        let playerPos = {};
        playerPos.x = 670;
        playerPos.y = 1177;
        this.scene.start("gym_Map", { player: playerPos });
      },
      this
    );
  }
}
