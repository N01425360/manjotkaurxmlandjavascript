const { getAll } = require("./api/construction.js");

const form = document.querySelector('form');

const renderTable = data => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  const rows = source.reduce(
    (acc, { id, product, material, role }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${product}</td><td>${material}</td><td>${role}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

getAll().then(({ data }) => renderTable(data));

const onSubmit = event => {
  event.preventDefault();

  const id = event.target.id.value;
  const product = event.target.product.value;
  const material = event.target.material.value;
  const role = event.target.role.value;

  console.log(id, product, material, role);

  getAll({id: id, product: product, material: material, role: role}).then(({ data }) => renderTable(data));
};

const onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};

form.onsubmit = onSubmit;
form.onreset = onReset;