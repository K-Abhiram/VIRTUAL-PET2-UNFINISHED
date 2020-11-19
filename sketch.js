//Create variables here
var dogImg, happyDog;
var hfoodS, hfoodStock;
var hdog;
var database; 
var Pet, Feed;
var fedTime, lastFed;
var foodObj;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {

  database = firebase.database();
  createCanvas(800, 500);

  hdog = createSprite(250,250,10,10);
  hdog.addImage(dogImg);
  hdog.scale = 0.5;

  hfoodStock = database.ref("food");
  hfoodStock.on("value",readStock);
  
  foodObj = new Food();


  
  
}


function draw() {  

  background(46, 139, 87);

  foodObj.display();

  fedTime = database.ref('FeedTime');
  fedTime.on("value", function(data){
    lastFed = data.val();
  });
 

  drawSprites();
  //add styles here
  textSize(40);
  fill ("white");
  stroke (20);
  text("Food Remaining : " + hfoodS,40,490);
  textSize(15)
  text("Note: press the UP_ARROW Key to Feed The Dog",200,50);
}

function readStock(data){
  hfoodS = data.val();
}

function writeStock(x){
  database.ref("/").update({
    hfoodS : x,
  })
}

function feedDog(){
  dogImg.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Foods: foodObj.getFoodStock(),
    FeedTime: hour ()
  })
}

function addFoods(){
  hfoodS++;
  database.ref('/').update({
    Foods:hfoodS
  })
}

function addFood(){
  var button = createButton("FoodStock+1");
  button.position(150,80);

}