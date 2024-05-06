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
    // decides what to do when a task is dragged over a container
    dropContainer.addEventListener("dragover", (e) => {
      e.preventDefault();

      // finds the bottom task depending on your mouse placement on the y axis
      const bottomTask = insertAboveTask(dropContainer, e.clientY);
      // gets the current task
      const currentTask = document.querySelector(".is-dragging");

      // adds the task to the list :
      if (!bottomTask) {
        // ------------------------after the last task
        dropContainer.appendChild(currentTask);
      } else {
        // ------------------------before a task
        dropContainer.insertBefore(currentTask, bottomTask);
      }
    });
  });

  const insertAboveTask = (dropContainer, mouseYPosition) => {
    // gets all the tasks that are not dragging
    const notCurrentlyDragging = dropContainer.querySelectorAll(
      ".single-item:not(.is-dragging)"
    );

    let closestTask;
    let offsetForClosest = Number.NEGATIVE_INFINITY;

    notCurrentlyDragging.forEach((issue) => {
      const { top } = issue.getBoundingClientRect();

      const offset = mouseYPosition - top;

      if (offset <= 0 && offset >= offsetForClosest) {
        offsetForClosest = offset;
        closestTask = issue;
      }
    });

    checkForEmptyListAndAddSpaceForNewTask();
    return closestTask;
  };

  $(".add-new-task-form").submit(function (e) {
    e.preventDefault();
    let inputValueTask = $("#add-task-input").val();
    let inputValueCompany = $("#add-company-input").val();
    let inputValueType = $("#add-type-input").val();
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
    let singleItem = $(
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
        this.style.height = "20px!important";
      } else {
        this.style.height = "";
      }
    });
  }
});
