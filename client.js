$(document).ready(function () {
  $("h2").css("border", "1px solid red");
  $("h2").css("padding", "10px");
  $("h2").css("text-align", "center");

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

    $(".todo-item-container").append(singleItem);
    // add to xml here--------------------------------------------------------
  }

  function checkForEmptyListAndAddSpaceForNewTask() {
    $(".item-container").each(function (index) {
      if (this.children.length === 0) {
        this.style.height = "20px";
      } else {
        this.style.height = "";
      }
    });
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

//https://www.linkedin.com/learning/xml-essential-training-2/xml-and-css-styles?autoSkip=true&resume=false
//https://www.linkedin.com/learning/learning-jquery-ui/next-steps?autoSkip=true&resume=false
//https://www.linkedin.com/learning/learn-api-documentation-with-json-and-xml/welcome
