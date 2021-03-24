function preload() {
}
function setup() {
    canvas= createCanvas(640,480);
    canvas.position(150,150);
    video= createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle (30, 20, 30);

    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(45, 20, 565, 5);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle (600, 20, 30);

    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(600, 35, 5, 400);
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle (600, 450, 30);

    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(45, 450, 540, 5);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle (30, 450, 30);

    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect( 30, 35, 5, 400);
}
function take_snapshot() {
    save('my_pic.png');
}