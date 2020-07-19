//Create variables here
 var dog,HappyDog,dogimg,dogHappyimg
 var database;
 var foods,foodStock;

function preload()
{

  dogimg=loadImage("images/dogImg.png")
  dogHappyimg=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  
  database=firebase.database()
  console.log(database);
  createCanvas(500, 500);
  dog=createSprite(200,200,30,30);
  dog.addImage(dogimg)

  //getting the value of food remaining
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)

}


function draw() {  
  background(46,139,87)
  textSize(30)
  text("Press UP_ARROW KEY TO Feed LEO",200,100)
     
  //add styles here
  if(keyWentDown(UP_ARROW)){   
    writeStock(foods)
    dog.addImage(dogHappyimg)
  }

  drawSprites();
  textSize(25)
  fill("red")
  text("FoodStock  :"+ foods,200,100)
}
//function which reads value of food remaining from database
function readStock(data){
  foods=data.val();
}

//function which writes value of food remaining in database
function writeStock(x){
    database.ref('/').update({
        Food:x
    })
  }

