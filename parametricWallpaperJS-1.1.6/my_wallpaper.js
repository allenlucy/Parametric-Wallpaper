//size of canvas
let s = 100;

//main colour of cat
let catColourR = 180;
let catColourG = 217;
let catColourB = 85;

//size of cats eyes
let catEyes = s/12;

//secondary colour of cat
let catSecondR = 248;
let catSecondG = 244;
let catSecondB = 230;

//whisker
let whisker = catEyes + s/2;

//cat pattern
//1 = spots
//2 = stripes
//3 = tuxedo
//else (0) = plain
let catPattern = 3;

//whether skin colour is pink or black
let pink = false;

//whether there is a tongue or not
let tongue = true;

//whether eyes are closed or not
let eyesClosed = true;

//whether wearing a hat or not
let hat = true;

let bgStrokeWeight = 30;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false);

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 100;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255, 240, 255);
   /*
  \
  \ Background
  \
  */
 stroke(137, 199, 217);
 let x = 0;
 for(let i = 0; i < 50; i++){
   squigglyLines(x, x);
   x+=50;
 }
 x = 0;
 for(let i = 0; i < 50; i++){
   squigglyLines(x, x);
   x-=50;
 }
strokeWeight(1);
}

function my_symbol() {
  /*
  \
  \ Cat
  \
  */
  noStroke();
  //ears
  fill(catSecondR, catSecondG, catSecondB);
  triangle(s/4 + 10, s/8, s/4, s/2, s/2, s/3);
  triangle(s/4 + 40, s/8, s/4 + 50, s/2, s/2, s/3);
  
  //inner ear
  if(pink){
     fill(248, 147, 166);
  }
  else{
    fill(0);
  }
  //inner ear
  triangle(s/4 + 11, s/8 + 8, s/4 + 5, s/2, s/2 -5, s/3);
  triangle(s/4 + 39, s/8 + 8, s/4 + 15, s/2, s/2 + 16, s/3);
  
  //cat base
  fill(catColourR, catColourG, catColourB);
  circle(s/2, s/2, s/2);
  
  //secondary pattern
  fill(catSecondR, catSecondG, catSecondB);
  if(catPattern == 1){ //spots
    circle(s/2 + 10, s/2 - 5, s/4);
    circle(s/2 -10, s/2 + 10, s/6);
  }
  else if(catPattern == 2){ //stripes
    ellipse(s/2, s/3, 3, 16);
    ellipse(s/2 - 7, s/3, 3, 12);
    ellipse(s/2 + 7, s/3, 3, 12);
  }
  else if(catPattern == 3){ //tuxedo
    fill(catSecondR, catSecondG, catSecondB);
    circle(s/2, (s/2)+10, 30);
    fill(catColourR, catColourG, catColourB);
    circle((s/2)-12, (s/2)+2, 25);
    circle((s/2)+12, (s/2)+2, 25);
    circle(s/2, s/2, 15);
  }
  else{
    catPattern == 0;
  }
  //plain
  
  //cat eyes
  if(eyesClosed){
  strokeWeight(1);
  stroke(0);
  line(catEyes*6 - 3, catEyes*6, catEyes*6 - 15, catEyes*6 - 2.5);
  line(catEyes*6 + 3, catEyes*6, catEyes*6 + 15, catEyes*6 - 2.5);
  }
  else{
  fill(0);
  circle(catEyes + s/3, catEyes + s/2.5, catEyes);
  circle(catEyes + s/2, catEyes + s/2.5, catEyes);
  fill(50);
  circle(catEyes + s/3, catEyes + s/2.5, catEyes/2);
  circle(catEyes + s/2, catEyes + s/2.5, catEyes/2);
  
  //whites
  fill(255);
  circle(catEyes-2 + s/3, catEyes-2 + s/2.5, catEyes/3);
  circle(catEyes-2 + s/2, catEyes-2 + s/2.5, catEyes/3);
  
  circle(catEyes+2 + s/3, catEyes+2 + s/2.5, catEyes/5);
  circle(catEyes+2 + s/2, catEyes+2 + s/2.5, catEyes/5);
  }
  
  noStroke();
  //Nose
  if(pink){
     fill(248, 147, 166);
  }
  else{
    fill(0);
  }
  triangle(s/2, s/2 + 2.5, s/2 - 2.5, s/2 + 5, s/2 + 2.5, s/2 + 5);
  
  //tongue
  if(tongue){
    fill(248, 147, 166);
    triangle(s/2, s/2 + 10, s/2 - 1, s/2 + 12, s/2 + 1, s/2 + 12);
    circle(s/2, s/2 + 14, 5);
    strokeWeight(1);
    stroke(175, 74, 105);
    line(s/2, s/2 + 12, s/2, s/2 + 15);
  }
  
  //mouth
  strokeWeight(1);
  stroke(0);
  line(s/2, s/2 + 6, s/2, s/2 + 9);
  line(s/2, s/2 + 9, s/2 - 2.5, s/2 + 15);
  line(s/2, s/2 + 9, s/2 + 2.5, s/2 + 15);
  
  //whiskers
  //left
  line(whisker - 16, whisker -2.5, whisker - 25, whisker - 5);
  line(whisker - 16, whisker, whisker - 25, whisker);
  line(whisker - 16, whisker + 2.5, whisker - 25, whisker + 5);
  
  //right
  line(whisker, whisker -2.5, whisker + 9, whisker - 5);
  line(whisker, whisker, whisker + 9, whisker);
  line(whisker, whisker + 2.5, whisker + 9, whisker + 5);

  //hat
  if(hat){
    fill(25);
    noStroke();
    ellipse(s/2, (s/3)-6, 20, 5);
    rect((s/2)-5, (s/3)-15, 10, 10);
  }
}

function squigglyLines(x, y){
  strokeWeight(bgStrokeWeight);
  noFill();
  beginShape();
  curveVertex((2000)+x, (0)+y);
  curveVertex((2000)+x, (0)+y);
  curveVertex((1000-400)+x, (400)+y);
  curveVertex((1000-500)+x, (1200)+y);
  curveVertex((0)+x, (2000)+y);
  curveVertex((1000)+x, (6000)+y);
  curveVertex((1000)+x, (6000)+y);
  endShape();
}