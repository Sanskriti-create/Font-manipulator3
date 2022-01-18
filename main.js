leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Intialised');
}

function gotPoses(results)
{
   if(results.length > 0)
   {
       console.log(results);
       
       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWristX - rightWristX);

       console.log("Left Wrist X : " + leftWristX + "  Right Wrist X : " + rightWristX + "  difference : " + difference);
   }
}

function draw()
{
    background('rgba(34, 139, 34, 0.534)');

    document.getElementById("square_side").innerHTML = "Font Size = " + difference + "px";

    textSize(difference);
    fill('#5b4a94');
    text('Sanskriti', 50, 400);

}
   
