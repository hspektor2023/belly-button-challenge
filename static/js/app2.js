// Function to handle the dropdown selection change
function optionChanged(selectedId) {
  // Update the sample metadata based on the selected ID
  updateSampleMetadata(selectedId);
}

// Function to update the sample metadata based on the selected ID
function updateSampleMetadata(selectedId) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
    .then(function(data) {
      // Find the selected sample metadata
      var metadata = data.metadata.find(function(d) {
        return d.id == selectedId;
      });

      // Get the sample-metadata element
      var sampleMetadataElem = d3.select("#sample-metadata");

      // Clear the existing metadata
      sampleMetadataElem.html("");

      // Append the metadata key-value pairs to the sample-metadata element
      Object.entries(metadata).forEach(function([key, value]) {
        sampleMetadataElem.append("p").text(`${key}: ${value}`);
      });
    })
    .catch(function(error) {
      console.log("Error loading data:", error);
    });
}

// Call the updateSampleMetadata function initially with the first ID in the dropdown
updateSampleMetadata("940");






