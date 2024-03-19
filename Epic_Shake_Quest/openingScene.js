class openingScene extends Phaser.Scene {
  constructor() {
    super({ key: "openingScene" });
  }

  preload() {
    this.load.image("intro_1", "assets/opening.png");

    this.load.audio("bgmusic", "assets/CS.mp3");
  }

  create() {
    console.log("openingScene");
    this.add.image(0, 0, "intro_1").setOrigin(0, 0).setScale(1);

    this.music = this.sound.add("bgmusic", { loop: true }).setVolume(1);
    this.music.play();

    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        console.log("Spacebar pressed, goto storylineScene");
        this.scene.start("storylineScene");
      },
      this
    );
  }
}
