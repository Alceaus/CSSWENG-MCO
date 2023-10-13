const xValuesAllEmployees = ["Project A", "Project B", "Project C", "Project D", "Project E"];
const yValuesAllEmployees = [55, 49, 44, 24, 15];
const barColorsAllEmployees = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("chartAllEmployees", {
  type: "doughnut",
  data: {
    labels: xValuesAllEmployees,
    datasets: [{
      backgroundColor: barColorsAllEmployees,
      data: yValuesAllEmployees
    }]
  },
  options: {
    title: {
      display: true,
      text: "Number of Employees Per Project"
    }
  }
});



const xValuesAllDeployments = ["Project A", "Project B", "Project C", "Project D", "Project E"];
const yValuesAllDeployments = [55, 49, 44, 24, 15];
const barColorsAllDeployments = ["red", "green","blue","orange","brown"];

new Chart("chartAllDeployments", {
  type: "bar",
  data: {
    labels: xValuesAllDeployments,
    datasets: [{
      backgroundColor: barColorsAllDeployments,
      data: yValuesAllDeployments
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Deployment (in Hours) Per Project"
    }
  }
});