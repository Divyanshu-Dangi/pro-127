function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
song="";

function preload()
{
    song=loadSound("k.mp3");
}
function draw()
{
    image(video,0,0,600,500);
}
function playSound()
{
    song.play();
}