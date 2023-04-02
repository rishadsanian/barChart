
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

/////Y-Axis //FUTURE FEATURE add functionality to determine any negative numbers and max value under one

var yTicks = function (data) {
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
  var minValue = 0;
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

//X-Axis
var xAxisCssGrid = function (data) {
  var xAxisHtml = "";
  var xAxisCount = 0;
  if (options.chartType === 'Single') {
    for (i = 0; i < data.length; i++) {
      xAxisCount++;
      xAxisHtml += "auto ";
      options.ySpan = 1;
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

//bar Height Single




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
  labelColour: ["tomato", "orange", "dodgerblue"],
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
console.log(labels(options));
console.log(options);
console.log(options.labels.length !== options.xCount);



//chart axis

//chart graphic




