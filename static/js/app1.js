d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
  .then(function(data) {
    // Extracting the data for the bubble chart
    var sampleValues = data.samples[0].sample_values;
    var otuIds = data.samples[0].otu_ids;
    var otuLabels = data.samples[0].otu_labels;

    // Creating the bubble chart using Plotly
    var trace = {
      x: otuIds,
      y: sampleValues,
      text: otuLabels,
      mode: "markers",
      marker: {
        size: sampleValues,
        color: otuIds,
        colorscale: "Earth"
      }
    };

    var layout = {
      title: "Bubble Chart",
      xaxis: { title: "OTU IDs" },
      yaxis: { title: "Sample Values" }
    };

    var data = [trace];

    Plotly.newPlot("bubble", data, layout);
  })
  .catch(function(error) {
    console.log("Error loading data:", error);
  });






