canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
car_width=100;
car_height=90;
background_image="racing.jpg";
car_image1="car1.png";
car_image2="car2.png"
car1_x=10;
car1_y=10;
car2_x=10;
car2_y=5;
function add() {
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_image;
    car1_imgTag= new Image();
    car1_imgTag.onload= uploadCar1;
    car1_imgTag.src= car_image1;
    car2_imgTag= new Image();
    car2_imgTag.onload= uploadCar2;
    car2_imgTag.src= car_image2;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadCar1() {
    ctx.drawImage(car_img1Tag,car1_x,car1_y,car_width,car_height);
}
function uploadCar2() {
    ctx.drawImage(car_img2Tag,car2_x,car2_y,car_width,car_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("up");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log("down");
    }
    if (keyPressed == '37') {
        car1_left();
        console.log("left");
    }
    if (keyPressed == '39') {
        car1_right();
        console.log("right");
    }
    if (keyPressed == '87') {
        car2_up();
        console.log("up");
    }
    if (keyPressed == '65') {
        car2_left();
        console.log("left");
    }
    if (keyPressed == '83') {
        car2_down();
        console.log("down");
    }
    if (keyPressed == '68') {
        car2_right();
        console.log("right");
    }
}