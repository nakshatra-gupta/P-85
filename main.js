var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var car_height = 200;
var car_width = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var car_x = 600;
var car_y = 0;

function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = "parkingLot.img"

    car_imgTag = new Image();
    car_imgTag.onload = uploadgreencar;
	car_imgTag.src = "car2.png";
}

function uploadBackground()
{
ctx.drawImage(background_imgTag, 0 , 0, canvas.width, canvas.height);
}

function uploadgreencar() 
{
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
	if (car_y >= 0)
    {
        car_y = car_y - 5;
        console.log ("when left arrow is pressed x = " + car_x + " and y is " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if (car_y <= 500)
    {
        car_y = car_y + 5;
        console.log ("when down arrow is pressed x = " + car_x + " and y is " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if (car_x >= 0)
    {
        car_x = car_x - 5;
        console.log ("when left arrow is pressed x = " + car_x + " and y is " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if (car_x <= 700)
    {
        car_x = car_x + 5;
        console.log ("when right arrow is pressed x = " + car_x + " and y is " + rover_y);
        uploadBackground();
        uploadgreencar();
    }
}
