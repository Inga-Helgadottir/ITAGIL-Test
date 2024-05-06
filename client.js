$(document).ready(function () {
  $("h2").css("border", "1px solid red");
  $("h2").css("padding", "10px");
  $("h2").css("text-align", "center");

  const draggables = document.querySelectorAll(".single-item");
  const dropContainers = document.querySelectorAll(".sortableContainer");

  draggables.forEach((issue) => {
    issue.addEventListener("dragstart", () => {
      issue.classList.add("is-dragging");
    });
    issue.addEventListener("dragend", () => {
      issue.classList.remove("is-dragging");
    });
  });

  dropContainers.forEach((dropContainer) => {
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

  // var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function () {
  //   if (this.readyState == 4 && this.status == 200) {
  //     myFunction(this);
  //   }
  // };

  // let newElement = $(
  //   "<issue><title>testing</title><type>issue</type><state>todo</state><company>Company22222</company></issue>"
  // );
  // let newElement1 =
  //   "<issue><title>testing</title><type>issue</type><state>todo</state><company>Company22222</company></issue>";
  // let newElement2 =
  //   "<issue><title>testing</title><type>issue</type><state>todo</state><company>Company22222</company></issue>";
  // let newElement3 =
  //   "<issue><title>testing</title><type>issue</type><state>todo</state><company>Company22222</company></issue>";
  // let newElement4 =
  //   "<issue><title></title><type>incident</type><state>verification</state><company>Comp test</company></issue>";
  // let newElement5 = {
  //   title: "test",
  //   type: "issuesssssss",
  //   state: "todo",
  //   company: "comptest",
  // };

  // var parser = new DOMParser();
  // console.log(newElement);
  // let elementParsed = parser.parseFromString(newElement1, "text/xml");
  // let elementParsed = jQuery.parseXML(newElement5);
  // console.log(elementParsed);

  // $.post("input.xml", elementParsed);

  // $.ajax({
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "*",
  //     "Access-Control-Allow-Credentials": "true",
  //     "Access-Control-Allow-Headers": "content-type",
  //   },
  //   url: "/input.xml",
  //   data: {
  //     data: elementParsed,
  //   },
  //   contentType: "text/xml",
  //   dataType: "text/xml",
  //   type: "POST",
  //   success: function (result) {
  //     console.log(result);
  //   },
  //   error: function (xhr, thrownError) {
  //     console.log(xhr.status);
  //     console.log(thrownError);
  //   },
  // });
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

//https://www.youtube.com/watch?v=dqOxpBG28io
//https://www.youtube.com/watch?v=fEYx8dQr_cQ
//https://www.youtube.com/watch?v=5nL7X1UMWsc
