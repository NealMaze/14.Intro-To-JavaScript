var wholeData = data;
var htmlTable = d3.select("tbody");

htmlTable.html("Cleared Table")

function crTable (wholeData) {
  htmlTable.html("Cleared Table");
  wholeData.forEach(function(ufoReport) {
    var line = htmlTable.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      var cell = line.append("td");
      cell.text(value);
    });
  });
}

function dateFilter() {
  var dateFilter = document.getElementById("datetime").value;
  console.log(dateFilter);
  var filData = wholeData.filter(event => 
    event.datetime === dateFilter
  );
  console.log(filData);
  crTable(filData);
};



var enter = d3.select("#filter-btn");
enter.on("click", dateFilter);


crTable(wholeData);