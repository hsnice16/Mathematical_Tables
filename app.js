var tableOf = 2;
const thColors = [
  "#FECACA",
  "#FDE68A",
  "#A7F3D0",
  "#BFDBFE",
  "#C7D2FE",
  "#DDD6FE",
  "#FBCFE8",
  "#FDE68A",
  "#FED7AA",
];
const tdColors = [
  "#FEF2F2",
  "#FFFBEB",
  "#ECFDF5",
  "#EFF6FF",
  "#EEF2FF",
  "#F5F3FF",
  "#FDF2F8",
  "#FFFBEB",
  "#FFF7ED",
];
const divElement = document.createElement("div");

function createTableElement(tableOf) {
  const tableElement = document.createElement("table");
  const tableBody = document.createElement("tbody");
  const tableRow = document.createElement("tr");
  const tableHeaderCell = document.createElement("th");

  // Styling
  tableElement.style.fontSize = `${12 + tableOf}px`;
  tableHeaderCell.style.backgroundColor = thColors[tableOf - 2];

  const tableHeaderCellTextNode = document.createTextNode(
    `Table of ${tableOf}`
  );
  tableHeaderCell.appendChild(tableHeaderCellTextNode);
  tableRow.appendChild(tableHeaderCell);

  for (let times = 1; times <= 10; times++) {
    const tableDataCell = document.createElement("td");
    const tableDataCellTextNode = document.createTextNode(`${tableOf * times}`);

    // Styling
    tableDataCell.style.backgroundColor = tdColors[tableOf - 2];

    tableDataCell.appendChild(tableDataCellTextNode);
    tableRow.appendChild(tableDataCell);
  }

  tableBody.appendChild(tableRow);
  tableElement.appendChild(tableBody);

  return tableElement;
}

function createDivElement(tableOf) {
  divElement.appendChild(createTableElement(tableOf));

  document.querySelector("#container").appendChild(divElement);
}

var intervalId = setInterval(() => {
  createDivElement(tableOf);
  tableOf += 1;

  if (tableOf === 11) {
    clearInterval(intervalId);
  }
}, 5000);
