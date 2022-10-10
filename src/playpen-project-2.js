// imports
import * as d3 from "d3";

function drawChart() {
  const containerID = document.querySelector("#g-simple-viz");
  const aspectRatio = 16 / 12;
  const width = containerID.clientWidth;
  const height = width * aspectRatio;

  const margin = { top: 10, right: 10, left: 10, bottom: 10 };

  const chartHeight = height - margin.top - margin.bottom;
  const chartWidth = height - margin.right - margin.left;

  const svg = d3.select(containerID).append("svg");

  svg
    .attr("height", height)
    .attr("width", width)
    .attr("class", "g-simple-small-multiples-bar-chart");

  console.log(svg);
}

drawChart();

// const userAction = async () => {
//     const response = await fetch('http://example.com/movies.json', {
//       method: 'POST',
//       body: myBody, // string or object
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//   }
