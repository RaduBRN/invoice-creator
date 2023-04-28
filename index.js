const services = [
  {
    name: "Wash Car",
    price: 10,
    id: 1,
  },
  {
    name: "Mow Lawn",
    price: 20,
    id: 2,
  },
  {
    name: "Pull Weeds",
    price: 30,
    id: 3,
  },
  {
    name: "Trim Hedge",
    price: 40,
    id: 3,
  },
];

const container = document.getElementById("buttons-container");
const tasks = document.getElementById("tasks-render");
const notesText = document.getElementById("notes-text");
const totalRow = document.getElementById("total-row");
const sendInvoiceBtn = document.getElementById("send-btn");

let totalPrice = 0;

services.forEach((service) => {
  const button = document.createElement("button");
  button.innerText = `${service.name}: ${service.price}$`;
  button.classList.add("services");
  button.id = service.id;
  button.setAttribute("data-price", service.price);
  button.addEventListener("click", () => {
    renderServices(service);
  });
  container.appendChild(button);
});

function renderServices(service) {
  let html = "";

  html += `
      <div class="services-render">
        <p class="rendered-task">${service.name}</p>
        <p class="rendered-task"><span class="price">$</span>${service.price}</p>
      </div>
    `;

  tasks.innerHTML += html;
  totalPrice += service.price;

  totalRow.innerHTML = `
    <p id="notes-text">We accept cash, credit card, or PayPal</p>
    <p id="total-amount">$${totalPrice}</p>
  `;

  sendInvoiceBtn.innerHTML = `<img src="icons/mail.png" />Send invoice`;
}

sendInvoiceBtn.addEventListener("click", function () {
  clearTasks();
  sendInvoiceBtn.innerHTML = "Invoice Sent";
});

function clearTasks() {
  tasks.innerHTML = "";
  totalPrice = 0;
  totalRow.innerHTML = `
    <p id="total-amount">${totalPrice}</p>
  `;
}
