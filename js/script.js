
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
var data = (1, 2, 3);
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
  labels: ["a", "b", "c", "d", "e"],
  //Value Position inside bar
  valuePos: "0%"
};
var element = "";

//console.log(Math.max(data));
//Rendering non-customizable //functions//




//DataNormalization

//MaxValue Determination

//Max Y tick and Y ticks





////functions




var drawBarChart = function (data, options, element) {
  var dataNorm = function (data) {
    return data;
  };

};

var barWidth = "";
var barHeight = "";
var barType = ["Single value", "Multiple Value (Stacked)"];


var barChart = {};

var yTicks = function (data) {
  var yTicks = ['<br><br><br><br>0_'];
  var maxValue = Math.max(data);
  var ticks = 0;
  for (i = 0; i < 5; i++) {
    ticks += Math.ceil(0.20 * maxValue);
    yTicks.unshift(("<br><br><br><br>" + ticks + "-"));
  }
  yTicks = yTicks.join("");
  return (yTicks);
}

  ;
/*`<div class="barChart">

 <div class="title">${options.titleName}</div>


 <div class="yAxis">

   <div class="yTitle">Units</div>

   <div class="yTicks">5-<br><br><br><br>4-<br><br><br><br>3-<br><br><br><br>2-<br><br><br><br>1-<br><br><br><br>0_
   </div>

 </div>

 <div class="xAxis">
   <div class="label1">a</div>
   <div class="label2">b</div>
   <div class="label3">c</div>
   <div class="xTitle">X-Axis</div>
 </div>

 

 <div class="chartArea">

   <div class="bar1">
     <p class="value1">
       Value1
     </p>
   </div>
   <div class="bar2">
     <p class="value2">
       Value2
     </p>
   </div>
   <div class="bar3">
     <p class="value3">
       Value3
     </p>
   </div>
 </div>
</div>
`
return chartText
};


var columns = {};

/*for (var i = 0; i < data.length; i++) {
 (data[i]) = {
   color: "red",
   height: ((data[i]) / maxValue) * 100,
   label: labels[i]
 };

}*/

data = (1, 2, 3);
options = {
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
  labels: ["a", "b", "c"],
  //Value Position inside bar
  valuePos: "0%"
};
element = "";

console.log(drawBarChart(data, options, element));
console.log(yTicks(data));
//console.log(ticks);
//data Input functions//


//chart axis

//chart graphic




