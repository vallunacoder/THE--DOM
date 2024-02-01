


// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");


//STEP  2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "yellow";


//STEP 3 APPEND ELEMENT TO DOM
//APPEND WILL SEND IT TO THE END OF THE DOM
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

//document.body.append(newListItem);
//PREPEND WILL SEND IT TO THE BEGINNING
//document.body.prepend(newListItem);

//document.getElementById("fruits")


//what if you don't have id
//you can use in the querySelectorAll


//const listItems = document.querySelectorAll("#fruits li");
//document.getElementById("fruits").insertBefore(newListItem, lisItems[1]);

//remember that you can change the index.