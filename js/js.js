
var
    canv = document.getElementById('canvas');
    ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;
// var x = 50;
ctx.fillStyle = 'black';
//ctx.fillRect(x, 50, 150, 75); //Рисует заполненный квадрат
// ctx.clearRect(0,0,500, 500); //Очищает
ctx.strokeStyle = 'black';  //Цвет для незаполненных фигур - stroke
// ctx.lineWidth = 5;
// ctx.scale(1,1);
// ctx.strokeRect(x,50,50,20);//Рисует незаполненный квадрат

//Градиент
// var
//     grad = ctx.createLinearGradient(0, 0, canv.width, 0);
// grad.addColorStop('.38','white');
// grad.addColorStop('.50','#f09e9e');
// grad.addColorStop('.68','red');

// //Круг
// ctx.arc(canv.width /2 - 25, canv.height /2, 25, 0, Math.PI, true);
// ctx.fill();
// ctx.arc(canv.width /2 + 25, canv.height /2, 25, 0, Math.PI, true);
// ctx.fill();
// ctx.arc(canv.width /2, canv.height /2, 50, 0, Math.PI, false);
// ctx.fill();

//Треугольник
// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(25,100);
// ctx.lineTo(75,100);
// ctx.closePath();
// ctx.stroke();

//Текст
// ctx.fillStyle = grad;
// ctx.font = '20px Georgia';
// ctx.fillText("Hello World!", canv.width /2, canv.height /2);

//Анимация
// setInterval(function() {
//     ctx.fillStyle = 'white';
//     ctx.fillRect(0, 0, canv.width, canv.height);
//
//     ctx.fillStyle = 'black';
//     ctx.fillRect(x++, 50, 300, 200);
// }, 10);

//Приложение для рисования
isMouseDown = false;

canv.addEventListener('mousedown', function() {
   isMouseDown = true;
});
canv.addEventListener('mouseup', function() {
    isMouseDown = false;
    ctx.beginPath();
});
ctx.lineWidth = 20;
canv.addEventListener('mousemove', function(e){
    if (isMouseDown) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 10, 0,Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
});

function clear(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0, canv.width, canv.height);
    ctx.beginPath();
    ctx.fillStyle = 'black';
}

document.addEventListener('keydown', function(e) {
   // console.log(e.keyCode);
    if(e.keyCode == 83) {

    }
    if(e.keyCode == 82) {

    }
    if(e.keyCode == 67) {
        clear();
    }

});














