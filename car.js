Status= "";
objects = [];
function setup(){
    canvas = createCanvas(720,420);
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
    objects = result;
}
}
function draw(){
image(img,0,0,720,420);
if(Status !=" "){
    for(i=0;i<objects.length;i++){
        document.getElementById("Status").innerHTML = "Status : Object Detected";

        fill("red");
        percentage = floor(objects[i].confidence*100);
        text(objects[i].label + "" + percentage + "%",objects[i].x+15 , objects[i].y+20);
        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}

}
img=" ";
function preload(){
    img = loadImage("images(1).jpeg");
}
