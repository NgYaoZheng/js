
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    backgroundColor: '#000000',
    scene: [openingScene, storylineScene, ruleScene, preloadScene, gym_Map, kitchen_Map, lockerroom_Map, pool_Map, street_Map, market_Map]

};

let game = new Phaser.Game(config);

window.item1 = 0
window.item2 = 0
window.item3 = 0
window.item4 = 0
window.item5 = 0
window.item6 = 0
window.item7 = 0
window.item8 = 0
window.item9 = 0
window.item10 = 0
window.item11 = 0
window.character_change = 0