d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
  .then(function(data) {
    // Extracting the data for the bar chart
    var sampleValues = data.samples[0].sample_values.slice(0, 10).reverse();
    var otuIds = data.samples[0].otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
    var otuLabels = data.samples[0].otu_labels.slice(0, 10).reverse();

    // Create the bar chart using Plotly
    var trace = {
      x: sampleValues,
      y: otuIds,
      text: otuLabels,
      type: "bar",
      orientation: "h"
    };

    var layout = {
      title: "Top 10 OTUs",
      xaxis: { title: "Sample Values" },
      yaxis: { title: "OTU IDs" }
    };

    var data = [trace];

    Plotly.newPlot("bar", data, layout);
  })
  .catch(function(error) {
    console.log("Error loading data:", error);
  });

    






