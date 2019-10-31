// from data.js
var tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");

data.forEach(d => {
    var row = tbody.append("tr");
    for (key in d){
        row.append("td").text(d[key]);
    }
});

//Referencing the button on the page
var button = d3.select("#filter-btn");

//Referencing the input element in page
var input = d3.select("#datetime");

button.on("click", function() {
    console.log("test");
    console.log(d3.event.target);
    var input = d3.select("#datetime");
    newTable = data.filter(d => data.datetime === input);
    newTable.forEach(d => {
        row = tbody.append("tr");
        for (key in d){
            row.append("td").text(d[key]);
        } 
    })
});

