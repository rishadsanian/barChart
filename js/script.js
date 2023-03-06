
/* eslint-disable no-console */

/*
Bar Chart
Display a list of single values, horizontally as a bar chart

Numerical values should also be displayed inside of the bar
The position of values should be customizable too:
Top, centre or bottom of the bar.
Bar sizes should be dependent on the data that gets passed in

Bar width should be dependent on the total amount of values passed.
Bar height should be dependent on the values of the data.
Bar properties that should be customizable:

Bar Colour
Label Colour
Bar spacing (space between bars)
Bar Chart axes
X-axis should show labels for each data value

Think about how you would need to structure your data to associate a label to each value
Y-axis should show ticks at certain values

Think about where you would configure these values. Should they be part of the data or the options to the bar chart function.
The title of the bar chart should be able to be set and shown dynamically

The title of the bar chart should also be customizable:

Font Size
Font Colour

*/

/////////////////////DATA/////////////////////////////

/////////single value
//input variables
var data = [1, 2, 3, 4, 5];
var options = {
  //Title//
  titleName: "Title",
  titleFontSize: "40px",
  titleFontColour: "black",
  //Bar//
  barColour: "orange",
  labelColour: "green",
  barSpacing: "20%",
  //Axes//
  yTitle: "Units",
  xTitle: "X-Axis",
  //Labels//
  labels: [a, b, c, d, e],
  //Value Position inside bar
  valuePos: "0%"
};
var element = "";


//Rendering non-customizable //functions//

var dataNorm = function (data){
  
};
var maxValue = data.max;
var maxYTick = Math.ceil(1.25 * data.maxValue);
var yTicks = [];
var barWidth = "";
var barHeight = "";
var barType = ["Single value", "Multiple Value (Stacked)"];


//DataNormalization

//MaxValue Determination

//Max Y tick and Y ticks





////functions




var drawBarChart = function (data, options, element) {
  console.log("");
};


var columns = {};

/*for (var i = 0; i < data.length; i++) {
  (data[i]) = {
    color: "red",
    height: ((data[i]) / maxValue) * 100,
    label: labels[i]
  };

}*/
console.log(drawBarChart(data, options, element));
console.log(maxValue);
console.log(data);

//data Input functions//


//chart axis

//chart graphic




var value1 = document.getElementsByClassName('value1');
// then we set it's innerHTML property
value1.innerHTML = '200';