alert("Aleja is  at home");

//-------EXAMPLE 1 <h1></h1>--------------
// STEP 1 CREATE THE ELEMENT

const newH1 = document.createElement("h1");


// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";




// STEP 3 APPEND ELEMENT TO DOM
//the element will be the last child ⬇
//document.body.append(newH1);

// the element will be the first child ⬇
//document.body.prepend(newH1);
document.getElementById("box1").prepend(newH1);


//let's put our h1 in a sandwich
// take the newH1 ELEMENT and insert it before box2
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);


// what is the element doesn't have a id
// can you answer what is a node list ?
//const boxes = document.querySelectorAll(".box");
// newElement, and CurrentElement
//document.body.insertBefore(newH1, boxes[0]);

// REMOVE HTML ELEMENT
document.getElementById("box1").removeChild(newH1);



