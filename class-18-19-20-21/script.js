const addBtn = document.querySelector("#add-btn");
const closeBtn = document.querySelector("#close-btn");
const modalCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const taskDetail = document.querySelector(".textArea-cont");
const taskCont = document.querySelector(".task-container");
const submitBtn = document.querySelector("#submit-btn");
const priorityTaskColors = document.querySelectorAll(".priority-color");
const toolboxColors = document.querySelectorAll(".color");

// Local Variables
let ogTickets = [];
let DEFAULT_COLOR = "lightpink";
let activePriorityTaskColor = DEFAULT_COLOR;

function createTicket({ ticketTask, ticketColor, ticketId }) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class=${ticketColor}></div>
        <div class="ticket-id">#${ticketId}</div>
        <div class="ticket-area">${ticketTask}</div>
        <div class="ticket-lock">
          <i class="fa-solid fa-lock"></i>
        </div>`;

  mainCont.append(ticketCont);
}

function handleSubmit() {
  if (taskDetail.value && activePriorityTaskColor) {
    createTicket({
      ticketTask: taskDetail.value,
      ticketColor: activePriorityTaskColor,
      ticketId: shortid(),
    });

    closeModal();
    clearSelectedPriorityColor();
    taskDetail.value = "";
    activePriorityTaskColor = DEFAULT_COLOR;
  }
}

function clearSelectedPriorityColor() {
  priorityTaskColors.forEach((elem) => {
    if (elem.classList.contains("active")) {
      elem.classList.remove("active");
    }
  });
}

function onPriorityColorClickInModal(event) {
  clearSelectedPriorityColor();
  const elem = event.target;
  activePriorityTaskColor = elem.classList[0];
  elem.classList.add("active");
}

// Open/Close Modal
function openModal() {
  modalCont.style.display = "flex";
  priorityTaskColors.forEach((elem) => {
    if (elem.classList.contains(activePriorityTaskColor)) {
      elem.classList.add("active");
    }
  });
}

function closeModal() {
  modalCont.style.display = "none";
}

addBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
submitBtn.addEventListener("click", handleSubmit);
priorityTaskColors.forEach(function (elem) {
  elem.addEventListener("click", onPriorityColorClickInModal);
});
