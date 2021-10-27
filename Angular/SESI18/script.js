//JAVASCRIPT DOM
//document.getElementById()
let pageTitleElement = document.getElementById("title");
console.log(pageTitleElement.innerHTML);


//document.getElementByClassName()
let pageClassElement = document.getElementsByClassName("page-box");

for(let i = 0 ; i < pageClassElement.length; i++){
    const pageBox = pageClassElement[i];

    console.log(pageBox.innerHTML);
}

//document.getElementByTagName()
let pageTagElement = document.getElementsByTagName("page-box");
console.log(pageTagElement);
