class street_Map extends Phaser.Scene {
  constructor() {
    super({ key: "street_Map" });
  }

  init(data) {
    this.player = data.player;
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world6", "assets/street_map.tmj");

    // Step 2 : Preload any images here
    this.load.image("deco13", "assets/defimon1.png");
    this.load.image("deco14", "assets/defimon2.png");
    this.load.image("building1", "assets/Floor_Modular_Buildings_32x32.png");
    this.load.image("deco15", "assets/gather_plants_1.2.png");
    this.load.image("deco4", "assets/Hospital_32x32.png");
    this.load.image("building2", "assets/School_32x32.png");
    this.load.image(
      "building3",
      "assets/Shopping_Center_and_Markets_32x32.png"
    );
    this.load.image("street", "assets/Street32x32.png");
    this.load.image("building4", "assets/Worksite_32x32.png");

    this.load.spritesheet("avatar", "assets/avatar.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    // this.load.spritesheet('avatar_Protein_Shake', 'assets/protein_Shake_Avatar.png',{ frameWidth:64, frameHeight:64 });
  } // end of preload //

  create() {
    console.log("animationScene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world6" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let deco13Tiles = map.addTilesetImage("defimon1", "deco13");
    let deco14Tiles = map.addTilesetImage("defimon2", "deco14");
    let building1Tiles = map.addTilesetImage(
      "Floor_Modular_Buildings_32x32",
      "building1"
    );
    let deco15Tiles = map.addTilesetImage("gather_plants_1.2", "deco15");
    let deco4Tiles = map.addTilesetImage("Hospital_32x32", "deco4");
    let building2Tiles = map.addTilesetImage("School_32x32", "building2");
    let building3Tiles = map.addTilesetImage(
      "Shopping_Center_and_Markets_32x32",
      "building3"
    );
    let streetTiles = map.addTilesetImage("Street32x32", "street");
    let building4Tiles = map.addTilesetImage("Worksite_32x32", "building4");

    //Step 5  create an array of tiles
    let tilesArray = [
      deco13Tiles,
      deco14Tiles,
      building1Tiles,
      deco15Tiles,
      deco4Tiles,
      building2Tiles,
      building3Tiles,
      streetTiles,
      building4Tiles,
    ];

    // Step 6  Load in layers by layers
    this.ground_Layer = map.createLayer("ground_Layer", tilesArray, 0, 0);
    this.street_Layer = map.createLayer("street_Layer", tilesArray, 0, 0);
    this.path_Layer = map.createLayer("path_Layer", tilesArray, 0, 0);
    this.building_Layer = map.createLayer("building_Layer", tilesArray, 0, 0);
    this.signage_Layer = map.createLayer("signage_Layer", tilesArray, 0, 0);
    this.decoration_Layer = map.createLayer(
      "decoration_Layer",
      tilesArray,
      0,
      0
    );
    // this.decoration2_Layer = map.createLayer("decoration2_Layer", tilesArray, 0, 0);

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
    var key7Down = this.input.keyboard.addKey(55);

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

    key7Down.on(
      "down",
      function () {
        console.log("Key 7 pressed");
        this.scene.start("market_Map");
      },
      this
    );

    this.player = this.physics.add
      .sprite(this.player.x, this.player.y, "avatar")
      .setScale(1.5);
    window.player = this.player

      .setSize(this.player.width * 0.3, this.player.height * 0.3)
      .setOffset(22, 45);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
    // // camera follow player
    this.cameras.main.startFollow(this.player);

    this.building_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.building_Layer);
    this.signage_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.signage_Layer);
    this.decoration_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.decoration_Layer);
  } // end of create //

  update() {
    if (
      this.player.x > 475 &&
      this.player.x < 543 &&
      this.player.y < 542 &&
      this.player.y > 466
    ) {
      console.log("Door3");
      this.gym_Map();
    }

    if (
      this.player.x > 2770 &&
      this.player.x < 2838 &&
      this.player.y < 533 &&
      this.player.y > 428
    ) {
      console.log("Door6");
      this.market_Map();
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

  gym_Map(player, tile) {
    console.log("gym_Map function");
    let playerPos = {};
    playerPos.x = 641;
    playerPos.y = 1191;
    this.scene.start("gym_Map", { player: playerPos });
  }

  market_Map(player, tile) {
    console.log("market_Map function");
    this.scene.start("market_Map");
  }
}
