
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
//Chart type
var chartType = function (data) {
  if (typeof data[0] === 'number') {
    options.chartType = "Single";
    options.dataset = [];
    options.datasetColour = [];
    for (i = 0; i < data.length; i++) {
      options.dataset.push([data[i]]);
      options.datasetColour.push([options.barColour[i]]);
    }
    options.barColour = options.datasetColour;
  } else if (typeof data[0] === 'object') {
    options.chartType = "Stacked";
    options.dataset = data;
    options.datasetColour = options.barColour;
  } else {
    options.chartType = "Invalid Data";
    alert("Invalid data");
  }
};

/////Y-Axis //FUTURE FEATURE add functionality to determine any negative numbers and max value under one

var yTicks = function (data, options) {
  var yTicks = ['0_'];
  var ticks = 0;

  // MaxValue //
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

  //MinValue
  var minValue = maxValue;
  if (options.chartType === 'Single') {
    minValue = Math.min.apply(null, data);
  } else if (options.chartType === 'Stacked') {
    for (i = 0; i < data.length; i++) {
      for (j = 0; j < data[i].length; j++) {
        if (data[i][j] < minValue) {
          minValue = data[i][j];
        }
      }
    }
  } options.minValue = minValue;


  //Determine the start value of y axis based on if there are any negative numbers and for  max value under one


  // Y Axis Ticks - 5 ticks // FUTURE FEATURE - ADJUST NUMBER OF TICKS

  //Determine tick increment operator

  for (i = 0; i < 5; i++) {
    if (ticks < 0) {
      ticks -= Math.ceil(0.20 * options.maxValue);
    } else if (ticks >= 0) {
      ticks += Math.ceil(0.20 * options.maxValue);
    }
    yTicks.unshift((ticks + "-<br><br><br><br>"));
  }
  yTicks = yTicks.join("");
  options.maxYValue = ticks;
  options.yTicks = yTicks;
  return (yTicks);
};


//stacksdata
var stacksData = function (data, options) {
  options.stacks = {};

  for (i = 0; i < options.dataset.length; i++) {
    var stackBarClass = "bar" + (i + 1);
    options.stacks[stackBarClass] = [];
    for (j = 0; j < options.dataset[i].length; j++) {
      options.stacks[stackBarClass].push({
        stackClass: ("stack" + (j + 1)),
        stackLabel: options.labels[i],
        stackData: options.dataset[i][j],
        stackCategories: options.stackCategories[j],
        stackGridArea: ((j + 1) + "/" + (i + 1) + "/span 1/span 1"),
        stackColour: options.datasetColour[i][j],
        stackHeight: ((options.dataset[i][j] / options.maxYValue) * 100)
      });
    }
    options.stacks[stackBarClass].sort(function (a, b) {
      return a.stackData - b.stackData;
    });
  }
};

//Height and Bottom
var stackHeight = function (options) {
  for (i = 0; i < options.dataset.length; i++) {
    var bottom = 0;
    for (j = 0; j < options.dataset[i].length; j++) {
      options.stacks["bar" + (i + 1)][j].stackBottom = bottom;
      options.stacks["bar" + (i + 1)][j].stackHeight = (
        options.stacks["bar" + (i + 1)][j].stackHeight - bottom
      );
      bottom = options.stacks["bar" + (i + 1)][j].stackHeight;
      //JQUERY CSS
      (options.stacks["bar" + (i + 1)][j].stackHeight = options.stacks["bar" + (i + 1)][j].stackHeight + "%");
      (options.stacks["bar" + (i + 1)][j].stackBottom = (options.stacks["bar" + (i + 1)][j].stackBottom + "%"));

    }
  }
};

//X-Axis
var xAxisCssGrid = function (data) {
  var xAxisHtml = "";
  var xAxisCount = 0;
  for (i = 0; i < data.length; i++) {
    xAxisCount++;
    xAxisHtml += "auto ";
    options.ySpan = 1;
  }
  options.xCount = xAxisCount;
  options.xAxisHtml = xAxisHtml.slice(0, -1);
  return xAxisHtml;
};

//X Labels
var labels = function (options) {
  var labelsHtml = "";
  for (i = 0; i < options.labels.length; i++) {
    labelsContent = "var label" + (i + 1) + " = $('<div>').addClass('label" + (i + 1) + "').text('" + options.labels[i] + "')";
    labelsCss = '.css({"position": "center", "color": "' + (options.labelColour[i]) + '"';
    labelsHtml = labelsHtml + labelsContent + labelsCss;
  }
  options.labelsHtml = labelsHtml;
  return labelsHtml;
};

//validations and Errors



var drawBarChart = function (data, options, element) {
  chartType(data);
  yTicks(data, options);
  stacksData(data, options);
  stackHeight(options);
  xAxisCssGrid(data);
  labels(options);
};


//USER INPUT
//single
var data = [2, 5, 9, 3, 8];

options = {

  //Title//
  titleName: "Title",
  titleFontSize: "40px",
  titleFontColour: "black",

  //Labels//
  labels: ["a", "b", "c", "d", "e"],
  labelColour: ["tomato", "orange", "dodgerblue", "brown", "green"],

  //Bar// FUTURE FEATURES - ANIMATION / AUTO BARSPACING OPTION
  barColour: ["tomato", "orange", "dodgerblue", "brown", "green"],
  barSpacing: "10%",

  stackCategories: [],

  //Axes// FUTURE FEATURES - AXES LINE COLOUR AND FONT COLOUR / FONT STYLE//CHART AREA BACKGROUND COLOUR
  yTitle: "Units",
  xTitle: "X-Axis",

  //Position of value inside bar (for top - "baseline", for bottom - "end", and for middle - "center") // FUTURE FEATURES - HIDE VALUES
  valuePos: "baseline"
};

//Chart Placement
var element = ".chart";

//TESTS
drawBarChart(data, options, element);
console.log(options);

//
//Stacked

data = [[1, 2], [5, 4], [7, 8]];
options = {
  //Title//
  titleName: "Title",
  titleFontSize: "40px",
  titleFontColour: "black",
  //Labels//
  labels: ["alpha", "beta", "charlie"],
  labelColour: ["blue", "blue", "blue"],
  //Stacked Bar//
  barColour: [["tomato", "orange"], ["dodgerblue", "red"], ["green", "purple"]],
  stackCategories: ["a", "b"],
  barSpacing: "20%",
  //Axes//
  yTitle: "Units",
  xTitle: "X-Axis",

  //Value Position inside bar
  valuePos: "0%"
};
element = "";



//

//
