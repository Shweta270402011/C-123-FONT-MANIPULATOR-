diff=0;
rwx=0;
lwx=0;

function setup() {
   video = createCapture(VIDEO);
   video.size(550,500);

   canvas=createCanvas(550,500);
   canvas.position(560,150);

   poseNet = ml5.poseNet(video,modelLoaded);
  

}

function modelLoaded() {
    console.log('PoseNet is initialized!!')
}    

function gotPoses(results) {
 if( results.length > 0 )
 {
     console.log(results);
      rwx=results[0].pose.rightWrist.x;
      lwx=results[0].pose.leftWrist.x;
     diff= floor(rwx - lwx) ;
 }
}

function draw() {
    background('#fae');
    textsize(diff);
    fill('#87ceeb');
    text('Shweta',50,400);

    
}