var canvas = document.getElementById("myCanvas");
var CTX = canvas.getcontext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_X=10;
car1_Y=10;

car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_X=10;
car2_Y=100;

background_image="racing.jpg"

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
}
function uploadbackground(){
    CTX.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    CTX.drawImage(car1_imgTag,car1_X,car1_Y,car1_width,car1_height);
}

function uploadcar2(){
    CTX.drawImage(car2_imgTag,car2_X,car2_Y,car2_width,car2_height);
}

window.addEventListener("keydown",kd);
function kd(e){
    keyPressed=e.keycode;
    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='87'){
        up();
    }
    if(keyPressed=='65'){
        left();
    }
    if(keyPressed=='68'){
        right();
    }
    if(keyPressed=='83'){
        right();
    }
}