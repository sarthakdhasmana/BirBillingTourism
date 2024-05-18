

//know more button smoth working
var knowMorebtn = document.querySelector(".knowMoreButton");
knowMorebtn.addEventListener("click", () => {
    var amenities = document.querySelector(".amenitiesSection");
    amenities.scrollIntoView();
    // knowMorebtn.style.transition = "all 1s";
})

//contact us btn
var contactbtn = document.querySelector('.headerButton');
contactbtn.addEventListener('click', () => {
    var footer = document.querySelector('footer');
    footer.scrollIntoView();
})

// var name = "Vaibhav";
function helloName(name) {
    console.log("Hello this is a function call my name is" + name);
}
hello('Vaibhav');

