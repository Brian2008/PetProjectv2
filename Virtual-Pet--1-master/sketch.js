var dog,dogImage
var happyDog
var database
var foodStock
var foodS
var milk

function preload()
{
  dogImage = loadImage('images/dogImg.png')
  happyDog = loadImage('images/dogImg1.png')
  //milk = loadImage('images/Milk.png')
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,20,20)
  dog.addImage(dogImage)
  dog.scale=0.1
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }
  drawSprites();
  textSize(10);
  fill("white")
  stroke("black")
  text("Food Remaining:"+foodS,200,200)
  
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  } 

  database.ref('/').update({
    food:x
  })
}



