
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
//Set initial positions for ball and hole images.
by=0;
bx=0;
hy=400;
hx=800;
block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h1.png",function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHieght(50);
		hole_obj.set({
			top:hy,
			left:hx
		});
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHieght(50);
		ball_obj.set({
			top:by,
			left:bx
		});
		canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((bx==hx)(by==hy)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="YOU HAVE HIT THE GOAL!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		
			by=by-block_image_height;
			console.log("block image height = "+block_image_height);
			console.log("When down arrow key is pressed, X = " + bx+" , Y = " + by);
			canvas.remove(ball_obj);
			new_image();
		 
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(by<=450){
			by=by+block_image_height;
			console.log("block image height = "+block_image_height);
			console.log("When down arrow key is pressed, X = " + bx+" , Y = " + by);
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			bx=bx-block_image_width;
				console.log("block image width = "+block_image_width);
				console.log("When down arrow key is pressed, X = " + bx+" , Y = " + by);
				canvas.remove(ball_obj);
				new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			
				bx=bx+block_image_width;
				console.log("block image width = "+block_image_width);
				console.log("When down arrow key is pressed, X = " + bx+" , Y = " + by);
				canvas.remove(ball_obj);
				new_image();
			 
		}
	}
	
}
