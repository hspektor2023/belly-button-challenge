// Fetch the data and populate the dropdown list
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
  .then(function(data) {
    var dropdown = d3.select("#selDataset"); // Select the dropdown element

    // Iterate over the data and add options to the dropdown
    data.names.forEach(function(name) {
      dropdown.append("option").attr("value", name).text(name);
    });

    // Call the updateSampleMetadata function initially with the first ID in the dropdown
    updateSampleMetadata(data.names[0]);
  })
  .catch(function(error) {
    console.log("Error loading data:", error);
  });





