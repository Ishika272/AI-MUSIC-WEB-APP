leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
function preload(){
loadSound("song 1.mp3");
loadSound("song 2.mp3");
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    webcam.size(500,500);
    posenetmodel = ml5.poseNet(webcam , modelloaded)
    posenetmodel.on("pose" , gotPoses)

}
function draw(){
    image(webcam ,0,0,500,500);
}
function modelloaded(){
    console.log("model loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;

    }

}