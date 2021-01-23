// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(400, 400);
  c1 = color(155, 114, 201);
  c2 = color(201, 243, 255);
  c3 = color(9,29,75);
}


function draw() {

    
    setGradient( 0 , 0 , width, height * (1/3), c1, c2, c3, Y_AXIS);
    setGradient( 0, height * (1/3) , width, height * (2/3), c3, c3, c3, Y_AXIS)
  
    translate(width *0.5, height * 0.4);
    setDiamond( 0, 0 , width * 0.5 , c1, c3 , c2);
    
    
    save("20210123.png");
    noLoop();
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - (h/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - (h/2) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      //stroke(c);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - (h/2)){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      } 
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, (x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2) , x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      if(i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + w);
      }else{
        stroke(p);
        line(i, y, i, y + w);
      }
      
    }
  }
}


function setDiamond(x, y, h, c1, c2, c3){
  for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h)/2, 0, 1);
      let c = lerpColor(c3, c2, inter);
      
      let inter02 = map(i, (y + h)/2 ,  y + h , 0, 1);
      let p = lerpColor(c2, c1, inter02);
      
      if ( i <= ((y + h)/2)){
        stroke(c);
        line( (x * h) - (i), i, (x * h) + i, i);
      }else{
        stroke(p);
        line( (x - h) + i , i, (x + h) - i , i);
      }
    }
  
  
}
