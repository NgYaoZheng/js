class market_Map extends Phaser.Scene {
  constructor() {
    super({ key: "market_Map" });
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world7", "assets/market_map.tmj");

    // Step 2 : Preload any images here

    ///////tileset////////
    this.load.image("wall4", "assets/allwall.png");
    this.load.image("ground3", "assets/gather_floors_2_exploration.png");
    this.load.image("market", "assets/Grocery_store_32x32.png");
    this.load.image("wall1", "assets/nauticalWalls.png");

    ///////items////////
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

    ///////death items////////
    this.load.spritesheet("rot_banana", "assets/rotten_Banana.png", {
      frameWidth: 28,
      frameHeight: 30,
    });

    this.load.spritesheet("bone", "assets/bone.png", {
      frameWidth: 27,
      frameHeight: 30,
    });

    this.load.spritesheet("cheese", "assets/cheese.png", {
      frameWidth: 24,
      frameHeight: 32,
    });

    this.load.spritesheet("fish", "assets/fish.png", {
      frameWidth: 28,
      frameHeight: 31,
    });

    this.load.spritesheet("candy", "assets/candy.png", {
      frameWidth: 21,
      frameHeight: 26,
    });

    this.load.spritesheet("cockroach", "assets/cockroach.png", {
      frameWidth: 28,
      frameHeight: 24,
    });

    this.load.spritesheet("caution_Wet", "assets/caution_Wet.png", {
      frameWidth: 51,
      frameHeight: 36,
    });

    this.load.spritesheet("soda", "assets/soda.png", {
      frameWidth: 27,
      frameHeight: 64,
    });

    this.load.spritesheet("chips", "assets/chips.png", {
      frameWidth: 31,
      frameHeight: 42,
    });

    ///////images////////
    this.load.image("shopping_List", "assets/shopping_List.png");
    this.load.image("wheat_Powder_Strike", "assets/wheat_Powder_Strike.png");
    this.load.image("milk_Strike", "assets/milk_Strike.png");
    this.load.image("berries_Strike", "assets/berries_Strike.png");
    this.load.image("bananas_Strike", "assets/bananas_Strike.png");
    this.load.image("honey_Strike", "assets/honey_Strike.png");
    this.load.image("spinach_Strike", "assets/spinach_Strike.png");
    this.load.image("ice_Cubes_Strike", "assets/ice_Cubes_Strike.png");

    ///////sound////////
    this.load.audio("sound1", "assets/collect.mp3");
    this.load.audio("sound2", "assets/door_Open.mp3");
    this.load.audio("fail", "assets/fail.mp3");

    ///////avatar////////
    this.load.spritesheet("avatar", "assets/avatar.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  } // end of preload //

  create() {
    console.log("market_Map");

    this.scene.stop("showInventory");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world7" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let wall4Tiles = map.addTilesetImage("allwall", "wall4");
    let ground3Tiles = map.addTilesetImage(
      "gather_floors_2_exploration",
      "ground3"
    );
    let marketTiles = map.addTilesetImage("Grocery_store_32x32", "market");
    let wall1Tiles = map.addTilesetImage("nauticalWalls", "wall1");

    //Step 5  create an array of tiles
    let tilesArray = [wall4Tiles, ground3Tiles, marketTiles, wall1Tiles];

    // Step 6  Load in layers by layers

    ///////tileset////////
    this.ground_Layer = map.createLayer("ground_Layer", tilesArray, 0, 0);
    this.wall_Layer = map.createLayer("wall_Layer", tilesArray, 0, 0);
    this.market1_Layer = map.createLayer("market1_Layer", tilesArray, 0, 0);
    this.market2_Layer = map.createLayer("market2_Layer", tilesArray, 0, 0);
    this.market3_Layer = map.createLayer("market3_Layer", tilesArray, 0, 0);
    this.market4_Layer = map.createLayer("market4_Layer", tilesArray, 0, 0);
    this.market5_Layer = map.createLayer("market5_Layer", tilesArray, 0, 0);
    this.market6_Layer = map.createLayer("market6_Layer", tilesArray, 0, 0);
    this.market7_Layer = map.createLayer("market7_Layer", tilesArray, 0, 0);
    this.market8_Layer = map.createLayer("market8_Layer", tilesArray, 0, 0);
    this.market9_Layer = map.createLayer("market9_Layer", tilesArray, 0, 0);
    this.market10_Layer = map.createLayer("market10_Layer", tilesArray, 0, 0);
    this.decoration_Layer = map.createLayer(
      "decoration_Layer",
      tilesArray,
      0,
      0
    );
    this.decoration2_Layer = map.createLayer(
      "decoration2_Layer",
      tilesArray,
      0,
      0
    );

    ///////sound////////
    this.sound1 = this.sound.add("sound1");
    this.sound2 = this.sound.add("sound2");
    this.fail = this.sound.add("fail");

    ///////items////////
    this.anims.create({
      key: "milk_Anim",
      frames: this.anims.generateFrameNumbers("milk", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let milk = map.findObject("object_Layer1", (obj) => obj.name === "milk");

    if (window.item5 == 0) {
      this.item5 = this.physics.add
        .sprite(milk.x, milk.y, "milk")
        .play("milk_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "wheat_Powder_Anim",
      frames: this.anims.generateFrameNumbers("wheat_Powder", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });

    let wheat_Powder = map.findObject(
      "object_Layer1",
      (obj) => obj.name === "wheat_Powder"
    );

    if (window.item6 == 0) {
      this.item6 = this.physics.add
        .sprite(wheat_Powder.x, wheat_Powder.y, "wheat_Powder")
        .play("wheat_Powder_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "berries_Anim",
      frames: this.anims.generateFrameNumbers("berries", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let berries = map.findObject(
      "object_Layer1",
      (obj) => obj.name === "berries"
    );

    if (window.item7 == 0) {
      this.item7 = this.physics.add
        .sprite(berries.x, berries.y, "berries")
        .play("berries_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "honey_Anim",
      frames: this.anims.generateFrameNumbers("honey", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let honey = map.findObject("object_Layer1", (obj) => obj.name === "honey");

    if (window.item8 == 0) {
      this.item8 = this.physics.add
        .sprite(honey.x, honey.y, "honey")
        .play("honey_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "spinach_Anim",
      frames: this.anims.generateFrameNumbers("spinach", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let spinach = map.findObject(
      "object_Layer1",
      (obj) => obj.name === "spinach"
    );

    if (window.item9 == 0) {
      this.item9 = this.physics.add
        .sprite(spinach.x, spinach.y, "spinach")
        .play("spinach_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "banana_Anim",
      frames: this.anims.generateFrameNumbers("banana", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let banana = map.findObject(
      "object_Layer1",
      (obj) => obj.name === "banana"
    );

    if (window.item10 == 0) {
      this.item10 = this.physics.add
        .sprite(banana.x, banana.y, "banana")
        .play("banana_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "ice_Cubes_Anim",
      frames: this.anims.generateFrameNumbers("ice_Cubes", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });

    let ice_Cubes = map.findObject(
      "object_Layer1",
      (obj) => obj.name === "ice_Cubes"
    );

    if (window.item11 == 0) {
      this.item11 = this.physics.add
        .sprite(ice_Cubes.x, ice_Cubes.y, "ice_Cubes")
        .play("ice_Cubes_Anim")
        .setScale(1.5);
    }

    ///////death items////////
    this.anims.create({
      key: "rot_banana_Anim",
      frames: this.anims.generateFrameNumbers("rot_banana", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });

    let rotten_Banana = map.findObject(
      "object_Layer1",
      (obj) => obj.name === "rotten_Banana"
    );

    if (window.death1 == 0) {
      this.death1 = this.physics.add
        .sprite(rotten_Banana.x, rotten_Banana.y, "rot_banana")
        .play("rot_banana_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "bone_Anim",
      frames: this.anims.generateFrameNumbers("bone", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let bone = map.findObject("object_Layer1", (obj) => obj.name === "bone");

    if (window.death2 == 0) {
      this.death2 = this.physics.add
        .sprite(bone.x, bone.y, "bone")
        .play("bone_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "cheese_Anim",
      frames: this.anims.generateFrameNumbers("cheese", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let cheese = map.findObject(
      "object_Layer1",
      (obj) => obj.name === "cheese"
    );

    if (window.death3 == 0) {
      this.death3 = this.physics.add
        .sprite(cheese.x, cheese.y, "cheese")
        .play("cheese_Anim")
        .setScale(2);
    }

    this.anims.create({
      key: "chips_Anim",
      frames: this.anims.generateFrameNumbers("chips", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let chips = map.findObject("object_Layer1", (obj) => obj.name === "chips");

    if (window.death4 == 0) {
      this.death4 = this.physics.add
        .sprite(chips.x, chips.y, "chips")
        .play("chips_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "fish_Anim",
      frames: this.anims.generateFrameNumbers("fish", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let fish = map.findObject("object_Layer1", (obj) => obj.name === "fish");

    if (window.death5 == 0) {
      this.death5 = this.physics.add
        .sprite(fish.x, fish.y, "fish")
        .play("fish_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "candy_Anim",
      frames: this.anims.generateFrameNumbers("candy", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let candy = map.findObject("object_Layer1", (obj) => obj.name === "candy");

    if (window.death6 == 0) {
      this.death6 = this.physics.add
        .sprite(candy.x, candy.y, "candy")
        .play("candy_Anim")
        .setScale(2);
    }

    this.anims.create({
      key: "cockroach_Anim",
      frames: this.anims.generateFrameNumbers("cockroach", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });

    let cockroach = map.findObject(
      "object_Layer1",
      (obj) => obj.name === "cockroach"
    );

    if (window.death7 == 0) {
      this.death7 = this.physics.add
        .sprite(cockroach.x, cockroach.y, "cockroach")
        .play("cockroach_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "caution_Wet_Anim",
      frames: this.anims.generateFrameNumbers("caution_Wet", {
        start: 0,
        end: 1,
      }),
      frameRate: 5,
      repeat: -1,
    });

    let caution_Wet = map.findObject(
      "object_Layer1",
      (obj) => obj.name === "caution_Wet"
    );

    if (window.death8 == 0) {
      this.death8 = this.physics.add
        .sprite(caution_Wet.x, caution_Wet.y, "caution_Wet")
        .play("caution_Wet_Anim")
        .setScale(1.75);
    }

    this.anims.create({
      key: "soda_Anim",
      frames: this.anims.generateFrameNumbers("soda", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let soda = map.findObject("object_Layer1", (obj) => obj.name === "soda");

    if (window.death9 == 0) {
      this.death9 = this.physics.add
        .sprite(soda.x, soda.y, "soda")
        .play("soda_Anim")
        .setScale(1);
    }

    ///////images////////
    this.add
      .image(5, 5, "shopping_List")
      .setOrigin(0, 0)
      .setScale(0.05)
      .setScrollFactor(0);

    ///////avatar////////
    this.anims.create({
      key: "avatar-up",
      frames: this.anims.generateFrameNumbers("avatar", {
        start: 105,
        end: 112,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "avatar-left",
      frames: this.anims.generateFrameNumbers("avatar", {
        start: 118,
        end: 125,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "avatar-down",
      frames: this.anims.generateFrameNumbers("avatar", {
        start: 131,
        end: 138,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "avatar-right",
      frames: this.anims.generateFrameNumbers("avatar", {
        start: 144,
        end: 151,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.player = this.physics.add.sprite(795, 1495, "avatar").setScale(1.5);
    window.player = this.player

      .setSize(this.player.width * 0.3, this.player.height * 0.3)
      .setOffset(22, 45);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
    // // camera follow player
    this.cameras.main.startFollow(this.player);

    this.wall_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.wall_Layer);
    this.market1_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.market1_Layer);
    this.market2_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.market2_Layer);
    this.market3_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.market3_Layer);
    this.market4_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.market4_Layer);
    this.market5_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.market5_Layer);
    this.market6_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.market6_Layer);
    this.market7_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.market7_Layer);
    this.market8_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.market8_Layer);
    this.market9_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.market9_Layer);
    this.market10_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.market10_Layer);
    this.decoration_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.decoration_Layer);
    this.decoration2_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.decoration2_Layer);

    ///////overlaps////////
    this.physics.add.overlap(this.player, this.item5, collect_Milk, null, this);
    this.physics.add.overlap(
      this.player,
      this.item6,
      collect_Wheat_Powder,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.item7,
      collect_Berries,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.item8,
      collect_Honey,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.item9,
      collect_Spinach,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.item10,
      collect_Banana,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.item11,
      collect_Ice_Cubes,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.death1,
      this.hit_Rotten,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.death2,
      this.hit_Bone,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.death3,
      this.hit_Cheese,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.death4,
      this.hit_Chips,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.death5,
      this.hit_Fish,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.death6,
      this.hit_Candy,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.death7,
      this.hit_Cockroach,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.death8,
      this.hit_Caution,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.death9,
      this.hit_Soda,
      null,
      this
    );
  } // end of create //

  ///////door////////
  update() {
    if (
      window.item5 == 1 &&
      window.item6 == 1 &&
      window.item7 == 1 &&
      window.item8 == 1 &&
      window.item9 == 1 &&
      window.item10 == 1 &&
      window.item11 == 1
    ) {
      if (
        this.player.x > 635 &&
        this.player.x < 970 &&
        this.player.y < 1556 &&
        this.player.y > 1500
      ) {
        console.log("Door6");
        this.street_Map();
      }
    }

    ///////avatar movement////////
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-270);
      this.player.anims.play("avatar-left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(270);
      this.player.anims.play("avatar-right", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-270);
      this.player.anims.play("avatar-up", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(270);
      this.player.anims.play("avatar-down", true);
    } else {
      this.player.setVelocity(0);
      this.player.anims.stop();
    }
  } // end of update //

  ///////death items////////
  hit_Rotten(player, death1) {
    console.log("hit_Rotten, goto rot_Banana_DeathScene");
    this.fail.play();
    this.scene.start("rot_Banana_DeathScene");
  }

  hit_Bone(player, death2) {
    console.log("hit_Bone, goto bone_DeathScene");
    this.fail.play();
    this.scene.start("bone_DeathScene");
  }

  hit_Cheese(player, death3) {
    console.log("hit_Cheese, goto cheese_DeathScene");
    this.fail.play();
    this.scene.start("cheese_DeathScene");
  }

  hit_Chips(player, death4) {
    console.log("hit_Chips, goto chips_DeathScene");
    this.fail.play();
    this.scene.start("chips_DeathScene");
  }

  hit_Fish(player, death5) {
    console.log("hit_Fish, goto fish_DeathScene");
    this.fail.play();
    this.scene.start("fish_DeathScene");
  }

  hit_Candy(player, death6) {
    console.log("hit_Candy, goto candy_DeathScene");
    this.fail.play();
    this.scene.start("candy_DeathScene");
  }

  hit_Cockroach(player, death7) {
    console.log("hit_Cockroach, goto cockroach_DeathScene");
    this.fail.play();
    this.scene.start("cockroach_DeathScene");
  }

  hit_Caution(player, death8) {
    console.log("hit_Caution, goto caution_DeathScene");
    this.fail.play();
    this.scene.start("caution_DeathScene");
  }

  hit_Soda(player, death9) {
    console.log("hit_Soda, goto soda_DeathScene");
    this.fail.play();
    this.scene.start("soda_DeathScene");
  }

  ///////map////////
  street_Map(player, tile) {
    console.log("street_Map function");
    this.sound2.play();
    let playerPos = {};
    playerPos.x = 2802;
    playerPos.y = 567;
    this.scene.start("street_Map", { player: playerPos });
  }
}
