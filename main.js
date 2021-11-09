/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}
//******** BIG FUNCTION UPDATE TO CHANGE BRUSH COLOR **********// 

function update() {

  // QUERIES 
  const color1 = document.querySelector(".color-1");
  const color2 = document.querySelector(".color-2");
  const color3 = document.querySelector(".color-3");
  const color4 = document.querySelector(".color-4");
  const color5 = document.querySelector(".color-5");
  const brush = document.querySelector(".current-brush");
  const canvas = document.querySelector('.canvas'); 

  //******** EVENT LISTENERS **********// 

// * COLOR 1 * //
color1.addEventListener('click', function (event) {
  const color1 = event.target; 
  console.log('blue');
  
})

// * COLOR 2 * //
color2.addEventListener('click', function (event) {
  const color2 = event.target; 
  console.log('orange');
})

// * COLOR 3 * //
color3.addEventListener('click', function (event) {
  const color3 = event.target; 
  console.log('green');
})

// * COLOR 4 * //
color4.addEventListener('click', function (event) {
  const color4 = event.target; 
  console.log('yellow');
})

// * COLOR 5 * //
color5.addEventListener('click', function (event) {
  const color5 = event.target; 
  console.log('white');
})

// FUNCTION TO SWITCH BRUSH COLOR WHEN CLICKING ONE OF THE FOLLOWING COLORS
const palette = document.querySelector('.palette'); 

palette.addEventListener('click', function (event) {

  // Get the palette color HTML element and the brush HTML element
  const paletteColorElement = event.target; 
  const brush = document.querySelector('.current-brush');

  // Get the old color class and the new color class of the brush
  const brushOldColor = brush.classList[1]; 
  const brushNewColor = paletteColorElement.classList[1];
  console.log('brush new color:', brushNewColor);

  // For the brush, replace the old color class with the new color class
brush.classList.replace(brushOldColor, brushNewColor); 

})

// FUNCTION TO PAINT IN CANVAS WITH MOUSE 

// * CANVAS * // 
canvas.addEventListener('mouseover', function (event) {
  
  // Get the palette color HTML element and the canvas HTML element
  const paletteColorElement = event.target; 
  const brush = document.querySelector('.current-brush');
  const canvas = document.querySelector('.color-5');

  // Get the old color class and the new color class for the canvas
  const canvasColor = paletteColorElement.classList[1];
  console.log('Canvas Color:', canvasColor);
  const canvasColor2 = brush.classList[1];
  console.log('Canvas New Color:', canvasColor2);

  // For the canvas, add colors to canvas 
  canvas.classList.replace(canvasColor, canvasColor2); 

})



}

update(); 