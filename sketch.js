var a,base1,base2,block1,block2,block3;
var block4,block5,block6,block7,block8,block9;
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
 base1=new Ground(600,570,60,30)
 base2=new Ground(450,570,60,30)
  block1=new Box(330,235)
  block2= new Box(360,235)
  block3=new Box(390,235)
  block4=new Box(420,235)
  block5=new Box(450,235)
  block6=new Box(360,195)
  block7=new Box(390,195)
  block8=new Box(420,195)
  block9 =new Box(390,155)


 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 base1.display();
 base2.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 

 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 