function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectdetecter = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("Status").innerHTML + "Status: detecting objects";
}
function modelLoaded(){
    console.log(
        "model is loaded"
    );
    Status = true;
    objectdetecter.detect(img,gotResult);
}
function gotResult(error,result){
if(error){
    console.error(error);
} 
else{
    console.log(result);
}
}
function draw(){
image(img,0,0,640,420);
fill("red");
text("Dog",160,60);
noFill();
stroke("red");
rect(150,50,310,230);

fill("red");
text("Cat",320,120);
noFill();
stroke("red");
rect(300,90,270,300);
}
img=" ";
function preload(){
    img = loadImage("dog_cat.jpg");
}

function Car(){
}