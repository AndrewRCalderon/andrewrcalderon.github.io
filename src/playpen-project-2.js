// imports
import * as d3 from "d3";

// Reporting questions:

// I think I would like to take an outlier first approach here,
// just because WHY NOT

// 1. The relationship between sampling and the refusal reason?
// 2. What countries appear most & least often and how did that change over time?
// 3. What are the most common and uncommon industry and product types?
// 4. What are the most common and uncommon district offices?

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

const requestData = async () => {
  const response = await fetch(
    "https://api-datadashboard.fda.gov/v1/import_refusals",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Authorization-User": "andrewrcalderon@gmail.com",
        "Authorization-Key": "U3E6V3AG26USW0Q",
      },
      body: JSON.stringify({
        start: 1,
        sort: "RefusalDate",
        sortorder: "ASC",
        filters: {
          RefusalDateFrom: ["2001-10-01"],
          RefusalDateTo: ["2022-10-05"],
        },
        columns: [
          "FirmName",
          "CountryName",
          "DistrictDescription",
          "IndustryCodeDescription",
          "ProductCodeDescription",
          "RefusalDate",
          "FDASampleAnalysis",
          "PrivateLabAnalysis",
          "RefusalCharges",
        ],
      }),
    }
  );
  const myJson = await response.json();

  return myJson.result;
};

const data = await requestData();
console.log(data);
