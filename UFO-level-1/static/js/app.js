// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildTable(table){
data.forEach(d => {
    var row = tbody.append("tr");
    for (key in d){
        row.append("td").text(d[key]);
    }
  });
}

buildTable(tableData);

//Referencing the button on the page
var button = d3.select("#filter-btn");

//Referencing the input element in page
var input = d3.select("#datetime");

button.on("click", function() {
    console.log("test");
    console.log(d3.event.target);
    var input = d3.select("#datetime").property("value");
    console.log(input)
    filterTable = tableData.filter(d => d.datetime === input);
    console.log(filterTable);
    tbody.html("");
    filterTable.forEach(d => {
       row = tbody.append("tr");
       for (key in d){
           row.append("td").text(d[key]);
       } 
     buildTable(filterTable);
    })
});

