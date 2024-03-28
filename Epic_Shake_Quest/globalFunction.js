function updateInventory() {
  console.log("*** updateInventory()");

  console.log("*** updateInventory() Emit event", this.inventory);
  this.invEvent = (event, data) => {
    this.scene.get("showInventory").events.emit(event, data);
  };
  this.invEvent("inventory", this.inventory);
}

////// items_Collect //////
function collect_Blender(player, item1) {
  console.log("collect_Blender");
  this.sound1.play();
  item1.disableBody(true, true);
  window.item1 = 1;

  updateInventory.call(this);
}

function collect_Measuring_Cup(player, item4) {
  console.log("collect_Measuring_Cup");
  this.sound1.play();
  item4.disableBody(true, true);
  window.item4 = 1;

  updateInventory.call(this);
}

function collect_Cup(player, item2) {
  console.log("collect_Cup");
  item2.disableBody(true, true);
  this.sound1.play();
  window.item2 = 1;
  updateInventory.call(this);
}

function collect_Spoon(player, item3) {
  console.log("collect_Spoon");
  this.sound1.play();
  item3.disableBody(true, true);
  window.item3 = 1;
  updateInventory.call(this);
}

function collect_Milk(player, item5) {
  console.log("collect_Milk");
  this.sound1.play();
  item5.disableBody(true, true);
  window.item5 = 1;
  this.add
    .image(5, 5, "milk_Strike")
    .setOrigin(0, 0)
    .setScale(0.05)
    .setScrollFactor(0);
}

function collect_Wheat_Powder(player, item6) {
  console.log("collect_Wheat_Powder");
  this.sound1.play();
  item6.disableBody(true, true);
  window.item6 = 1;
  this.add
    .image(5, 5, "wheat_Powder_Strike")
    .setOrigin(0, 0)
    .setScale(0.05)
    .setScrollFactor(0);
}

function collect_Berries(player, item7) {
  console.log("collect_Berries");
  this.sound1.play();
  item7.disableBody(true, true);
  window.item7 = 1;
  this.add
    .image(5, 5, "berries_Strike")
    .setOrigin(0, 0)
    .setScale(0.05)
    .setScrollFactor(0);
}

function collect_Honey(player, item8) {
  console.log("collect_Honey");
  this.sound1.play();
  item8.disableBody(true, true);
  window.item8 = 1;
  this.add
    .image(5, 5, "honey_Strike")
    .setOrigin(0, 0)
    .setScale(0.05)
    .setScrollFactor(0);
}

function collect_Spinach(player, item9) {
  console.log("collect_Spinach");
  this.sound1.play();
  item9.disableBody(true, true);
  window.item9 = 1;
  this.add
    .image(5, 5, "spinach_Strike")
    .setOrigin(0, 0)
    .setScale(0.05)
    .setScrollFactor(0);
}

function collect_Banana(player, item10) {
  console.log("collect_Banana");
  this.sound1.play();
  item10.disableBody(true, true);
  window.item10 = 1;
  this.add
    .image(5, 5, "bananas_Strike")
    .setOrigin(0, 0)
    .setScale(0.05)
    .setScrollFactor(0);
}

function collect_Ice_Cubes(player, item11) {
  console.log("collect_Ice_Cubes");
  this.sound1.play();
  item11.disableBody(true, true);
  window.item11 = 1;
  this.add
    .image(5, 5, "ice_Cubes_Strike")
    .setOrigin(0, 0)
    .setScale(0.05)
    .setScrollFactor(0);
}
