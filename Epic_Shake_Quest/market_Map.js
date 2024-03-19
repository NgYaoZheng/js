class market_Map extends Phaser.Scene {
  constructor() {
    super({ key: "market_Map" });
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world7", "assets/market_map.tmj");

    // Step 2 : Preload any images here
    this.load.image("wall4", "assets/allwall.png");
    this.load.image("ground3", "assets/gather_floors_2_exploration.png");
    this.load.image("market", "assets/Grocery_store_32x32.png");
    this.load.image("wall1", "assets/nauticalWalls.png");

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

    this.load.image("shopping_List", "assets/shopping_List.png");
    this.load.image("wheat_Powder_Strike", "assets/wheat_Powder_Strike.png");
    this.load.image("milk_Strike", "assets/milk_Strike.png");
    this.load.image("berries_Strike", "assets/berries_Strike.png");
    this.load.image("bananas_Strike", "assets/bananas_Strike.png");
    this.load.image("honey_Strike", "assets/honey_Strike.png");
    this.load.image("spinach_Strike", "assets/spinach_Strike.png");
    this.load.image("ice_Cubes_Strike", "assets/ice_Cubes_Strike.png");

    this.load.spritesheet("avatar", "assets/avatar.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    // this.load.spritesheet('avatar_Protein_Shake', 'assets/protein_Shake_Avatar.png',{ frameWidth:64, frameHeight:64 });
  } // end of preload //

  create() {
    console.log("animationScene");

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

    this.add
      .image(5, 5, "shopping_List")
      .setOrigin(0, 0)
      .setScale(0.05)
      .setScrollFactor(0);

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

    // this.anims.create({
    //     key:'avatar_Protein_Shake-up',
    //     frames:this.anims.generateFrameNumbers('avatar_Protein_Shake',
    //     { start:105, end:112 }),
    //     frameRate:5,
    //     repeat:-1
    // });

    // this.anims.create({
    //     key:'avatar_Protein_Shake-left',
    //     frames:this.anims.generateFrameNumbers('avatar_Protein_Shake',
    //     { start:118, end:125 }),
    //     frameRate:5,
    //     repeat:-1
    // });

    // this.anims.create({
    //     key:'avatar_Protein_Shake-down',
    //     frames:this.anims.generateFrameNumbers('avatar_Protein_Shake',
    //     { start:131, end:138 }),
    //     frameRate:5,
    //     repeat:-1
    // });

    // this.anims.create({
    //     key:'avatar_Protein_Shake-right',
    //     frames:this.anims.generateFrameNumbers('avatar_Protein_Shake',
    //     { start:144, end:151 }),
    //     frameRate:5,
    //     repeat:-1
    // });

    var key1Down = this.input.keyboard.addKey(49);
    var key2Down = this.input.keyboard.addKey(50);
    var key3Down = this.input.keyboard.addKey(51);
    var key4Down = this.input.keyboard.addKey(52);
    var key5Down = this.input.keyboard.addKey(53);
    var key6Down = this.input.keyboard.addKey(54);

    key1Down.on(
      "down",
      function () {
        console.log("Key 1 pressed");
        this.scene.start("gym_Map");
      },
      this
    );

    key2Down.on(
      "down",
      function () {
        console.log("Key 2 pressed");
        this.scene.start("kitchen_Map");
      },
      this
    );

    key3Down.on(
      "down",
      function () {
        console.log("Key 3 pressed");
        this.scene.start("lockerroom_Map");
      },
      this
    );

    key4Down.on(
      "down",
      function () {
        console.log("Key 4 pressed");
        this.scene.start("showerroom_Map");
      },
      this
    );
    key5Down.on(
      "down",
      function () {
        console.log("Key 5 pressed");
        this.scene.start("pool_Map");
      },
      this
    );

    key6Down.on(
      "down",
      function () {
        console.log("Key 6 pressed");
        this.scene.start("street_Map");
      },
      this
    );

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

    this.physics.add.overlap(
      this.player,
      this.item5,
      this.collect_Milk,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.item6,
      this.collect_Wheat_Powder,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.item7,
      this.collect_Berries,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.item8,
      this.collect_Honey,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.item9,
      this.collect_Spinach,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.item10,
      this.collect_Banana,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.item11,
      this.collect_Ice_Cubes,
      null,
      this
    );
  } // end of create //

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

    if (window.item6 == 1) {
      this.add
        .image(5, 5, "wheat_Powder_Strike")
        .setOrigin(0, 0)
        .setScale(0.05)
        .setScrollFactor(0);
    }

    if (window.item5 == 1) {
      this.add
        .image(5, 5, "milk_Strike")
        .setOrigin(0, 0)
        .setScale(0.05)
        .setScrollFactor(0);
    }

    if (window.item7 == 1) {
      this.add
        .image(5, 5, "berries_Strike")
        .setOrigin(0, 0)
        .setScale(0.05)
        .setScrollFactor(0);
    }

    if (window.item10 == 1) {
      this.add
        .image(5, 5, "bananas_Strike")
        .setOrigin(0, 0)
        .setScale(0.05)
        .setScrollFactor(0);
    }

    if (window.item8 == 1) {
      this.add
        .image(5, 5, "honey_Strike")
        .setOrigin(0, 0)
        .setScale(0.05)
        .setScrollFactor(0);
    }

    if (window.item9 == 1) {
      this.add
        .image(5, 5, "spinach_Strike")
        .setOrigin(0, 0)
        .setScale(0.05)
        .setScrollFactor(0);
    }

    if (window.item11 == 1) {
      this.add
        .image(5, 5, "ice_Cubes_Strike")
        .setOrigin(0, 0)
        .setScale(0.05)
        .setScrollFactor(0);
    }

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

  collect_Milk(player, item5) {
    console.log("collect_Milk");
    item5.disableBody(true, true);
    window.item5 = 1;
  }

  collect_Wheat_Powder(player, item6) {
    console.log("collect_Wheat_Powder");
    item6.disableBody(true, true);
    window.item6 = 1;
  }

  collect_Berries(player, item7) {
    console.log("collect_Berries");
    item7.disableBody(true, true);
    window.item7 = 1;
  }

  collect_Honey(player, item8) {
    console.log("collect_Honey");
    item8.disableBody(true, true);
    window.item8 = 1;
  }

  collect_Spinach(player, item9) {
    console.log("collect_Spinach");
    item9.disableBody(true, true);
    window.item9 = 1;
  }

  collect_Banana(player, item10) {
    console.log("collect_Banana");
    item10.disableBody(true, true);
    window.item10 = 1;
  }

  collect_Ice_Cubes(player, item11) {
    console.log("collect_Ice_Cubes");
    item11.disableBody(true, true);
    window.item11 = 1;
  }

  street_Map(player, tile) {
    console.log("street_Map function");
    let playerPos = {};
    playerPos.x = 2802;
    playerPos.y = 567;
    this.scene.start("street_Map", { player: playerPos });
  }
}
