canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    //Taking color from the input box
    //Additional Activity Starts
    color=document.getElementById("color").value;
    console.log(color);
    //Additional Activity Ends
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("X= "+mouse_x+",Y= "+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke(); 
}
//Additional Activity
function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}