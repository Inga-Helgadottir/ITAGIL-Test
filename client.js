$(document).ready(function () {
  $("h2").css("border", "1px solid red");
  $("h2").css("padding", "10px");
  $("h2").css("text-align", "center");

  function checkForEmptyListAndAddSpaceForNewTask() {
    $(".item-container").each(function (index) {
      if (this.children.length === 0) {
        this.style.height = "20px";
      } else if (
        this.className === "todo-item-container item-container ui-droppable" &&
        this.children.length === 1
      ) {
        this.style.height = "20px";
      } else {
        this.style.height = "";
      }
      this.style.position = "reletive";
    });
  }

  $(".single-item").draggable();

  $(".item-container").droppable({
    drop: function (event, element) {
      var closestContainer = $(event.target).closest(".item-container");
      var movingTask = element.draggable[0];

      movingTask.style.position = "static";
      closestContainer.append(movingTask);
      checkForEmptyListAndAddSpaceForNewTask();
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

  function addNewTask(taskToAdd, whereToAddIt) {
    var taskToAddArray = taskToAdd.split(";");
    var title = taskToAddArray[0];
    var company = taskToAddArray[1];
    var type = taskToAddArray[2];
    if (company === undefined) {
      company = taskToAddArray[0];
    } else if (type === undefined) {
      type = "issue";
    }
    var singleItem = $(
      "<issue><title>" +
        title +
        "</title><type>" +
        type +
        "</type><state>" +
        whereToAddIt +
        "</state><company>" +
        company +
        "</company></issue>"
    );
    // var singleItem = $(
    //   '<div class="single-item"><div class="header">' +
    //     title +
    //     "</div><div>" +
    //     company +
    //     "</div></div>"
    // );
    $xml.append(singleItem);

    // $(".add-new-tasks-here").append(singleItem);
    $(".single-item").draggable();
  }
});

//unit test google jest
//https://web.dev/articles/drag-and-drop
//https://trello.com/b/lhQFdopW/itagil-test
//https://stackoverflow.com/questions/17079615/jquery-draggable-droppable-get-source-container-that-draggable-came-from
//https://jsfiddle.net/wL4pkp9m/
//https://api.jquery.com/each/
//https://www.elated.com/drag-and-drop-with-jquery-your-essential-guide/
//https://gsap.com/community/forums/topic/17775-best-way-to-get-a-draggable-element-out-of-a-scrollable-area-draggable-bug/
//https://stackoverflow.com/questions/11944270/only-allowing-one-droppable-area-jquery-drag-and-drop
//https://stackoverflow.com/questions/26433147/how-can-i-append-data-to-my-xml-document-with-jquery
//https://github.com/jquery/api.jquery.com/blob/main/entries/append.xml
//https://www.w3schools.com/xml/met_text_appenddata.asp
