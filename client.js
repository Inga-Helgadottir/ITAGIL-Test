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

    // looping through the tasks that are not dragging and find the appropriate drop location
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

  // handle submit for the add new task form
  $(".add-new-task-form").submit(function (e) {
    e.preventDefault();
    // getting all the input values
    let inputValueTask = $("#add-task-input").val();
    let inputValueCompany = $("#add-company-input").val();
    let inputValueType = $("#add-type-input").val();

    // making sure they are not empty
    if (
      inputValueTask === "" ||
      inputValueCompany === "" ||
      inputValueType === ""
    ) {
      alert("You need to add the relevant information: task, company and type");
    } else {
      addNewTask(inputValueTask, inputValueCompany, inputValueType);
      // empty all input values
      $("#add-task-input").val("");
      $("#add-company-input").val("");
      $("#add-type-input").val("");
    }
  });

  // adding the new task to the todo list
  function addNewTask(task, company, type) {
    let singleItem = $(
      '<div class="single-item" draggable="true"> <div class="header">' +
        task +
        "</div><div>" +
        company +
        "</div></div>"
    );

    $(".todo-item-container").append(singleItem[0]);

    // adding the drag properties
    singleItem[0].addEventListener("dragstart", () => {
      singleItem[0].classList.add("is-dragging");
    });

    singleItem[0].addEventListener("dragend", () => {
      singleItem[0].classList.remove("is-dragging");
    });
  }

  // this function is because if a list is empty there is no space to add a task, so in that case I give the container a height of 20px
  function checkForEmptyListAndAddSpaceForNewTask() {
    // looping through all the list containers to check if they are empty
    $(".item-container").each(function () {
      if (this.children.length === 0) {
        this.style.height = "20px!important";
      } else {
        this.style.height = "fit-content";
      }
    });
  }
});
