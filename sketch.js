var engine,world,body

var BG,fall;
var snowdrop=[]
function preload(){
BG=loadImage("snow3.jpg")

}
function setup() {
  createCanvas(1200,1000);
  engine=Matter.Engine.create()
  world=engine.world

  for(a=0;a<=980;a=a+5){
   // console.log(a)
  snowdrop.push(new Snow(a,random(-1000,10)))
  }
  //createSprite(400, 200, 50, 50);
//fall=new Snow(200,300)

// fall=new Snow((random(0,110),0))
//snowdrop.push(new Snow((random(5,110),5)))
//console.log(snowdrop)
}

function draw() {
  background(BG);  
  Matter.Engine.update(engine)
 
  for (var i =0;i<snowdrop.length;i++){
    snowdrop[i].display()

  //  console.log(snowdrop[i])
if (snowdrop[i].body.position.y>height)
{console.log(35)
  Matter.Body.setPosition(snowdrop[i].body,{x:snowdrop[i].body.position.x,y:random(-1000,0)})}
 
}
  //   for (var i=0;i<snowdrop.length;i++){
  //    snowdrop[i].display()
   
  //  }
    
// snowdrop[i].display()
   }
//    function mousePressed(){
    
//    snowdrop.push(new Snow(mouseX,-10,))
  
// }

 