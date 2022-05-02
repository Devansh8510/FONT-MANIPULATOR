noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;

function setup() {
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    loadpn=ml5.poseNet(video,modelLoaded);
    loadpn.on("pose",gotresult);
}

function modelLoaded() {
    console.log("Your model has been loaded");
}

function gotresult(result) {
    if(result.length>0){
        console.log(result);
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        rightwristX=result[0].pose.rightWrist.x;
        leftwristX=result[0].pose.leftWrist.x;
        difference=floor(leftwristX-rightwristX);
    }
}

function draw(){
    background("White")
    document.getElementById("span1").innerHTML="Font size of the text: "+difference+"px";
    textSize(difference);
    text("Devansh",noseX,noseY);
}
