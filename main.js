muchX = 0;
muchY = 0;
function preload() {
    much= loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose',gotPoses);
}
function modalLoaded() {
    console.log('PoseNet is initialized');
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        muchX = results[0].pose.nose.x-40;
        muchY = results[0].pose.nose.y;
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(much, muchX, muchY, 80, 35);
}
function take_snapshot() {
    save('I_am_a_clown.png');
}