// Square of a number

let squaredNumber = Math.pow(5,2);
console.log("5*5 = ",squaredNumber);

//Swapping 2 numbers 
let a = 5;
let b = 10;

[a, b] = [b, a]; // ES6

console.log(a, b);

// Addition of 3 numbers

function sum()
{
  var w = document.getElementById('num1').value || 0;
  var x = document.getElementById('num2').value || 0;
  var y = document.getElementById('num3').value || 0;

  var z=parseInt(w)+parseInt(x)+parseInt(y);

  document.getElementById('final').value=z;
};

// Celsius to Fahrenheit conversion
function convert(degree) {
    var x;
    if (degree == "C") {
      x = document.getElementById("c").value * 9 / 5 + 32;
      document.getElementById("f").value = Math.round(x);
    } else {
      x = (document.getElementById("f").value -32) * 5 / 9;
      document.getElementById("c").value = Math.round(x);
    }
  }

//   Meter to miles

function getMiles(i) {
    return i*0.000621371192;
}
function getMeters(i) {
    return i*1609.344;
}

// Pounds to kg
function kiloweightConvert(value) {
    document.getElementById("Pounds").innerHTML=value*2.2046;
    document.getElementById("Ounces").innerHTML=value*35.274;
    document.getElementById("Grams").innerHTML=value*1000;
    document.getElementById("Stones").innerHTML=value*0.1574;
  }

//   Calculate Batting Average

var chipper = {
    firstName: 'Chipper',
    hits: 10,
    atBats: 30,
    calcAVG: function() {
        this.avg = this.hits / this.atBats;
        return this.avg;
    }
}
 
chipper.calcAVG();
console.log(chipper.firstName + ' has a batting average of ' + chipper.avg);

// Calculate five test scores and print their average

let sum = ourarray.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
let avg = (sum / ourarray.length) || 0;

console.log(sum); // print out sum
console.log(avg); // print out avg

// Power of any number x ^ y

    
    var b, e, r = 1, i = 1;
    
   
    
    b = 5;
    e = 4;

    
    while(i <= e)
    {
        r *= b;
        i++;
    }
    
    document.write("Result:: " + b + "^" + e + " = " + r )
    
    // Calculate Simple Interest
    var p, t, r, SI;
    
    
    
    p = 15;
    t = 12;
    r = 12;
    
    SI = (p * t * r) / 100;
    
    
    document.write("Simple Interest = " + SI);

// Calculate area of an equilateral triangle
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

// Area Of Isosceles Triangle
function altitude(a,b)
{
  
    return Math.sqrt(Math.pow(a, 2) - (Math.pow(b, 2) / 4));
}
 

function area( b, h)
{
 

    return (1 * b * h) / 2;
}
 

let a = 2, b = 3;
    let h = altitude(a, b);
    document.write("Altitude= " + h.toFixed(2) + ", ");
 
    document.write( "Area= " + area(b, h).toFixed(2));

    // Volume Of Sphere
    function volume_sphere()
 {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
 } 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

// Volume Of Prism
function findVolume( l,  b, h)
{
 
    
    let volume = (l * b * h) / 2;
 
    return volume;
}
 

  let l = 18, b = 12, h = 9;
 
 
    document.write( "Volume of triangular prism: " + findVolume(l, b, h));


    //  Find area of a triangle.

    const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');


const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);

// Give the Actual cost and Sold cost, Calculate Discount Of Product
getPrice = function() {
  var numVal1 = Number(document.getElementById("price").value);
  var numVal2 = Number(document.getElementById("discount").value) / 100;
  var totalValue = numVal1 - (numVal1 * numVal2)
  document.getElementById("total").value = totalValue.toFixed(2);
}

// Given their radius of a circle and find its diameter, circumference and area.
var r, d, c, a;
    


r = 10;
d = 2 * 10;
c = 2 * 3.14 * 10;
a = 3.14 * (10 * 10);

document.write("Diameter = " + d + " units<br />");
document.write("Circumference = " + c + " units<br />");
document.write("Area = " + a + " sq. units");

// Given two numbers and perform all arithmetic operations.
var p, q;
var sum, sub, mul, div, mod;
p = 8;
q = 6;

sum = p + q;
sub = p - q;
mul = p * q;
div = p / q;
mod = p % q;


document.write("SUM " + p + " + " + q + " = " + sum + "<br />");
document.write("DIFFERENCE " + p + " - " + q + " = " + sub + "<br />");
document.write("PRODUCT " + p + " * " + q + " = " + mul + "<br />");
document.write("QUOTIENT " + p + " / " + q + " = " + div + "<br />");
document.write("MODULUS " + p + " % " + q + " = " + mod);

// Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
let n = 5; 

let string = "";

for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) { 
    string += "*";
  }
  
  string += "\n";
}

console.log(string);

// Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
function calculateBill(units)
{
     
    
    if (units <= 100)
    {
        return units * 10;
    }
    else if (units <= 200)
    {
        return (100 * 10)
            + (units - 100)
                  * 15;
    }
    else if (units <= 300)
    {
        return (100 * 10)
            + (100 * 15)
            + (units - 200)
                  * 20;
    }
    else if (units > 300)
    {
        return (100 * 10)
            + (100 * 15)
            + (100 * 20)
            + (units - 300)
                  * 25;
    }
    return 0;
}
     

var units = 250;
 
document.write(calculateBill(units));
 

