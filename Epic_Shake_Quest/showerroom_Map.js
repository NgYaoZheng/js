
class showerroom_Map extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'showerroom_Map' });
    }
    init(data) {
        this.player = data.player
    }


    preload() {

        // Step 1, load JSON
        this.load.tilemapTiledJSON("world4", "assets/showerroom_map.tmj");

        // Step 2 : Preload any images here
        this.load.image("bathroom", "assets/Bathroom_32x32.png");
        this.load.image("deco12", "assets/Conference_Hall_32x32.png");
        this.load.image("deco3", "assets/gather_decoration_exterior_1.3.png");
        this.load.image("ground3", "assets/gather_floors_2_exploration.png");
        this.load.image("wall5", "assets/IglooWalls.png");
        this.load.image("wall1", "assets/nauticalWalls.png");
        this.load.image("ground2", "assets/TileAndStone.png");

        this.load.spritesheet('avatar', 'assets/avatar.png',{ frameWidth:64, frameHeight:64 });

    } // end of preload //

    create (){

    console.log("animationScene")

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world4" });
    
    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let bathroomTiles = map.addTilesetImage("Bathroom_32x32", "bathroom");
    let deco12Tiles = map.addTilesetImage("Conference_Hall_32x32", "deco12");
    let deco3Tiles = map.addTilesetImage("gather_decoration_exterior_1.3", "deco3");
    let ground3Tiles = map.addTilesetImage("gather_floors_2_exploration", "ground3");
    let wall5Tiles = map.addTilesetImage("IglooWalls", "wall5");
    let wall1Tiles = map.addTilesetImage("nauticalWalls", "wall1");
    let ground2Tiles = map.addTilesetImage("TileAndStone", "ground2");


    //Step 5  create an array of tiles
    let tilesArray = [bathroomTiles, deco12Tiles, deco3Tiles, ground3Tiles, wall5Tiles, wall1Tiles, ground2Tiles];


    // Step 6  Load in layers by layers
    this.ground_Layer = map.createLayer("ground_Layer", tilesArray, 0, 0);
    this.wall_Layer = map.createLayer("wall_Layer", tilesArray, 0, 0);
    this.shower_Layer = map.createLayer("shower_Layer", tilesArray, 0, 0);
    this.bath_Layer = map.createLayer("bath_Layer", tilesArray, 0, 0);
    this.decoration_Layer = map.createLayer("decoration_Layer", tilesArray, 0, 0);
    
    this.anims.create({
        key:'avatar-up',
        frames:this.anims.generateFrameNumbers('avatar',
        { start:105, end:112 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'avatar-left',
        frames:this.anims.generateFrameNumbers('avatar',
        { start:118, end:125 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'avatar-down',
        frames:this.anims.generateFrameNumbers('avatar',
        { start:131, end:138 }),
        frameRate:5,
        repeat:-1
    });

    this.anims.create({
        key:'avatar-right',
        frames:this.anims.generateFrameNumbers('avatar',
        { start:144, end:151 }),
        frameRate:5,
        repeat:-1
    });


    var key1Down = this.input.keyboard.addKey(49);
    var key2Down = this.input.keyboard.addKey(50);
    var key3Down = this.input.keyboard.addKey(51);
    var key5Down = this.input.keyboard.addKey(53);
    var key6Down = this.input.keyboard.addKey(54);
    var key7Down = this.input.keyboard.addKey(55);
    

    key1Down.on('down', function(){
        console.log("Key 1 pressed");
            this.scene.start("gym_Map");
        }, this );

        key2Down.on('down', function(){
            console.log("Key 2 pressed");
                this.scene.start("kitchen_Map");
            }, this );

            key3Down.on('down', function(){
                console.log("Key 3 pressed");
                    this.scene.start("lockerroom_Map");
                }, this );
        
                key5Down.on('down', function(){
                    console.log("Key 5 pressed");
                        this.scene.start("pool_Map");
                    }, this );
                    key6Down.on('down', function(){
                        console.log("Key 6 pressed");
                            this.scene.start("street_Map");
                        }, this );
                
                        key7Down.on('down', function(){
                            console.log("Key 7 pressed");
                                this.scene.start("market_Map");
                            }, this );

                            this.player = this.physics.add.sprite(this.player.x, this.player.y, 'avatar').setScale(1.5);
                            window.player = this.player
                
                            .setSize(this.player.width * 0.3, this.player.height * 0.3)
                            .setOffset(22,45)

                            // create the arrow keys
                        this.cursors = this.input.keyboard.createCursorKeys();
                        // // camera follow player
                        this.cameras.main.startFollow(this.player);
                        
                        this.wall_Layer.setCollisionByExclusion(-1, true);
                        this.physics.add.collider(this.player, this.wall_Layer)
                        this.bath_Layer.setCollisionByExclusion(-1, true);
                        this.physics.add.collider(this.player, this.bath_Layer)
                        this.decoration_Layer.setCollisionByExclusion(-1, true);
                        this.physics.add.collider(this.player, this.decoration_Layer)
                
                    } // end of create //
                
                    update () {
                        if (
                            this.player.x > 143 && this.player.x < 274 &&
                            this.player.y < 620 && this.player.y > 590
                        ) {
                            console.log("Door4");
                            this.lockerroom_Map();
                        }

                        if (
                            this.player.x > 949 && this.player.x < 972 &&
                            this.player.y < 495 && this.player.y > 364
                        ) {
                            console.log("Door5");
                            this.pool_Map();
                        }

                
                        if (this.cursors.left.isDown)
                        {
                            this.player.setVelocityX(-270);
                            this.player.anims.play('avatar-left', true);
                        }
                        else if (this.cursors.right.isDown)
                        {
                            this.player.setVelocityX(270);
                            this.player.anims.play('avatar-right', true);
                        } else if (this.cursors.up.isDown)
                        {
                            this.player.setVelocityY(-270);
                            this.player.anims.play('avatar-up', true);
                        } else if (this.cursors.down.isDown)
                        {
                            this.player.setVelocityY(270);
                            this.player.anims.play('avatar-down', true);
                        } else {
                            this.player.setVelocity(0);
                            this.player.anims.stop();
                        }
    } // end of update // 

    lockerroom_Map(player, tile) {
        console.log("lockerroom_Map function");
        let playerPos = {}
        playerPos.x = 212
        playerPos.y = 68
        this.scene.start("lockerroom_Map", { player : playerPos});
    }

   pool_Map(player, tile) {
        console.log("pool_Map function");
        this.scene.start("pool_Map");
    }
    
    
}