class pool_Map extends Phaser.Scene {
  constructor() {
    super({ key: "pool_Map" });
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world5", "assets/pool_map.tmj");

    // Step 2 : Preload any images here

    ///////tileset////////
    this.load.image("bathroom", "assets/Bathroom_32x32.png");
    this.load.image("deco3", "assets/gather_decoration_exterior_1.3.png");
    this.load.image("deco9", "assets/gather_games_1.1.png");
    this.load.image("wall3", "assets/gather_interior_walls_1.6.png");
    this.load.image("deco11", "assets/gather_islands_3.alpha.png");
    this.load.image("gym", "assets/Gym_32x32.png");
    this.load.image("wall5", "assets/IglooWalls.png");
    this.load.image("ground2", "assets/TileAndStone.png");

    ///////human////////
    this.load.spritesheet("human_6", "assets/human_6.png", {
      frameWidth: 30,
      frameHeight: 60,
    });

    this.load.spritesheet("human6_Jump", "assets/human6_jump.png", {
      frameWidth: 50,
      frameHeight: 60,
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
    console.log("pool_Map");

    this.time.addEvent({
      delya: 500,
      callback: updateInventory,
      callbackScope: this,
      loop: false,
    });

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

    ///////tileset////////
    this.ground_Layer = map.createLayer("ground_Layer", tilesArray, 0, 0);
    this.wall_Layer = map.createLayer("wall_Layer", tilesArray, 0, 0);
    this.pool_Layer = map.createLayer("pool_Layer", tilesArray, 0, 0);
    this.decoration_Layer = map.createLayer(
      "decoration_Layer",
      tilesArray,
      0,
      0
    );

    ///////sound////////
    this.sound1 = this.sound.add("sound1");
    this.sound2 = this.sound.add("sound2");
    this.woohoo = this.sound.add("woohoo");

    ///////item////////
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

    ///////human////////
    this.anims.create({
      key: "human6_Anim",
      frames: this.anims.generateFrameNumbers("human_6", { start: 0, end: 1 }),
      frameRate: 2.5,
      repeat: -1,
    });

    this.anims.create({
      key: "human6_Jump_Anim",
      frames: this.anims.generateFrameNumbers("human6_Jump", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    let human6 = map.findObject(
      "Object_Layer1",
      (obj) => obj.name === "human6"
    );

    if (window.human6_ChangeC) {
      this.human6 = this.physics.add
        .sprite(human6.x, human6.y, "human_6")
        .play("human6_Jump_Anim")
        .setScale(1.5);
    } else {
      this.human6 = this.physics.add
        .sprite(human6.x, human6.y, "human_6")
        .play("human6_Anim")
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

    this.player = this.physics.add.sprite(171, 557, "avatar").setScale(1.5);
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

    ///////overlaps////////
    this.physics.add.overlap(
      this.player,
      this.item3,
      collect_Spoon,
      null,
      this
    );

    if (window.itemAppear == 1) {
      this.physics.add.overlap(
        this.player,
        this.human6,
        this.human6_change,
        null,
        this
      );
    }

    this.scene.launch("showInventory");
  } // end of create //

  ///////door////////
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
  lockerroom_Map(player, tile) {
    console.log("lockerroom_Map function");
    this.sound2.play();
    let playerPos = {};
    playerPos.x = 212;
    playerPos.y = 80;
    this.scene.start("lockerroom_Map", { player: playerPos });
  }

  ///////human change////////
  human6_change(player, tile) {
    this.human6.play("human6_Jump_Anim").setScale(1.5);
    this.woohoo.play();
    window.human6_ChangeC = 1;
  }
}
