class openingScene2 extends Phaser.Scene {
  constructor() {
    super({ key: "openingScene2" });
  }

  preload() {
    ///////opening////////
    this.load.image("intro_1", "assets/opening.png");

    ///////items////////
    this.load.spritesheet("blender", "assets/blender.png", {
      frameWidth: 24,
      frameHeight: 35,
    });

    this.load.spritesheet("measuring_Cup", "assets/measuring_Cup.png", {
      frameWidth: 28,
      frameHeight: 24,
    });

    this.load.spritesheet("cup", "assets/cup.png", {
      frameWidth: 20,
      frameHeight: 35,
    });

    this.load.spritesheet("spoon", "assets/measuring_Spoon.png", {
      frameWidth: 28,
      frameHeight: 33,
    });

    this.load.spritesheet("wheat_Powder", "assets/wheat_Powder.png", {
      frameWidth: 24,
      frameHeight: 35,
    });

    this.load.spritesheet("milk", "assets/milk.png", {
      frameWidth: 21,
      frameHeight: 35,
    });

    this.load.spritesheet("banana", "assets/banana.png", {
      frameWidth: 28,
      frameHeight: 30,
    });

    this.load.spritesheet("berries", "assets/berries.png", {
      frameWidth: 25,
      frameHeight: 34,
    });

    this.load.spritesheet("ice_Cubes", "assets/ice_Cubes.png", {
      frameWidth: 26,
      frameHeight: 33,
    });

    this.load.spritesheet("honey", "assets/honey.png", {
      frameWidth: 29.5,
      frameHeight: 35,
    });

    this.load.spritesheet("spinach", "assets/spinach.png", {
      frameWidth: 30,
      frameHeight: 37,
    });
  }

  create() {
    console.log("openingScene2");

    ///////opening////////
    this.add.image(0, 0, "intro_1").setOrigin(0, 0).setScale(1);

    ///////items////////
    this.anims.create({
      key: "blender_Anim",
      frames: this.anims.generateFrameNumbers("blender", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "measuring_Cup_Anim",
      frames: this.anims.generateFrameNumbers("measuring_Cup", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "cup_Anim",
      frames: this.anims.generateFrameNumbers("cup", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "spoon_Anim",
      frames: this.anims.generateFrameNumbers("spoon", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "milk_Anim",
      frames: this.anims.generateFrameNumbers("milk", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "wheat_Powder_Anim",
      frames: this.anims.generateFrameNumbers("wheat_Powder", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "berries_Anim",
      frames: this.anims.generateFrameNumbers("berries", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "honey_Anim",
      frames: this.anims.generateFrameNumbers("honey", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "spinach_Anim",
      frames: this.anims.generateFrameNumbers("spinach", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "banana_Anim",
      frames: this.anims.generateFrameNumbers("banana", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "ice_Cubes_Anim",
      frames: this.anims.generateFrameNumbers("ice_Cubes", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });

    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        console.log("Spacebar pressed, goto storylineScene");
        this.scene.start("storylineScene");
      },
      this
    );
    this.scene.launch("showInventory");
  }
}
