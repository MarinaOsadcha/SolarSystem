var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var sunRadius = 50;
var lineColor = 'rgba(180,180,180,0.3)';

var radialgradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 50, canvas.width/2, canvas.height/2, 10);
radialgradient.addColorStop(0,'yellow');
radialgradient.addColorStop(0.2, 'yellow');
radialgradient.addColorStop(1, 'white');

//sun
function toDrawSun() {
  ctx.fillStyle = radialgradient;
  ctx.beginPath();
  ctx.save();
  ctx.shadowOffSetX = 2;
  ctx.shadowOffSetY = 2;
  ctx.shadowBlur = 50;
  ctx.shadowColor = 'orange';
  ctx.arc(canvas.width/2,canvas.height/2,sunRadius,0,360);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.restore();
};

function toDrawOrbits() {
  //mercury
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  ctx.save();
  ctx.scale(1, 0.37);
  ctx.arc(canvas.width/2,canvas.height+175,sunRadius + 58/2,300*(Math.PI/180),240*(Math.PI/180));
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  
  //venus
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  ctx.save();
  ctx.scale(1, 0.37);
  ctx.arc(canvas.width/2,canvas.height+175,sunRadius + 108/2,290*(Math.PI/180),250*(Math.PI/180));
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  
  //earth
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  ctx.save();
  ctx.scale(1, 0.37);
  ctx.arc(canvas.width/2,canvas.height+175,sunRadius + 149/2,280*(Math.PI/180),260*(Math.PI/180));
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  
  //mars
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  ctx.save();
  ctx.scale(1, 0.37);
  ctx.arc(canvas.width/2,canvas.height+177,sunRadius + 228/2,0,360);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
 
  //jupiter
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  ctx.save();
  ctx.scale(1, 0.37);
  ctx.arc(canvas.width/2,canvas.height+175,sunRadius + 778/3,0,360);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  
  //Saturn
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  ctx.save();
  ctx.scale(1, 0.37);
  ctx.arc(canvas.width/2,canvas.height+175,sunRadius + 1429/4,0,360);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  
  //Uranus
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  ctx.save();
  ctx.scale(1, 0.37);
  ctx.arc(canvas.width/2,canvas.height+175,sunRadius + 2871/6.2,0,360);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  
  //Neptune
  ctx.lineWidth = 0.5;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  ctx.save();
  ctx.scale(1, 0.37);
  ctx.arc(canvas.width/2,canvas.height+175,sunRadius + 4498/8,0,360);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

};


var m = 0; var v = 0; var e = 0; var ms = 0; var j = 0; var sn = 0; var u = 0; var n = 0;

