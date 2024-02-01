alert("hi coffee"); //use this alert to make sure that your html is connected to  you js. 

// DOM navigation  = The  process of navigating through the structure
//                    of an HTML document using JavaScript.

// .firstElementChild
//.lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

//remember to try each method at once so your code can works !

//this  one is going to select all first children of ul. 
 const ulElements =  document.querySelectorAll("ul");

  ulElements.forEach(ulElement => {
  const firstChild = ulElement.firstElementChild;
   firstChild.style.background = " yellow";
 })


//let's select the last  children of  fruits

//one child
   const element =  document.getElementById("fruits");
   const lastChild = element.lastElementChild;
   lastChild.style.backgroundColor = "yellow";

//all the last children
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "yellow";
// })


// how does the next sibling works ?

// const element =  document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "pink";

// body parent of ul- il and il are siblings.


// const element = document.getElementById("orange");
// const pervSibling = element.previousElementSibling;
// pervSibling.style.backgroundColor = "lightgreen";


// .parentElement

// const element = document.getElementById("apple");
// const parent = element.parentElement;
//parent.getComputedStyle.background = "yellow"

//here if you try it you will highlight the entire lu list
// which is the parent of li


// .children
// the children will return a html collection
//they don't have a for each builtin method
//if you want  to use this method you would  have to
//typ cast it as an array. let's see

// const element = document.getElementById("fruits")
// const children = element.children;

//let's convert all of children into an array


// Array.from(children).forEach(child =>{
//   child.style.backgroundColor = "yellow"
// });

//you can access to the children with the index number. 

const element = document.getElementById("fruits")
const children = element.children;

children[0].style.backgroundColor = "lightpink" ;

//all right guys now you have to make it on you own make sure to try each at once and then comment the next one
//so the code can works