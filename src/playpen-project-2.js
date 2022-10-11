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

const requestData = async () => {
  const response = await fetch(
    "https://api-datadashboard.fda.gov/v1/inspections_classifications",
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
        rows: 10,
        sort: "InspectionEndDate",
        sortorder: "ASC",
        filters: {
          InspectionEndDateFrom: ["2001-11-27"],
          InspectionEndDateTo: ["2020-11-27"],
        },
        columns: [
          "FEINumber",
          "LegalName",
          "InspectionID",
          "Classification",
          "InspectionEndDate",
        ],
      }),
    }
  );
  const myJson = await response.json();
  console.log(myJson);
};

requestData();
