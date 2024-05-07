# I denne folder ligger en ITAGIL test lavet af S. Inga Helgadottir

Jeg har lavet alt i output.html, style.css og client.js,

Jeg prøvede at tilføje til xml filen men jeg fik altid en fejl, jeg mangler noget hjælp for at løse den del af opgaven

Under webudvikleren blev vi kun introduceret til XML og JQuery, vi gik ikke så dybt ind i det, men jeg kan helt sikkert blive god til efter kort tid med lidt hjælp

Jeg kørte det med en live server extension (Live Server, Ritwick Dey)

Jeg har lavet en kopi af output, hvis i kommer til med at overskrive den

Jeg håber at i kan lide resten af min kode :)

## Her er alle de forskellige ting jeg prøvede for at tilføje til XML filen, jeg kunne godt lave en GET

```javascript

$.ajax({ // denne GET virker

url: "input.xml",
type: "GET",
success: function (result) {
console.log(result);
xmlToString(result);
},
error: function (xhr, thrownError) {
console.log(xhr.error);
console.log(thrownError);
},
});

function xmlToString(xmlData) {
    var xmlString;
    //IE
    if (window.ActiveXObject) {
        xmlString = xmlData.xml;
    }
    // code for Mozilla, Firefox, Opera, etc.
    else {
        xmlString = new XMLSerializer().serializeToString(xmlData);
    }
    return xmlString;
}


//---------------------------------------------------------------- Alt her under virkede ikke, de fleste gav mig en 405 Method not allowed

$.ajax({
type: "GET",
url: "input.xml",
dataType: "xml",
success: function (xml) {
var $xml = $(xml);

var newElement = $(
"<issue><title>testing</title><type>issue</type><state>todo</state><company>Company22222</company></issue>"
);

$xml.find("root_element").append(newElement);

var updatedXmlStr = new XMLSerializer().serializeToString($xml[0]);

$.ajax({
    type: "POST",
    url: "input.xml",
    data: { xml: updatedXmlStr },
    success: function (response) {
        console.log("XML updated successfully.");
    },
    error: function (xhr, status, error) {
        console.error("Error updating XML:", error);
    },
});

var newItem = {
    title: "test",
    type: "issue",
    state: "todo",
    company: "comptest",
};

var xmlStr =
    "<issue><title>" +
    newItem.title +
    "</title><type>" +
    newItem.type +
    "</type><state>" +
    newItem.state +
    "</state><company>" +
    newItem.company +
    "</company></issue>";

$.ajax({
    type: "POST",
    contentType: "text/xml",
    url: "input.xml",
    data: { xml: xmlStr },
    success: function (response) {
        console.log("New item added successfully.");
    },
    error: function (xhr, status, error) {
        console.error("Error adding new item:", error);
    },
});

let el1 = jQuery.parseXML(newElement1);
let el2 = jQuery.parseXML(newElement2);

jQuery.ajax("input.xml", {
    headers: {
        "Access-Control-Allow-Origin": "_",
        "Access-Control-Allow-Methods": "_",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "\*",
    },
    type: "POST",
    url: "input.xml",
    dataType: "xml",
    contentType: "text/xml",
    data: el2,
    success: function (result) {
        console.log(result);
    },
    error: function (xhr, thrownError) {
        console.log(xhr.error);
        console.log(thrownError);
    },
});

$.ajax({
    headers: {
        "Access-Control-Allow-Origin": "_",
        "Access-Control-Allow-Methods": "_",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "\*",
    },
    type: "POST",
    url: "input.xml",
    dataType: "xml",
    contentType: "text/xml",
    data: el2,
    success: function (result) {
        console.log(result);
    },
    error: function (xhr, thrownError) {
        console.log(xhr.error);
        console.log(thrownError);
    },
});

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "/input.xml", true);
xhttp.onload = callOnLoad();

function callOnLoad() {
    if (this.status == 200) {
        console.log("here");
        console.log(this.responseText);
    } else {
        console.log("hereererere");
    }
    xhttp.send();
}

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "/input.xml", true);
console.log(xhttp);
xhttp.onload = function () {
    if (this.status == 200) {
        console.log("here");
        console.log(this.responseText);
    } else {
        console.log("hereererere");
    }
    xhttp.send();
};

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};

var xmlDocument = $.parseXML(newElement2);
var xml = $(xmlDocument);
console.log(xmlDocument);
console.log(xml);

var parser = new DOMParser();
let elementParsed = parser.parseFromString(newElement1, "text/xml");
let elementParsed = jQuery.parseXML(newElement5);

$.post("input.xml", elementParsed);
$.post("/input.xml", elementParsed);

$.ajax({
    headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "content-type",
    },
    precessData: false,
    url: "input.xml",
    data: "<issue><title>testing</title><type>issue</type><state>todo</state><company>Company22222</company></issue>",
    type: "POST",
    dataType:"xml",
    contentType: "text/xml",
    success: function (result) {
        console.log(result);
    },
    error: function (xhr, thrownError) {
        console.log(xhr.error);
        console.log(thrownError);
    },
});

var xhr;
if (window.XMLHttpRequest) {
    // Mozilla, Safari, ...
    xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    // IE 8 and older
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.open("POST", "/input.xml", true);

xhr.setRequestHeader("Content-Type", "text/xml");

xhr.send(xml);

$.post("/input.xml", {
    title: "testing",
    type: "issue",
    state: "todo",
    company: "Company22222",
}).done(function (data) {
    alert("Data Loaded: " + data);
});

var newItem = {
    title: "test",
    type: "issue",
    state: "todo",
    company: "comptest",
};

var xmlStr =
    "<issue><title>" +
    newItem.title +
    "</title><type>" +
    newItem.type +
    "</type><state>" +
    newItem.state +
    "</state><company>" +
    newItem.company +
    "</company></issue>";

$.ajax({
    type: "POST",
    url: "input.xml",
    data: xmlStr,
    contentType: "application/xml; charset=utf-8",
    dataType: "xml",
    success: function (response) {
        console.log("Data saved successfully:", response);
        alert("Data saved successfully!");
    },
    error: function (xhr, status, error) {
        console.error("Error:", error);
        alert("Error occurred while saving data!");
    },
    });
});
```
