class Rubber{
	constructor(x,y,r){
	var options = {
		'density':0.3,
		'friction': 5,
		'restitution':1
	  };
	 //assign options to the rubber ball
		
		this.body=Bodies.circle(x, y, r, options)
		this.x=x;
		this.y=y;
		this.r=r
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
		translate(rubberpos.x, rubberpos.y);
			
			fill("darkblue");
		//draw the ellipse here to display the rubber ball
	ellipseMode(RADIUS);
		ellipse(0,0,this.r)
		pop()
}

}