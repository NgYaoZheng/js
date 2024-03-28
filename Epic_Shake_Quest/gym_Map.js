class gym_Map extends Phaser.Scene {
  constructor() {
    super({ key: "gym_Map" });
  }

  init(data) {
    this.player = data.player;
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world1", "assets/gym_map.tmj");

    // Step 2 : Preload any images here
    ///////tile sets////////
    this.load.image("deco1", "assets/Basement_32x32.png");
    this.load.image("deco2", "assets/Classroom_and_library_32x32.png");
    this.load.image("deco3", "assets/gather_decoration_exterior_1.3.png");
    this.load.image("gym", "assets/Gym_32x32.png");
    this.load.image("deco4", "assets/Hospital_32x32.png");
    this.load.image("deco5", "assets/Music_and_sport_32x32.png");
    this.load.image("wall1", "assets/nauticalWalls.png");
    this.load.image("wall2", "assets/walltexture.png");
    this.load.image("ground", "assets/Wood.png");

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

    ///////humans////////
    this.load.spritesheet("human_3", "assets/human_3.png", {
      frameWidth: 30,
      frameHeight: 61,
    });

    this.load.spritesheet("human3_Jump", "assets/human3_jump.png", {
      frameWidth: 50,
      frameHeight: 61,
    });

    this.load.spritesheet("human_4", "assets/human_4.png", {
      frameWidth: 30,
      frameHeight: 64,
    });

    this.load.spritesheet("human4_Jump", "assets/human4_jump.png", {
      frameWidth: 50,
      frameHeight: 64,
    });

    this.load.spritesheet("human_5", "assets/human_5.png", {
      frameWidth: 30,
      frameHeight: 60,
    });

    this.load.spritesheet("human5_Jump", "assets/human5_jump.png", {
      frameWidth: 50,
      frameHeight: 60,
    });

    this.load.spritesheet("avatar", "assets/avatar.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  } // end of preload //

  create() {
    console.log("gym_Map");

    this.time.addEvent({
      delya: 500,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
    });

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world1" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let deco1Tiles = map.addTilesetImage("Basement_32x32", "deco1");
    let deco2Tiles = map.addTilesetImage(
      "Classroom_and_library_32x32",
      "deco2"
    );
    let deco3Tiles = map.addTilesetImage(
      "gather_decoration_exterior_1.3",
      "deco3"
    );
    let gymTiles = map.addTilesetImage("Gym_32x32", "gym");
    let deco4Tiles = map.addTilesetImage("Hospital_32x32", "deco4");
    let deco5Tiles = map.addTilesetImage("Music_and_sport_32x32", "deco5");
    let wall1Tiles = map.addTilesetImage("nauticalWalls", "wall1");
    let wall2Tiles = map.addTilesetImage("walltexture", "wall2");
    let groundTiles = map.addTilesetImage("Wood", "ground");

    //Step 5  create an array of tiles
    let tilesArray = [
      deco1Tiles,
      deco2Tiles,
      deco3Tiles,
      gymTiles,
      deco4Tiles,
      deco5Tiles,
      wall1Tiles,
      wall2Tiles,
      groundTiles,
    ];

    // Step 6  Load in layers by layers
    ///////tile sets////////

    this.ground_Layer = map.createLayer("ground_Layer", tilesArray, 0, 0);
    this.wall_Layer = map.createLayer("wall_Layer", tilesArray, 0, 0);
    this.gym1_Layer = map.createLayer("gym1_Layer", tilesArray, 0, 0);
    this.gym2_Layer = map.createLayer("gym2_Layer", tilesArray, 0, 0);
    this.gym3_Layer = map.createLayer("gym3_Layer", tilesArray, 0, 0);
    this.decoration_Layer = map.createLayer(
      "decoration_Layer",
      tilesArray,
      0,
      0
    );

    ///////sounds////////
    this.sound1 = this.sound.add("sound1");
    this.sound2 = this.sound.add("sound2");
    this.woohoo = this.sound.add("woohoo");

    ///////items////////
    let blender1 = map.findObject(
      "Object_Layer1",
      (obj) => obj.name === "blender1"
    );

    if (window.item1 == 0) {
      this.item1 = this.physics.add
        .sprite(blender1.x, blender1.y, "blender")
        .play("blender_Anim")
        .setScale(1.5);
    }

    let measuring_Cup1 = map.findObject(
      "Object_Layer1",
      (obj) => obj.name === "measuring_Cup1"
    );

    if (window.item4 == 0) {
      this.item4 = this.physics.add
        .sprite(measuring_Cup1.x, measuring_Cup1.y, "measuring_Cup")
        .play("measuring_Cup_Anim")
        .setScale(1.5);
    }

    ////// humans //////
    this.anims.create({
      key: "human3_Anim",
      frames: this.anims.generateFrameNumbers("human_3", { start: 0, end: 1 }),
      frameRate: 2.5,
      repeat: -1,
    });

    this.anims.create({
      key: "human3_Jump_Anim",
      frames: this.anims.generateFrameNumbers("human3_Jump", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    let human3 = map.findObject(
      "Object_Layer1",
      (obj) => obj.name === "human3"
    );

    if (window.human3_ChangeC) {
      this.human3 = this.physics.add
        .sprite(human3.x, human3.y, "human_3")
        .play("human3_Jump_Anim")
        .setScale(1.5);
    } else {
      this.human3 = this.physics.add
        .sprite(human3.x, human3.y, "human_3")
        .play("human3_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "human4_Anim",
      frames: this.anims.generateFrameNumbers("human_4", { start: 0, end: 1 }),
      frameRate: 2.5,
      repeat: -1,
    });

    this.anims.create({
      key: "human4_Jump_Anim",
      frames: this.anims.generateFrameNumbers("human4_Jump", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    let human4 = map.findObject(
      "Object_Layer1",
      (obj) => obj.name === "human4"
    );

    if (window.human4_ChangeC) {
      this.human4 = this.physics.add
        .sprite(human4.x, human4.y, "human_4")
        .play("human4_Jump_Anim")
        .setScale(1.5);
    } else {
      this.human4 = this.physics.add
        .sprite(human4.x, human4.y, "human_4")
        .play("human4_Anim")
        .setScale(1.5);
    }

    this.anims.create({
      key: "human5_Anim",
      frames: this.anims.generateFrameNumbers("human_5", { start: 0, end: 1 }),
      frameRate: 2.5,
      repeat: -1,
    });

    this.anims.create({
      key: "human5_Jump_Anim",
      frames: this.anims.generateFrameNumbers("human5_Jump", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    let human5 = map.findObject(
      "Object_Layer1",
      (obj) => obj.name === "human5"
    );

    if (window.human5_ChangeC) {
      this.human5 = this.physics.add
        .sprite(human5.x, human5.y, "human_5")
        .play("human5_Jump_Anim")
        .setScale(1.5);
    } else {
      this.human5 = this.physics.add
        .sprite(human5.x, human5.y, "human_5")
        .play("human5_Anim")
        .setScale(1.5);
    }

    ///////avatar movements////////
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

    console.log(this.player.x, this.player.y);
    this.player = this.physics.add
      .sprite(this.player.x, this.player.y, "avatar")
      .setScale(1.5);
    window.player = this.player

      .setSize(this.player.width * 0.3, this.player.height * 0.3)
      .setOffset(22, 45);

    ///////overlaps////////
    this.physics.add.overlap(
      this.player,
      this.item1,
      collect_Blender,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.item4,
      collect_Measuring_Cup,
      null,
      this
    );

    if (window.itemAppear == 1) {
      this.physics.add.overlap(
        this.player,
        this.human3,
        this.human3_change,
        null,
        this
      );
    }

    if (window.itemAppear == 1) {
      this.physics.add.overlap(
        this.player,
        this.human4,
        this.human4_change,
        null,
        this
      );
    }

    if (window.itemAppear == 1) {
      this.physics.add.overlap(
        this.player,
        this.human5,
        this.human5_change,
        null,
        this
      );
    }

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
    // // camera follow player
    this.cameras.main.startFollow(this.player);

    this.wall_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.wall_Layer);
    this.gym3_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.gym3_Layer);
    this.decoration_Layer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.player, this.decoration_Layer);

    this.scene.launch("showInventory");
  } // end of create //

  update() {
    ///////doors////////
    if (
      this.player.x > 13 &&
      this.player.x < 58 &&
      this.player.y < 830 &&
      this.player.y > 665
    ) {
      console.log("Door1");
      this.lockerroom_Map();
    }

    if (
      this.player.x > 1300 &&
      this.player.x < 1400 &&
      this.player.y < 830 &&
      this.player.y > 665
    ) {
      console.log("Door2");
      this.kitchen_Map();
    }

    if (
      window.item1 == 1 &&
      window.item2 == 1 &&
      window.item3 == 1 &&
      window.item4 == 1
    ) {
      if (
        this.player.x > 545 &&
        this.player.x < 750 &&
        this.player.y < 1263 &&
        this.player.y > 1199
      ) {
        console.log("Door3");
        this.street_Map();
      }
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

  ///////maps////////
  new_Map() {
    console.log("Unlock new scenes");
    this.scene_unlock.start();
  }

  lockerroom_Map(player, tile) {
    console.log("lockerroom_Map function");
    this.sound2.play();
    let playerPos = {};
    playerPos.x = 921;
    playerPos.y = 411;
    this.scene.start("lockerroom_Map", { player: playerPos });
  }

  kitchen_Map(player, tile) {
    console.log("kitchen_Map function");
    this.sound2.play();
    this.scene.start("kitchen_Map");
  }

  street_Map(player, tile) {
    let playerPos = {};
    this.sound2.play();
    playerPos.x = 515;
    playerPos.y = 545;
    this.scene.start("street_Map", { player: playerPos });
  }

  ///////human change////////
  human3_change(player, tile) {
    this.human3.play("human3_Jump_Anim").setScale(1.5);
    this.woohoo.play();
    window.human3_ChangeC = 1;
  }

  human4_change(player, tile) {
    this.human4.play("human4_Jump_Anim").setScale(1.5);
    this.woohoo.play();
    window.human4_ChangeC = 1;
  }

  human5_change(player, tile) {
    this.human5.play("human5_Jump_Anim").setScale(1.5);
    this.woohoo.play();
    window.human5_ChangeC = 1;
  }
}
