
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




////////////////////OPTIONS///////////////////////////
//input variables

//prompt variables

//type
var barType = ["Single value", "Multiple Value (Stacked)"];

//title
var titleName = "";
var titleFontSize = "";
var titleFontColour = [];
//var title = { name: titleName, size: titleFontSize, colour: titleFontColour };

//Numerical value position
var valuePos = ["Top", "Centre", "Bottom"];

//Bar and Labels


var labelColour = "";
var barColour = "";
var barSpacing = "";
var xAxisTitle = "X-Axis Title";
var yAxisTitle = "Units";

//////Rendering variables
var barWidth = "";
var barHeight = "";



////functions




var drawBarChart = function (data, options, element) {
  console.log("");
};


var options = { width: 100, height: 100 };
var element = "#barchart";
var columns = {};
var maxValue = data.max;
for (var i = 0; i < data.length; i++) {
  (data[i]) = {
    color: "red",
    height: ((data[i]) / maxValue) * 100,
    label: labels[i]
  };

}
console.log(drawBarChart(data, options, element));
console.log(maxValue);
console.log(data);

//data Input functions//


//chart axis

//chart graphic




