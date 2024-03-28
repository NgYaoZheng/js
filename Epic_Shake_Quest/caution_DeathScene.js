class caution_DeathScene extends Phaser.Scene {
  constructor() {
    super({ key: "caution_DeathScene" });
  }

  preload() {
    this.load.image("caution_Death", "assets/caution_Death.png");
  }

  create() {
    console.log("caution_DeathScene");

    this.scene.stop("showInventory");

    this.add.image(0, 0, "caution_Death").setOrigin(0, 0).setScale(1);

    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        console.log("Spacebar pressed, goto gym_Map");
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
        let playerPos = {};
        playerPos.x = 670;
        playerPos.y = 1177;
        this.scene.start("gym_Map", { player: playerPos });
      },
      this
    );
  }
}
