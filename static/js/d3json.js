d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
      .then(function(data) {
        // Data has been successfully loaded
        console.log(data);
      })
      .catch(function(error) {
        // An error occurred while loading the data
        console.log(error);
      });