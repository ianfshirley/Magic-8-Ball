fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);

var answer = floor(random(1, 7));

if (answer === 1) {
    text("HELL", 176, 200);
    text("YEAH", 175, 229); 
    text("BROTHER", 164, 256);
}
else if (answer === 2) {
    text("SORRY", 176, 200);
    text("MY", 186, 229); 
    text("GUY", 183, 256);
}
else if (answer === 3) {
    text("NO", 189, 200);
    text("WAY", 186, 229); 
    text("JOSE", 183, 256);
}
else if (answer === 4) {
    text("BET", 188, 219);
}
else if (answer === 5) {
    text("NAH", 186, 200);
    text("DUDE", 183, 229); 
}
else if (answer === 6) {
    text("NO", 188, 200);
    text("CAP", 185, 229); 
}