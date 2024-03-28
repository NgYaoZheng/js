class kitchen_Map extends Phaser.Scene {
  constructor() {
    super({ key: "kitchen_Map" });
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world2", "assets/kitchen_map.tmj");

    // Step 2 : Preload any images here
    ///////tile sets////////
    this.load.image("deco6", "assets/Birthday_party_32x32.png");
    this.load.image("deco7", "assets/gather_chairs_1.3.png");
    this.load.image("deco8", "assets/gather_decoration_1.21.png");
    this.load.image("deco9", "assets/gather_games_1.1.png");
    this.load.image("wall3", "assets/gather_interior_walls_1.6.png");
    this.load.image("deco10", "assets/gather_tables_2.1.png");
    this.load.image("kitchen", "assets/Kitchen_32x32.png");
    this.load.image("ground2", "assets/TileAndStone.png");
    this.load.image("wall2", "assets/walltexture.png");

    ///////items images////////
    this.load.image("p_Measuring_Cup", "assets/protein_Measuring_Cup.png");
    this.load.image("p_Blender", "assets/protein_Blender.png");
    this.load.image("p_Cup", "assets/protein_Cup.png");
    this.load.image("p_Spoon", "assets/protein_Measuring_Spoon.png");

    ///////avatar////////
    this.load.spritesheet("avatar", "assets/avatar.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("avatar_PS", "assets/protein_Shake_Avatar.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    ///////images////////
    this.load.image("note1", "assets/note1.png");
    this.load.image("note2", "assets/note2.png");
    this.load.image("note3", "assets/note3.png");
    this.load.image("note4", "assets/note4.png");
    this.load.image("blender_Done", "assets/blender_Done.png");
    this.load.image("measuring_Cup_Done", "assets/measuring_Cup_Done.png");
    this.load.image("spoon_Done", "assets/spoon_Done.png");
    this.load.image("cup_Done", "assets/cup_Done.png");

    ///////sounds////////
    this.load.audio("sound2", "assets/door_Open.mp3");
    this.load.audio("sound3", "assets/protein_Shake.mp3");
  } // end of preload //

  create() {
    console.log("kitchen_Map");

    this.time.addEvent({
      delya: 500,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
    });

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world2" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload

    let deco6Tiles = map.addTilesetImage("Birthday_party_32x32", "deco6");
    let deco7Tiles = map.addTilesetImage("gather_chairs_1.3", "deco7");
    let deco8Tiles = map.addTilesetImage("gather_decoration_1.21", "deco8");
    let deco9Tiles = map.addTilesetImage("gather_games_1.1", "deco9");
    let wall3Tiles = map.addTilesetImage("gather_interior_walls_1.6", "wall3");
    let deco10Tiles = map.addTilesetImage("gather_tables_2.1", "deco10");
    let kitchenTiles = map.addTilesetImage("Kitchen_32x32", "kitchen");
    let ground2Tiles = map.addTilesetImage("TileAndStone", "ground2");
    let wall2Tiles = map.addTilesetImage("walltexture", "wall2");

    //Step 5  create an array of tiles
    let tilesArray = [
      deco6Tiles,
      deco7Tiles,
      deco8Tiles,
      deco9Tiles,
      wall3Tiles,
      deco10Tiles,
      kitchenTiles,
      ground2Tiles,
      wall2Tiles,
    ];

    // Step 6  Load in layers by layers

    ///////tilesets////////
    this.ground_Layer = map.createLayer("ground_Layer", tilesArray, 0, 0);
    this.wall_Layer = map.createLayer("wall_Layer", tilesArray, 0, 0);
    this.kitchen_Layer = map.createLayer("kitchen_Layer", tilesArray, 0, 0);
    this.kitchen2_Layer = map.createLayer("kitchen2_Layer", tilesArray, 0, 0);
    this.decoration_Layer = map.createLayer(
      "decoration_Layer",
      tilesArray,
      0,
      0
    );

    ///////sound////////
    this.sound2 = this.sound.add("sound2");
    this.sound3 = this.sound.add("sound3");

    ///////items////////
    this.p_Measuring_Cup = this.add
      .image(325, 250, "p_Measuring_Cup")
      .setOrigin(0, 0)
      .setScale(1.5);
    this.p_Measuring_Cup.setVisible(false);

    this.p_Blender = this.add
      .image(200, 175, "p_Blender")
      .setOrigin(0, 0)
      .setScale(1.5);
    this.p_Blender.setVisible(false);

    this.p_Cup = this.add
      .image(225, 230, "p_Cup")
      .setOrigin(0, 0)
      .setScale(1.5);
    this.p_Cup.setVisible(false);

    this.p_Spoon = this.add
      .image(310, 195, "p_Spoon")
      .setOrigin(0, 0)
      .setScale(1.5);
    this.p_Spoon.setVisible(false);

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

    this.anims.create({
      key: "avatar_PS-up",
      frames: this.anims.generateFrameNumbers("avatar_PS", {
        start: 105,
        end: 112,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "avatar_PS-left",
      frames: this.anims.generateFrameNumbers("avatar_PS", {
        start: 118,
        end: 125,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "avatar_PS-down",
      frames: this.anims.generateFrameNumbers("avatar_PS", {
        start: 131,
        end: 138,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "avatar_PS-right",
      frames: this.anims.generateFrameNumbers("avatar_PS", {
        start: 144,
        end: 151,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.player = this.physics.add.sprite(75, 379, "avatar").setScale(1.5);
    window.player = this.player

      .setSize(this.player.width * 0.3, this.player.height * 0.3)
      .setOffset(22, 45);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
    // // camera follow player
    this.cameras.main.startFollow(this.player);

    this.wall_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.wall_Layer);
    this.kitchen_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.kitchen_Layer);
    this.kitchen2_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.kitchen2_Layer);
    this.decoration_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.decoration_Layer);

    this.scene.launch("showInventory");
  } // end of create //

  ///////doors////////
  update() {
    if (
      this.player.x > 20 &&
      this.player.x < 69 &&
      this.player.y < 445 &&
      this.player.y > 277
    ) {
      console.log("Door2");
      this.gym_Map();
    }

    ///////item appear////////
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
        this.player.x > 178 &&
        this.player.x < 400 &&
        this.player.y < 323 &&
        this.player.y > 143
      ) {
        this.sound3.play();
        window.itemAppear = 1;
        window.character_change = 1;

        updateInventory.call(this);
      }

      if (window.itemAppear == 1) {
        this.item1_appear();
        this.item2_appear(), this.item3_appear(), this.item4_appear();
      }
    }

    ///////avatar movements////////
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-270);

      if (window.character_change) {
        this.player.anims.play("avatar_PS-left", true);
      } else {
        this.player.anims.play("avatar-left", true);
      }
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(270);

      if (window.character_change) {
        this.player.anims.play("avatar_PS-right", true);
      } else {
        this.player.anims.play("avatar-right", true);
      }
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-270);
      if (window.character_change) {
        this.player.anims.play("avatar_PS-up", true);
      } else {
        this.player.anims.play("avatar-up", true);
      }
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(270);
      if (window.character_change) {
        this.player.anims.play("avatar_PS-down", true);
      } else {
        this.player.anims.play("avatar-down", true);
      }
    } else {
      this.player.setVelocity(0);
      this.player.anims.stop();
    }
  } // end of update //

  ///////maps////////
  gym_Map(player, tile) {
    console.log("gym_Map function");
    this.sound2.play();
    let playerPos = {};
    playerPos.x = 1254;
    playerPos.y = 755;
    this.scene.start("gym_Map", { player: playerPos });
  }

  ///////items appear////////
  item1_appear(player, item) {
    this.p_Measuring_Cup.setVisible(true);
  }

  item2_appear(player, item) {
    this.p_Blender.setVisible(true);
  }

  item3_appear(player, item) {
    this.p_Cup.setVisible(true);
  }

  item4_appear(player, item) {
    this.p_Spoon.setVisible(true);
  }
}
