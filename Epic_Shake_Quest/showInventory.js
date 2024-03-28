class showInventory extends Phaser.Scene {
  constructor() {
    super({ key: "showInventory" });
    active: false;
  }

  // incoming data from other scene
  init(data) {
    this.player = data.player;
    this.inventory = data.inventory;
  }

  create() {
    console.log("showInventory");

    // Recv an event, call the method
    this.events.on("inventory", this.updateInventory, this);
  }
  ///////////////end of create//////////////////////

  update() {}

  updateInventory(data) {
    console.log("Received event inventory", data);

    this.note1 = this.add
      .image(5, 5, "note1")
      .setOrigin(0, 0)
      .setScale(0.05)
      .setScrollFactor(0);

    if (window.item1) {
      this.blender_Done = this.add
        .image(5, 5, "blender_Done")
        .setOrigin(0, 0)
        .setScale(0.05)
        .setScrollFactor(0);
    }

    if (window.item2) {
      this.cup_Done = this.add
        .image(5, 5, "cup_Done")
        .setOrigin(0, 0)
        .setScale(0.05)
        .setScrollFactor(0);
    }

    if (window.item3) {
      this.spoon_Done = this.add
        .image(5, 5, "spoon_Done")
        .setOrigin(0, 0)
        .setScale(0.05)
        .setScrollFactor(0);
    }

    if (window.item4) {
      this.measuring_Cup_Done = this.add
        .image(5, 5, "measuring_Cup_Done")
        .setOrigin(0, 0)
        .setScale(0.05)
        .setScrollFactor(0);
    }

    if (window.item1 && window.item2 && window.item3 && window.item4) {
      this.note1.setVisible(false),
        this.blender_Done.setVisible(false),
        this.measuring_Cup_Done.setVisible(false),
        this.cup_Done.setVisible(false),
        this.spoon_Done.setVisible(false),
        (this.note2 = this.add
          .image(5, 5, "note2")
          .setOrigin(0, 0)
          .setScale(0.05)
          .setScrollFactor(0));
    }

    if (
      window.item5 == 1 &&
      window.item6 == 1 &&
      window.item7 == 1 &&
      window.item8 == 1 &&
      window.item9 == 1 &&
      window.item10 == 1 &&
      window.item11 == 1
    ) {
      this.note2.setVisible(false),
        (this.note3 = this.add
          .image(5, 5, "note3")
          .setOrigin(0, 0)
          .setScale(0.05)
          .setScrollFactor(0));
    }

    if (window.itemAppear == 1) {
      this.note3.setVisible(false),
        (this.note4 = this.add
          .image(5, 5, "note4")
          .setOrigin(0, 0)
          .setScale(0.05)
          .setScrollFactor(0));
    }

    if (
      window.human1_ChangeC == 1 &&
      window.human2_ChangeC == 1 &&
      window.human3_ChangeC == 1 &&
      window.human4_ChangeC == 1 &&
      window.human5_ChangeC == 1 &&
      window.human6_ChangeC == 1
    ) {
      this.note4.setVisible(false),
        (this.note1 = this.add
          .image(5, 5, "note1")
          .setOrigin(0, 0)
          .setScale(0.05)
          .setScrollFactor(0));
    }
  }
} //////////// end of class world ////////////////////////
