class pool_Map extends Phaser.Scene {
  constructor() {
    super({ key: "pool_Map" });
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world5", "assets/pool_map.tmj");

    // Step 2 : Preload any images here
    this.load.image("bathroom", "assets/Bathroom_32x32.png");
    this.load.image("deco3", "assets/gather_decoration_exterior_1.3.png");
    this.load.image("deco9", "assets/gather_games_1.1.png");
    this.load.image("wall3", "assets/gather_interior_walls_1.6.png");
    this.load.image("deco11", "assets/gather_islands_3.alpha.png");
    this.load.image("gym", "assets/Gym_32x32.png");
    this.load.image("wall5", "assets/IglooWalls.png");
    this.load.image("ground2", "assets/TileAndStone.png");

    this.load.spritesheet("spoon", "assets/measuring_Spoon.png", {
      frameWidth: 28,
      frameHeight: 33,
    });

    this.load.spritesheet("human_6", "assets/human_6.png", {
      frameWidth: 30,
      frameHeight: 49,
    });

    this.load.spritesheet("human6_Jump", "assets/human6_jump.png", {
      frameWidth: 50,
      frameHeight: 60,
    });

    this.load.spritesheet("avatar", "assets/avatar.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    // this.load.spritesheet('avatar_Protein_Shake', 'assets/protein_Shake_Avatar.png',{ frameWidth:64, frameHeight:64 });
  } // end of preload //

  create() {
    console.log("animationScene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world5" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload

    let bathroomTiles = map.addTilesetImage("Bathroom_32x32", "bathroom");
    let deco3Tiles = map.addTilesetImage(
      "gather_decoration_exterior_1.3",
      "deco3"
    );
    let deco9Tiles = map.addTilesetImage("gather_games_1.1", "deco9");
    let wall3Tiles = map.addTilesetImage("gather_interior_walls_1.6", "wall3");
    let deco11Tiles = map.addTilesetImage("gather_islands_3.alpha", "deco11");
    let gymTiles = map.addTilesetImage("Gym_32x32", "gym");
    let wall5Tiles = map.addTilesetImage("IglooWalls", "wall5");
    let ground2Tiles = map.addTilesetImage("TileAndStone", "ground2");

    //Step 5  create an array of tiles
    let tilesArray = [
      bathroomTiles,
      deco3Tiles,
      deco9Tiles,
      wall3Tiles,
      deco11Tiles,
      gymTiles,
      wall5Tiles,
      ground2Tiles,
    ];

    // Step 6  Load in layers by layers
    this.ground_Layer = map.createLayer("ground_Layer", tilesArray, 0, 0);
    this.wall_Layer = map.createLayer("wall_Layer", tilesArray, 0, 0);
    this.pool_Layer = map.createLayer("pool_Layer", tilesArray, 0, 0);
    this.decoration_Layer = map.createLayer(
      "decoration_Layer",
      tilesArray,
      0,
      0
    );

    this.anims.create({
      key: "spoon_Anim",
      frames: this.anims.generateFrameNumbers("spoon", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let spoon1 = map.findObject(
      "Object_Layer1",
      (obj) => obj.name === "spoon1"
    );

    if (window.item3 == 0) {
      this.item3 = this.physics.add
        .sprite(spoon1.x, spoon1.y, "spoon")
        .play("spoon_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "human6_Anim",
      frames: this.anims.generateFrameNumbers("human_6", { start: 0, end: 1 }),
      frameRate: 2.5,
      repeat: -1,
    });

    let human6 = map.findObject(
      "Object_Layer1",
      (obj) => obj.name === "human6"
    );

    this.human6 = this.physics.add
      .sprite(human6.x, human6.y, "human_6")
      .play("human6_Anim")
      .setScale(1.5);

    this.anims.create({
      key: "human6_Jump_Anim",
      frames: this.anims.generateFrameNumbers("human6_Jump", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

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

    var key1Down = this.input.keyboard.addKey(49);
    var key2Down = this.input.keyboard.addKey(50);
    var key3Down = this.input.keyboard.addKey(51);
    var key4Down = this.input.keyboard.addKey(52);
    var key6Down = this.input.keyboard.addKey(54);
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
    key6Down.on(
      "down",
      function () {
        console.log("Key 6 pressed");
        this.scene.start("street_Map");
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

    this.player = this.physics.add.sprite(117, 557, "avatar").setScale(1.5);
    window.player = this.player

      .setSize(this.player.width * 0.3, this.player.height * 0.3)
      .setOffset(22, 45);

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
    // // camera follow player
    this.cameras.main.startFollow(this.player);

    this.wall_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.wall_Layer);
    this.pool_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.pool_Layer);
    this.decoration_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.decoration_Layer);

    this.physics.add.overlap(
      this.player,
      this.item3,
      this.collect_Spoon,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.human6,
      this.human6_change,
      null,
      this
    );
  } // end of create //

  update() {
    if (
      this.player.x > 78 &&
      this.player.x < 280 &&
      this.player.y < 634 &&
      this.player.y > 593
    ) {
      console.log("Door4");
      this.lockerroom_Map();
    }

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
  collect_Spoon(player, item3) {
    console.log("collect_Spoon");
    item3.disableBody(true, true);
    window.item3 = 1;
  }

  lockerroom_Map(player, tile) {
    console.log("lockerroom_Map function");
    let playerPos = {};
    playerPos.x = 212;
    playerPos.y = 68;
    this.scene.start("lockerroom_Map", { player: playerPos });
  }

  human6_change(player, tile) {
    this.human6.play("human6_Jump_Anim").setScale(1.5);
  }
}
