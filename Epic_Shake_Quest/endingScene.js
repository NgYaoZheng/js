class endingScene extends Phaser.Scene {
  constructor() {
    super({ key: "endingScene" });
  }

  preload() {
    this.load.image("ending", "assets/ending.png");

    this.load.audio("victory", "assets/victory.mp3");
  }

  create() {
    console.log("endingScene");

    this.scene.stop("showInventory");

    this.add.image(0, 0, "ending").setOrigin(0, 0).setScale(1);

    this.victory = this.sound.add("victory");

    this.victory.play();

    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        console.log("Spacebar pressed, goto openingScene2");
        window.item1 = 0;
        window.item2 = 0;
        window.item3 = 0;
        window.item4 = 0;
        window.item5 = 0;
        window.item6 = 0;
        window.item7 = 0;
        window.item8 = 0;
        window.item9 = 0;
        window.item10 = 0;
        window.item11 = 0;
        window.character_change = 0;
        window.itemAppear = 0;
        window.death1 = 0;
        window.death2 = 0;
        window.death3 = 0;
        window.death4 = 0;
        window.death5 = 0;
        window.death6 = 0;
        window.death7 = 0;
        window.death8 = 0;
        window.death9 = 0;
        window.human1_ChangeC = 0;
        window.human2_ChangeC = 0;
        window.human3_ChangeC = 0;
        window.human4_ChangeC = 0;
        window.human5_ChangeC = 0;
        window.human6_ChangeC = 0;
        this.scene.start("openingScene2");
      },
      this
    );
  }
}
