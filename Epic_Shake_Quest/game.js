let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  backgroundColor: "#000000",
  scene: [
    openingScene,
    storylineScene,
    ruleScene,
    instructionScene,
    gym_Map,
    kitchen_Map,
    lockerroom_Map,
    pool_Map,
    street_Map,
    market_Map,
    endingScene,
    rot_Banana_DeathScene,
    bone_DeathScene,
    cheese_DeathScene,
    soda_DeathScene,
    cockroach_DeathScene,
    candy_DeathScene,
    caution_DeathScene,
    chips_DeathScene,
    fish_DeathScene,
    showInventory,
    openingScene2,
  ],
};

let game = new Phaser.Game(config);

window.item1 = 0;
window.item2 = 0;
window.item3 = 0;
window.item4 = 0;
window.item5 = 0;
window.item6 = 0;
window.item7 = 0;
window.item8 = 0;
window.item9 = 0;
window.item10 = 0;
window.item11 = 0;
window.character_change = 0;
window.itemAppear = 0;
window.death1 = 0;
window.death2 = 0;
window.death3 = 0;
window.death4 = 0;
window.death5 = 0;
window.death6 = 0;
window.death7 = 0;
window.death8 = 0;
window.death9 = 0;
window.human1_ChangeC = 0;
window.human2_ChangeC = 0;
window.human3_ChangeC = 0;
window.human4_ChangeC = 0;
window.human5_ChangeC = 0;
window.human6_ChangeC = 0;
