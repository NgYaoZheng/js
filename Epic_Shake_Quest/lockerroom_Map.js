class lockerroom_Map extends Phaser.Scene {
  constructor() {
    super({ key: "lockerroom_Map" });
  }

  init(data) {
    this.player = data.player;
  }

  preload() {
    // Step 1, load JSON

    this.load.tilemapTiledJSON("world3", "assets/lockerroom_map.tmj");

    // Step 2 : Preload any images here
    this.load.image("wall4", "assets/allwall.png");
    this.load.image("deco16", "assets/Clothing_Store_32x32.png");
    this.load.image("deco17", "assets/defimon3.png");
    this.load.image("deco8", "assets/gather_decoration_1.21.png");
    this.load.image("deco3", "assets/gather_decoration_exterior_1.3.png");
    this.load.image("ground3", "assets/gather_floors_2_exploration.png");
    this.load.image("deco9", "assets/gather_games_1.1.png");
    this.load.image("deco5", "assets/Music_and_sport_32x32.png");
    this.load.image("wall1", "assets/nauticalWalls.png");

    this.load.spritesheet("cup", "assets/cup.png", {
      frameWidth: 20,
      frameHeight: 35,
    });

    this.load.spritesheet("human_1", "assets/human_1.png", {
      frameWidth: 30,
      frameHeight: 49,
    });

    this.load.spritesheet("human1_Jump", "assets/human1_jump.png", {
      frameWidth: 50,
      frameHeight: 60,
    });

    this.load.spritesheet("human_2", "assets/human_2.png", {
      frameWidth: 30,
      frameHeight: 50,
    });

    this.load.spritesheet("human2_Jump", "assets/human2_jump.png", {
      frameWidth: 50,
      frameHeight: 61,
    });

    this.load.spritesheet("avatar", "assets/avatar.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

  } // end of preload //

  create() {
    console.log("animationScene");

    //Step 3 - Create the map from main

    let map = this.make.tilemap({ key: "world3" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload

    let wall4Tiles = map.addTilesetImage("allwall", "wall4");
    let deco16Tiles = map.addTilesetImage("Clothing_Store_32x32", "deco16");
    let deco17Tiles = map.addTilesetImage("defimon3", "deco17");
    let deco8Tiles = map.addTilesetImage("gather_decoration_1.21", "deco8");
    let deco3Tiles = map.addTilesetImage(
      "gather_decoration_exterior_1.3",
      "deco3"
    );
    let ground3Tiles = map.addTilesetImage(
      "gather_floors_2_exploration",
      "ground3"
    );
    let deco9Tiles = map.addTilesetImage("gather_games_1.1", "deco9");
    let deco5Tiles = map.addTilesetImage("Music_and_sport_32x32", "deco5");
    let wall1Tiles = map.addTilesetImage("nauticalWalls", "wall1");

    //Step 5  create an array of tiles
    let tilesArray = [
      wall4Tiles,
      deco16Tiles,
      deco17Tiles,
      deco8Tiles,
      deco3Tiles,
      ground3Tiles,
      deco9Tiles,
      deco5Tiles,
      wall1Tiles,
    ];

    // Step 6  Load in layers by layers
    this.ground_Layer = map.createLayer("ground_Layer", tilesArray, 0, 0);
    this.wall_Layer = map.createLayer("wall_Layer", tilesArray, 0, 0);
    this.locker_Layer = map.createLayer("locker_Layer", tilesArray, 0, 0);
    this.decoration_Layer = map.createLayer(
      "decoration_Layer",
      tilesArray,
      0,
      0
    );
    this.other_Layer = map.createLayer("other_Layer", tilesArray, 0, 0);

    this.anims.create({
      key: "cup_Anim",
      frames: this.anims.generateFrameNumbers("cup", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    let cup1 = map.findObject("Object_Layer1", (obj) => obj.name === "cup1");

    if (window.item2 == 0) {
      this.item2 = this.physics.add
        .sprite(cup1.x, cup1.y, "cup")
        .play("cup_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "human1_Anim",
      frames: this.anims.generateFrameNumbers("human_1", { start: 0, end: 1 }),
      frameRate: 2.5,
      repeat: -1,
    });

    let human1 = map.findObject(
      "Object_Layer1",
      (obj) => obj.name === "human1"
    );

    this.human1 = this.physics.add
      .sprite(human1.x, human1.y, "human_1")
      .play("human1_Anim")
      .setScale(1.5);

    this.anims.create({
      key: "human1_Jump_Anim",
      frames: this.anims.generateFrameNumbers("human1_Jump", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "human2_Anim",
      frames: this.anims.generateFrameNumbers("human_2", { start: 0, end: 1 }),
      frameRate: 2.5,
      repeat: -1,
    });

    let human2 = map.findObject(
      "Object_Layer1",
      (obj) => obj.name === "human2"
    );

    this.human2 = this.physics.add
      .sprite(human2.x, human2.y, "human_2")
      .play("human2_Anim")
      .setScale(1.5);

    this.anims.create({
      key: "human2_Jump_Anim",
      frames: this.anims.generateFrameNumbers("human2_Jump", {
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
    var key4Down = this.input.keyboard.addKey(52);
    var key5Down = this.input.keyboard.addKey(53);
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

    this.wall_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.wall_Layer);
    this.locker_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.locker_Layer);
    this.decoration_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.decoration_Layer);
    this.other_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.other_Layer);

    this.physics.add.overlap(
      this.player,
      this.item2,
      this.collect_Cup,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.human1,
      this.human1_change,
      null,
      this
    );
    this.physics.add.overlap(
      this.player,
      this.human2,
      this.human2_change,
      null,
      this
    );
  } // end of create //

  update() {
    if (
      this.player.x > 945 &&
      this.player.x < 972 &&
      this.player.y < 450 &&
      this.player.y > 270
    ) {
      console.log("Door1");
      this.gym_Map();
    }

    if (
      this.player.x > 125 &&
      this.player.x < 295 &&
      this.player.y < 47 &&
      this.player.y > -24
    ) {
      console.log("Door4");
      this.pool_Map();
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

  collect_Cup(player, item2) {
    console.log("collect_Cup");
    item2.disableBody(true, true);
    window.item2 = 1;
  }

  gym_Map(player, tile) {
    console.log("gym_Map function");
    let playerPos = {};
    playerPos.x = 58;
    playerPos.y = 755;
    this.scene.start("gym_Map", { player: playerPos });
  }

  pool_Map(player, tile) {
    console.log("pool_Map function");
    let playerPos = {};
    playerPos.x = 177;
    playerPos.y = 557;
    this.scene.start("pool_Map", { player: playerPos });
  }

  human1_change(avatar_PS_player, tile) {
    this.human1.play("human1_Jump_Anim").setScale(1.5);
  }

  human2_change(player, tile) {
    this.human2.play("human2_Jump_Anim").setScale(1.5);
  }
}
