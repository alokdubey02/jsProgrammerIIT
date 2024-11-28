class AnimalTable {
  constructor(data, containerId, columns) {
    this.data = data;
    this.container = document.getElementById(containerId);
    this.columns = columns;
  }

  renderTable() {
    const tableHeader = this.generateTableHeader();
    const tableBody = this.generateTableBody();
    const tableHtml = `
        <table class="table table-bordered table-hover">
          ${tableHeader}
          ${tableBody}
        </table>
      `;

    this.container.innerHTML = tableHtml;
    this.renderAddForm();
  }

  generateTableHeader() {
    let headerHtml = `<thead class="table-dark"><tr>`;
    this.columns.forEach((col) => {
      headerHtml += `<th>${col.name}`;
      if (col.sortable) {
        headerHtml += `
            <button 
              class="btn btn-sm btn-dark" 
              style="padding: 0 5px; font-weight: bold; color: white; border: 1px solid white" 
              onclick="sortTable('${this.container.id}', '${col.field}')">
              Sort
            </button>
          `;
      }
      headerHtml += `</th>`;
    });
    headerHtml += `<th>Actions</th></tr></thead>`;
    return headerHtml;
  }

  generateTableBody() {
    let bodyHtml = `<tbody>`;
    this.data.forEach((row, index) => {
      bodyHtml += `<tr>`;
      this.columns.forEach((col) => {
        let cellValue = this.formatCellValue(row[col.field], col, row);
        bodyHtml += `<td>${cellValue}</td>`;
      });
      bodyHtml += this.generateActionButtons(index);
      bodyHtml += `</tr>`;
    });
    bodyHtml += `</tbody>`;
    return bodyHtml;
  }

  formatCellValue(value, column, row) {
    if (column.style === "bold") {
      return `<span class="bold-text">${value}</span>`;
    }
    if (column.style === "italic-blue") {
      return `<span class="italic-blue">${value}</span>`;
    }
    if (column.field === "image") {
      return `<img src="${value}" alt="Image" title="${row.name}" style="border: 2px solid black; cursor: pointer;">`;
    }
    return value;
  }

  generateActionButtons(index) {
    return `
        <td>
          <button 
            class="btn btn-primary btn-sm" 
            onclick="editRow('${this.container.id}', ${index})">
            Edit
          </button>
          <button 
            class="btn btn-danger btn-sm" 
            onclick="deleteRow('${this.container.id}', ${index})">
            Delete
          </button>
        </td>
      `;
  }

  renderAddForm() {
    const formHtml = `
        <form 
          onsubmit="addRow('${this.container.id}'); return false;" 
          class="mt-3">
          <div class="row g-2">
            <div class="col">
              <input 
                type="text" 
                class="form-control" 
                id="${this.container.id}-name" 
                placeholder="Name" 
                required>
            </div>
            <div class="col">
              <input 
                type="number" 
                class="form-control" 
                id="${this.container.id}-size" 
                placeholder="Size (ft)" 
                required>
            </div>
            <div class="col">
              <input 
                type="text" 
                class="form-control" 
                id="${this.container.id}-location" 
                placeholder="Location" 
                required>
            </div>
            <div class="col">
              <button type="submit" class="btn btn-success">Add</button>
            </div>
          </div>
        </form>
      `;
    this.container.insertAdjacentHTML("beforeend", formHtml);
  }
}

//2 done
// JSON data
const bigCatsData = [
  {
    species: "Big Cats",
    name: "Tiger",
    size: 10,
    location: "Asia",
    image: "./images/tiger.png",
  },
  {
    species: "Big Cats",
    name: "Lion",
    size: 8,
    location: "Africa",
    image: "./images/lion.png",
  },
  {
    species: "Big Cats",
    name: "Leopard",
    size: 5,
    location: "Africa and Asia",
    image: "./images/leopard.png",
  },
  {
    species: "Big Cats",
    name: "Cheetah",
    size: 5,
    location: "Africa",
    image: "./images/cheetah.png",
  },
  {
    species: "Big Cats",
    name: "Caracal",
    size: 3,
    location: "Africa",
    image: "./images/caracal.png",
  },
  {
    species: "Big Cats",
    name: "Jaguar",
    size: 5,
    location: "Amazon",
    image: "./images/jaguar.png",
  },
];

