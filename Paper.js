class Paper 
{

   constructor (x, y, radius)
   {
       
    var options=
    {
          restitution:0.3,
          isStatic:false,
          friction:0.5,
          density:1.2,
          
    }

       this.body = Matter.Bodies.circle (x,y, radius,options);
       this.radius = radius;
       
       
        Matter.World.add (world,this.body);
      
        

       
   }

   


   display()
   {
    var pos = this.body.position;

   ellipseMode(RADIUS);
    fill ("cyan");
    ellipse(pos.x, pos.y, this.radius);
    
   }


}