var toDraw = setInterval(function draw() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);  //очистить канвас
  
  toDrawSun();    //нарисовать sun
  toDrawOrbits(); //нарисовать орбиты планет
 
  //mercury
  ctx.save();
  var radius = sunRadius + 58/2;  //108
  var s = 2 * Math.PI / 180; 
  m += s;
  x = radius * Math.sin(m);
  y = 30 * Math.cos(m);  //radius y
  
 if (x < 50 && x > -50 && y < 0) {  //пролет за sun
    ctx.fillStyle = 'transparent';
    ctx.strokeStyle = 'transparent';
 } else {
   ctx.fillStyle = 'brown';
   ctx.strokeStyle = 'brown';
  }
  ctx.beginPath();
  ctx.arc(canvas.width/2 + x,canvas.height/2 + y,1,0,360);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  
  //venus
  ctx.save();
  ctx.beginPath();
  ctx.shadowOffSetX = 2;
  ctx.shadowOffSetY = 2;
  ctx.shadowBlur = 5;
  ctx.shadowColor = 'orange';
  radius = sunRadius + 108/2;  //158
  s = 1 * Math.PI / 180; 
  v += s;
  x = radius * Math.sin(v);
  y = 38 * Math.cos(v);  //radius y
  
  if (x < 45 && x > -45 && y < 0) {  //пролет за sun
    ctx.fillStyle = 'transparent';
    ctx.strokeStyle = 'transparent';
 } else {
   ctx.fillStyle = 'orange';
   ctx.strokeStyle = 'orange';
  }
  ctx.arc(canvas.width/2 + x,canvas.height/2 + y          ,3,0,360);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  
  //earth
  ctx.save();
  ctx.beginPath();
  ctx.shadowOffSetX=2;
  ctx.shadowoffSetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = '#2bc2f0';
  radius = sunRadius + 149/2;  //199
  s = 0.7 * Math.PI / 180; 
  e += s;
  x = radius * Math.sin(e);
  y = 45 * Math.cos(e);  //radius y
  
  if (x < 40 && x > -40 && y < 0) {  //пролет за sun
    ctx.fillStyle = 'transparent';
    ctx.strokeStyle = 'transparent';
 } else {
   ctx.fillStyle = '#2bc2f0';
   ctx.strokeStyle = '#2bc2f0';
  }
  ctx.arc(canvas.width/2 + x,canvas.height/2 + y          ,3,0,360);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  
  //mars
  ctx.fillStyle = '#d65200';
  ctx.strokeStyle = '#d65200';
  ctx.beginPath();
  radius = sunRadius + 228/2;  //108
  s = 0.35 * Math.PI / 180; 
  ms += s;
  x = radius * Math.sin(ms);
  y = 60 * Math.cos(ms);  //radius y
  ctx.arc(canvas.width/2 + x,canvas.height/2 + y          ,2,0,360);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  
  //Jupiter
  ctx.save();
  ctx.fillStyle = '#cca04f';
  ctx.shadowOffSetX = 5;
  ctx.shadowOffSetY = 5;
  ctx.shadowBlur = 12;
  ctx.shadowColor = '#dbaa7d';
  ctx.beginPath();
  radius = sunRadius + 778/3;  //108
  s = 0.06 * Math.PI / 180; 
  j += s;
  x = radius * Math.sin(j);
  y = 115 * Math.cos(j);  //radius y
  ctx.arc(canvas.width/2 + x,canvas.height/2 + y          ,15,0,360);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  
  //Saturn
  ctx.save();
  ctx.fillStyle = 'silver';
  ctx.beginPath();
  ctx.shadowffSetX = 40;  
  ctx.shadowOffSetY = 4;
  ctx.shadowBlur = 2;
  ctx.shadowColor = 'white';
  radius = sunRadius + 1429/4;  //108
  s = 0.03 * Math.PI / 180; 
  sn += s;
  x = radius * Math.sin(sn);
  y = 150 * Math.cos(sn);  //radius y
  ctx.arc(canvas.width/2 + x,canvas.height/2 + y          ,12,0,360);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  
  //rings of Saturn
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(canvas.width/2 + x - 23, canvas.height/2 + y - 10);
  ctx.lineTo(canvas.width/2 + x+ 23,canvas.height/2 + y + 10);
  ctx.strokeStyle = 'rgba(250,250,250,0.5)';
  ctx.lineWidth = 1;
  ctx.shadowOffSetX = 20;
  ctx.shadowOffSetY = 20;
  ctx.shadowBlur = 2;
  ctx.shadowColor = 'white';
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  
  //Uranus
  ctx.fillStyle = '#5bf7f2';
  ctx.strokeStyle = '#5bf7f2';
  ctx.beginPath();
  radius = sunRadius + 2871/6.2;  //108
  s = 0.01 * Math.PI / 180; 
  u += s;
  x = radius * Math.sin(u);
  y = 190 * Math.cos(u);  //radius y
  ctx.arc(canvas.width/2 + x,canvas.height/2 + y          ,6,0,360);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  
  //Neptune
 ctx.fillStyle = '#3953db';
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#4b7efb';
  ctx.beginPath();
  radius = sunRadius + 4498/8;  //108
  s = 0.005 * Math.PI / 180; 
  n += s;
  x = radius * Math.sin(n);
  y = 225 * Math.cos(n);  //radius y
  ctx.arc(canvas.width/2 + x,canvas.height/2 + y          ,5,0,360);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  
}, 20);