const dogsData = [
  {
    species: "Dog",
    name: "Rottweiler",
    size: 2,
    location: "Germany",
    image: "./images/rotwailer.png",
  },
  {
    species: "Dog",
    name: "German Shepherd",
    size: 2,
    location: "Germany",
    image: "./images/german.png",
  },
  {
    species: "Dog",
    name: "Labrador",
    size: 2,
    location: "UK",
    image: "./images/labrador.png",
  },
  {
    species: "Dog",
    name: "Alabai",
    size: 4,
    location: "Turkey",
    image: "./images/alabai.png",
  },
];

const bigFishData = [
  {
    species: "Big Fish",
    name: "Humpback Whale",
    size: 15,
    location: "Atlantic Ocean",
    image: "./images/humpback.png",
  },
  {
    species: "Big Fish",
    name: "Killer Whale",
    size: 12,
    location: "Atlantic Ocean",
    image: "./images/killerwhale.png",
  },
  {
    species: "Big Fish",
    name: "Tiger Shark",
    size: 8,
    location: "Ocean",
    image: "./images/tigershark.png",
  },
  {
    species: "Big Fish",
    name: "Hammerhead Shark",
    size: 8,
    location: "Ocean",
    image: "./images/hammerhead.png",
  },
];

// Utility functions
function sortTable(containerId, field) {
  const table = tables[containerId];
  table.data.sort((a, b) => (a[field] > b[field] ? 1 : -1));
  table.renderTable();
}

//8 (All the tables have features like adding animals with some default images. Should have validation features like prevent duplicates, valid numbers etc.)
function addRow(containerId) {
  const table = tables[containerId];
  const name = document.getElementById(`${containerId}-name`).value;
  const size = parseFloat(document.getElementById(`${containerId}-size`).value);
  const location = document.getElementById(`${containerId}-location`).value;

  // Validation for duplicates
  if (table.data.some((row) => row.name.toLowerCase() === name.toLowerCase())) {
    alert("Duplicate entry is not allowed.");
    return;
  }

  table.data.push({
    species: table.data[0].species,
    name,
    size,
    location,
    image: "https://via.placeholder.com/50",
  });
  table.renderTable();
}

// 9
function deleteRow(containerId, index) {
  const table = tables[containerId];
  table.data.splice(index, 1);
  table.renderTable();
}

//10
function editRow(containerId, index) {
  const table = tables[containerId];
  const row = table.data[index];
  const newName = prompt("Enter new name:", row.name);
  const newSize = prompt("Enter new size (ft):", row.size);
  const newLocation = prompt("Enter new location:", row.location);

  if (newName && newSize && newLocation) {
    table.data[index] = {
      ...row,
      name: newName,
      size: parseFloat(newSize),
      location: newLocation,
    };
    table.renderTable();
  }
}

//
// Initialize tables
const tables = {
  bigCatsTable: new AnimalTable(bigCatsData, "bigCatsTable", [
    //Table 1 has a sort feature on all fields except images.
    { name: "Name", field: "name", sortable: true },
    { name: "Size", field: "size", sortable: true },
    { name: "Location", field: "location", sortable: true },
    { name: "Image", field: "image", sortable: false },
  ]),
  dogsTable: new AnimalTable(dogsData, "dogsTable", [
    //Table 2 has a sort feature on Name and location
    { name: "Name", field: "name", sortable: true, style: "bold" }, //In table 2 the Names are shown in the bold text.
    { name: "Size", field: "size", sortable: false },
    { name: "Location", field: "location", sortable: true },
    { name: "Image", field: "image", sortable: false },
  ]),
  bigFishTable: new AnimalTable(bigFishData, "bigFishTable", [
    //Table 3 has a sort feature on size only.
    { name: "Name", field: "name", sortable: false, style: "italic-blue" }, //In table 3 the Names are shown in bold, italic and blue colour
    { name: "Size", field: "size", sortable: true },
    { name: "Location", field: "location", sortable: false },
    { name: "Image", field: "image", sortable: false },
  ]),
};

//
Object.values(tables).forEach((table) => table.renderTable());

//1 done
//2 done (Create three different json data for Big cats, Dogs and Big Fish.)
//3 done
//4 done (In table 3 the Names are shown in bold, italic and blue colour)
//5 done
//6 done
//7 done
//8 done
//9 done
//10 done
//11 done Give a border to the images, display the animal name and enlarge the image (do not show in model or any other component) on hover.
// I used ChatGPT as a reference for the PWA implementation.
