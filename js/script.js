
/* eslint-disable no-console */
var drawBarChart = function (data, options, element) { console.log(""); };


var data = [1, 2, 3, 4, 5];
var labels = ["a", "b", "c", "d", "e"];
var options = { width: 100, height: 100 };
var element = "#barchart";
var columns = {};
var maxValue = data.max;
for (var i = 0; i < data.length; i++) {
  (data[i]) = {
    color: "red",
    height: ((data[i]) / maxValue) * 100,
    label: labels[i] };

}
console.log(drawBarChart(data, options, element));
console.log(maxValue);
console.log(data);

//data Input functions//


//chart axis

//chart graphic




