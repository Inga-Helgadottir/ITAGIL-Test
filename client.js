$(document).ready(function () {
  $("h2").css("border", "1px solid red");
  $("h2").css("padding", "10px");
  $("h2").css("text-align", "center");

  // get all the tasks and containers
  const draggables = document.querySelectorAll(".single-item");
  const dropContainers = document.querySelectorAll(".sortableContainer");

  // looping through the tasks to give and remove the class is-dragging depending on weather the task is moving
  draggables.forEach((issue) => {
    issue.addEventListener("dragstart", () => {
      issue.classList.add("is-dragging");
    });
    issue.addEventListener("dragend", () => {
      issue.classList.remove("is-dragging");
    });
  });

  // looping through the containers
  dropContainers.forEach((dropContainer) => {
    // when a task is dragged over a container
    dropContainer.addEventListener("dragover", (e) => {
      e.preventDefault();

      const bottomTask = insertAboveTask(dropContainer, e.clientY);
      const currentTask = document.querySelector(".is-dragging");

      if (!bottomTask) {
        dropContainer.appendChild(currentTask);
      } else {
        dropContainer.insertBefore(currentTask, bottomTask);
      }
    });
  });

  const insertAboveTask = (dropContainer, mouseYPosition) => {
    const notCurrentlyDraggingIssues = dropContainer.querySelectorAll(
      ".task:not(.is-dragging)"
    );

    let closestTask;
    let closestOffset = Number.NEGATIVE_INFINITY;

    notCurrentlyDraggingIssues.forEach((issue) => {
      const { top } = issue.getBoundingClientRect();

      const offset = mouseYPosition - top;

      if (offset < 0 && offset > closestOffset) {
        closestOffset = offset;
        closestTask = issue;
      }
    });

    checkForEmptyListAndAddSpaceForNewTask();
    return closestTask;
  };

  $(".add-new-task-form").submit(function (e) {
    e.preventDefault();
    var inputValueTask = $("#add-task-input").val();
    var inputValueCompany = $("#add-company-input").val();
    var inputValueType = $("#add-type-input").val();
    if (
      inputValueTask === "" ||
      inputValueCompany === "" ||
      inputValueType === ""
    ) {
      alert("You need to add the relevant information: task, company and type");
    } else {
      addNewTask(inputValueTask, inputValueCompany, inputValueType);
      $("#add-task-input").val("");
      $("#add-company-input").val("");
      $("#add-type-input").val("");
    }
  });

  function addNewTask(task, company, type) {
    var singleItem = $(
      '<div class="single-item" draggable="true"> <div class="header">' +
        task +
        "</div><div>" +
        company +
        "</div></div>"
    );

    $(".todo-item-container").append(singleItem[0]);

    singleItem[0].addEventListener("dragstart", () => {
      singleItem[0].classList.add("is-dragging");
    });

    singleItem[0].addEventListener("dragend", () => {
      singleItem[0].classList.remove("is-dragging");
    });
  }

  function checkForEmptyListAndAddSpaceForNewTask() {
    $(".item-container").each(function () {
      if (this.children.length === 0) {
        this.style.height = "20px";
      } else {
        this.style.height = "";
      }
    });
  }
});
