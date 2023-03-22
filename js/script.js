
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


////functions




var drawBarChart = function (data, options, element) {
  //Chart type
  if (typeof data[0] === 'number') {
    options.chartType = "Single";
  } else if (typeof data[0] === 'object') {
    options.chartType = "Stacked";
  } else {
    options.chartType = "Invalid Data";
    alert("Invalid data");
  }

  /*Label Validation

  if (options.labels.length !== options.xCount) {
    alert("Update Labels");
  }
*/


};


/////Y-Axis
var yTicks = function (data) {
  var yTicks = ['0_'];
  var ticks = 0;

  //MaxValue
  var maxValue = 0;
  if (options.chartType === 'Single') {
    maxValue = Math.max.apply(null, data);
  } else if (options.chartType === 'Stacked') {
    for (i = 0; i < data.length; i++) {
      for (j = 0; j < data[i].length; j++) {
        if (data[i][j] > maxValue) {
          maxValue = data[i][j];
        }
      }
    }
  } options.maxValue = maxValue;

  ///Y Axis Ticks - 5 ticks
  for (i = 0; i < 5; i++) {
    ticks += Math.ceil(0.20 * options.maxValue);
    yTicks.unshift((ticks + "-<br><br><br><br>"));
  }
  yTicks = yTicks.join("");
  options.maxYValue = ticks;
  return (yTicks);
};

//X-Axis
var xAxisCssGrid = function (data) {
  var xAxisHtml = "";
  var xAxisCount = 0;
  if (options.chartType === 'Single') {
    for (i = 0; i < data.length; i++) {
      xAxisCount++;
      xAxisHtml += "auto ";
    }
  } else if (options.chartType === 'Stacked') {
    for (i = 0; i < data.length; i++) {
      for (j = 0; j < data[i].length; j++) {
        xAxisCount++;
        xAxisHtml += "auto ";
      }
    }
  }
  options.xCount = xAxisCount;
  options.xAxisHtml = xAxisHtml;
  return xAxisHtml;
};



var barWidth = "";
var barHeight = "";


var barChart = {};

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
//data = [[1, 2, 3], [4, 5, 6]];
data = [1, 2, 3];
options = {
  //Title//
  titleName: "Title",
  titleFontSize: "40px",
  titleFontColour: "black",
  //Labels//
  labels: ["a", "b", "c"],
  //Bar//
  barColour: ["tomato", "orange", "dodgerblue"],
  labelColour: "green",
  barSpacing: "20%",
  //Axes//
  yTitle: "Units",
  xTitle: "X-Axis",

  //Value Position inside bar
  valuePos: "0%"
};
element = "";

console.log(drawBarChart(data, options, element));
console.log(yTicks(data));
console.log(xAxisCssGrid(data));
console.log(options);
console.log(options.labels.length !== options.xCount);
//data Input functions//


//chart axis

//chart graphic




