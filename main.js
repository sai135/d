function preload() {
imgRectange=loadImage("https://i.postimg.cc/FzwyX0D2/green.jpg");
imgRectange1=loadImage("https://i.postimg.cc/FzwyX0D2/green.jpg");
imgRectange2=loadImage("https://i.postimg.cc/FzwyX0D2/green.jpg");
imgRectange3=loadImage("https://i.postimg.cc/FzwyX0D2/green.jpg");
imgCircle4=loadImage("https://i.postimg.cc/4x6zj7tS/red.jpg");
imgCircle5=loadImage("https://i.postimg.cc/4x6zj7tS/red.jpg");
imgCircle6=loadImage("https://i.postimg.cc/4x6zj7tS/red.jpg");
imgCircle7=loadImage("https://i.postimg.cc/4x6zj7tS/red.jpg");
}
function setup() {
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
}
function draw() {
    
    image(imgRectange,85,110,15,15);
    image(imgRectange1,);
    image(imgRectange2,);
    image(imgRectange3,);
    image(imgCircle4,100,110,150,15);
    image(imgCircle5,);
    image(imgCircle6,);
    image(imgCircle7,);
}