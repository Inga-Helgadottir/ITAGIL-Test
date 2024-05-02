$(document).ready(function () {
  $("h2").css("border", "1px solid red");
  $("h2").css("padding", "10px");
  $("h2").css("text-align", "center");

  $(".single-item").draggable();

  $(".item-container").droppable({
    drop: function (event, ui) {
      var closestContainer = $(event.target).closest(".item-container");
      var movingTask = ui.draggable[0];
      movingTask.style.position = "static";
      closestContainer.append(movingTask);
    },
  });

  $("#add-button").click(function () {
    var inputValue = $("#add-task-input").val();
    if (inputValue === "") {
      alert("You cant add an empty task");
    } else {
      addNewTask(inputValue);
      $("#add-task-input").val("");
    }
  });

  function addNewTask(taskToAdd) {
    var taskToAddArray = taskToAdd.split(";");
    var title = taskToAddArray[0];
    var company = taskToAddArray[1];
    if (company === undefined) {
      var company = taskToAddArray[0];
    }
    var singleItem = $(
      '<div class="single-item"><div class="header">' +
        title +
        "</div><div>" +
        company +
        "</div></div>"
    );

    $(".add-new-tasks-here").append(singleItem);
    $(".single-item").draggable();
  }
});

//https://web.dev/articles/drag-and-drop
//https://trello.com/b/lhQFdopW/itagil-test
//https://stackoverflow.com/questions/17079615/jquery-draggable-droppable-get-source-container-that-draggable-came-from
//https://jsfiddle.net/wL4pkp9m/
