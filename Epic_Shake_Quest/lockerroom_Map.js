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

    ///////tilesets////////
    this.load.image("wall4", "assets/allwall.png");
    this.load.image("deco16", "assets/Clothing_Store_32x32.png");
    this.load.image("deco17", "assets/defimon3.png");
    this.load.image("deco8", "assets/gather_decoration_1.21.png");
    this.load.image("deco3", "assets/gather_decoration_exterior_1.3.png");
    this.load.image("ground3", "assets/gather_floors_2_exploration.png");
    this.load.image("deco9", "assets/gather_games_1.1.png");
    this.load.image("deco5", "assets/Music_and_sport_32x32.png");
    this.load.image("wall1", "assets/nauticalWalls.png");

    ///////items////////
    this.load.image("blender_Done", "assets/blender_Done.png");
    this.load.image("measuring_Cup_Done", "assets/measuring_Cup_Done.png");

    ///////human////////
    this.load.spritesheet("human_1", "assets/human_1.png", {
      frameWidth: 30,
      frameHeight: 60,
    });

    this.load.spritesheet("human1_Jump", "assets/human1_jump.png", {
      frameWidth: 50,
      frameHeight: 60,
    });

    this.load.spritesheet("human_2", "assets/human_2.png", {
      frameWidth: 30,
      frameHeight: 61,
    });

    this.load.spritesheet("human2_Jump", "assets/human2_jump.png", {
      frameWidth: 50,
      frameHeight: 61,
    });

    ///////avatar////////
    this.load.spritesheet("avatar", "assets/avatar.png", {
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

    ///////sound////////
    this.load.audio("sound1", "assets/collect.mp3");
    this.load.audio("sound2", "assets/door_Open.mp3");
    this.load.audio("woohoo", "assets/woohoo.mp3");
  } // end of preload //

  create() {
    console.log("lockerroom_Map");

    this.time.addEvent({
      delya: 500,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
    });

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

    ///////tileset////////
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

    ///////sound////////
    this.sound1 = this.sound.add("sound1");
    this.sound2 = this.sound.add("sound2");
    this.woohoo = this.sound.add("woohoo");

    ///////item////////
    let cup1 = map.findObject("Object_Layer1", (obj) => obj.name === "cup1");

    if (window.item2 == 0) {
      this.item2 = this.physics.add
        .sprite(cup1.x, cup1.y, "cup")
        .play("cup_Anim")
        .setScale(1.5);
    }

    ///////human////////
    this.anims.create({
      key: "human1_Anim",
      frames: this.anims.generateFrameNumbers("human_1", { start: 0, end: 1 }),
      frameRate: 2.5,
      repeat: -1,
    });

    this.anims.create({
      key: "human1_Jump_Anim",
      frames: this.anims.generateFrameNumbers("human1_Jump", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    let human1 = map.findObject(
      "Object_Layer1",
      (obj) => obj.name === "human1"
    );

    if (window.human1_ChangeC) {
      this.human1 = this.physics.add
        .sprite(human1.x, human1.y, "human_1")
        .play("human1_Jump_Anim")
        .setScale(1.5);
    } else {
      this.human1 = this.physics.add
        .sprite(human1.x, human1.y, "human_1")
        .play("human1_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "human2_Anim",
      frames: this.anims.generateFrameNumbers("human_2", { start: 0, end: 1 }),
      frameRate: 2.5,
      repeat: -1,
    });

    this.anims.create({
      key: "human2_Jump_Anim",
      frames: this.anims.generateFrameNumbers("human2_Jump", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    let human2 = map.findObject(
      "Object_Layer1",
      (obj) => obj.name === "human2"
    );

    if (window.human2_ChangeC) {
      this.human2 = this.physics.add
        .sprite(human2.x, human2.y, "human_2")
        .play("human2_Jump_Anim")
        .setScale(1.5);
    } else {
      this.human2 = this.physics.add
        .sprite(human2.x, human2.y, "human_2")
        .play("human2_Anim")
        .setScale(1.5);
    }

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

    this.physics.add.overlap(this.player, this.item2, collect_Cup, null, this);

    ///////item appear////////
    if (window.itemAppear == 1) {
      this.physics.add.overlap(
        this.player,
        this.human1,
        this.human1_change,
        null,
        this
      );
    }

    if (window.itemAppear == 1) {
      this.physics.add.overlap(
        this.player,
        this.human2,
        this.human2_change,
        null,
        this
      );
    }

    this.scene.launch("showInventory");
  } // end of create //

  update() {
    ///////door////////
    if (
      this.player.x > 939 &&
      this.player.x < 1000 &&
      this.player.y < 480 &&
      this.player.y > 300
    ) {
      console.log("Door1");
      this.gym_Map();
    }

    if (
      this.player.x > 125 &&
      this.player.x < 295 &&
      this.player.y < 75 &&
      this.player.y > -24
    ) {
      console.log("Door4");
      this.pool_Map();
    }

    ///////ending////////
    if (
      window.human1_ChangeC == 1 &&
      window.human2_ChangeC == 1 &&
      window.human3_ChangeC == 1 &&
      window.human4_ChangeC == 1 &&
      window.human5_ChangeC == 1 &&
      window.human6_ChangeC == 1
    ) {
      console.log("goto endingScene");
      this.scene.start("endingScene");
    }

    ///////avatar movement////////
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

  ///////map////////
  gym_Map(player, tile) {
    console.log("gym_Map function");
    this.sound2.play();
    let playerPos = {};
    playerPos.x = 58;
    playerPos.y = 755;
    this.scene.start("gym_Map", { player: playerPos });
  }

  pool_Map(player, tile) {
    console.log("pool_Map function");
    this.sound2.play();
    let playerPos = {};
    playerPos.x = 177;
    playerPos.y = 557;
    this.scene.start("pool_Map", { player: playerPos });
  }

  ///////human change////////
  human1_change(avatar_PS, tile) {
    this.human1.play("human1_Jump_Anim").setScale(1.5);
    this.woohoo.play();
    window.human1_ChangeC = 1;
  }

  human2_change(player, tile) {
    this.human2.play("human2_Jump_Anim").setScale(1.5);
    this.woohoo.play();
    window.human2_ChangeC = 1;
  }
}
