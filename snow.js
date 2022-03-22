class Snow{
 constructor(x,y){
this.r=10
this.body=Matter.Bodies.circle(x,y,this.r,{density:0.5,friction:0.2})
Matter.World.add(world,this.body)
console.log(6)
 }
 display(){
     push()
     fill("white")
     ellipseMode(RADIUS)
     translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
      ellipse(0,0,this.r)
      pop()
      
    }
}
