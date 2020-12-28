var dog,happyDog;
var foodS,database;

function preload(){
  dogImg = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png");
}

function setup() {
  database = firebase.database()
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale=0.2;
  var foodStock = database.ref('food');
  foodStock.on('value',readStock);
  
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
    dog.scale=0.2;
  }
  
  drawSprites();
  fill(0);
  stroke(0);
  text("Note: Press UP Arrow Key To Feed Drago Milk!",150,100);
  
  

}

function writeStock(){
  database.ref('foodS').set({})
}

function readStock(data){
  foodStock=data.val();
}



