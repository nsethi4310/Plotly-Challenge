// const url = "samples.json";

//   d3.json(url).then(function(data){
//     console.log(data);
//   });

  const url = "samples.json";

  // Fetch the JSON data 
  d3.json(url).then(function(data) {
    console.log(data);
  });
  

  dropdown()

function dropdown(){
  const url = "samples.json";

  d3.json(url).then((data)=>{
      namesdata = data.names.slice(0,20);
      metadata=data.metadata
      console.log(namesdata);
      var dd = d3.select("#selDataset");
      namesdata.forEach((sample) => {
        dd.append("option")
        .text(sample)
        .property("value");
      });

  var firstrecord= namesdata[0];
   table(firstrecord)
   charts(firstrecord)
  });

}

// function update_data(new_data){
//   function table(new_data);

// }

function optionChanged(update_data){
  table(update_data)
  charts(update_data)
}

function table(test){
  const url = "samples.json";
  d3.json(url).then((data)=> {
    samples = data.metadata;
    fitlereddata = samples.filter(test1=>test1.id==test);
    dd1=fitlereddata[0];

  
    
    var table = d3.select("#sample-metadata");
    var tbody = table.select("tbody");

    

    table.html("");
    
    Object.entries(dd1).forEach(([key, value]) => {
      var cell = table.append("tr");
      cell.append("td").html(`${key}`);
      cell.append("td").html(`${value}`);
  
    });

  });
      
    
    }  

    
  dropdown()

function charts(test){
  d3.json(url).then((data)=> {
    var samples1 = data.samples;
    var fitlereddata1 = samples1.filter(test1=>test1.id==test);
    var dd2=fitlereddata1[0];
    console.log(dd2);

    var svalue = dd2.sample_values;
    var oid = dd2.otu_ids;
    var otlabels = dd2.otu_labels;

    var trace1 = {
          x: svalue.slice(0,10).reverse(),
          y: oid.slice(0,10).map(x =>`OTUID ${x}`).reverse(),         
          text: otlabels.slice(0,10).reverse(),
          type: "bar",
          orientation: "h"
        };
    var data = [trace1];
    var layout= {title: "Top 10 bacteria found in body"};
    Plotly.newPlot("bar", data, layout);
     

    var trace2={
      y: svalue,
      x: oid,
      text: otlabels,
      mode:'markers',
      marker:{color:oid, size: svalue}


    };

    var layout1 = {
      title: "OTU Occurance",
      showlegend: false,
      // height: 600,
      // width: 1200
  };

    data1=[trace2];
    Plotly.newPlot("bubble", data1, layout1);

      });



    

  }

  












// sorting otu_id

// var otu_id = filtereddata.sort((a, b) => b.samples.otu_ids - a.samples.otu_ids);

// // Slice the first 10 objects for plotting
// slicedData = otu_id.slice(0, 10);

// // Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();

// // var sample_values = 
// // var otu_labels  =

// var trace1 = {
//     x: reversedData.map(object => object.otu_ids),
//     y: reversedData.map(object => object.id),
//     text: reversedData.map(object => object.otu_labels),
//     name: "OTU",
//     type: "bar",
//     orientation: "h"
//   };
  
//   // data
//   var data = [trace1];
  
//   // Apply the group bar mode to the layout
//   var layout = {
//     title: "OTU found in the body",
//     margin: {
//       l: 100,
//       r: 100,
//       t: 100,
//       b: 100
//     }
//   };
  
//   // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("bar", data, layout):

