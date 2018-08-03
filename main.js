let button = document.getElementById("submit-btn");


//when the button is clicked, console log
button.addEventListener("click", function () {
    console.log("You clicked the submit button!");
});
// DONE!


//print the junior instructors to the DOM
let jrInstructors = document.getElementById("jr-instructors")
staff.juniorInstructors.forEach(jrInstructor => {
    let element = document.createElement("p")
    element.textContent = `${jrInstructor} is a junior instructor at NSS`
    jrInstructors.appendChild(element);
});
// DONE!

//console log each of the schools in the school array individually and console log them

// schools.forEach(schools => {
//     console.log(schools);
// });

for (let i = 0; i < schools.length; i++) {
    console.log(schools[i]);
};


//print each of the lead instructors to the console
for (let i = 0; i < staff.instructors.length; i++) {
    console.log(staff.instructors[i]);
}


//print the result to the console
let parkInfo = {};
fetch("https://external-data-56670.firebaseio.com/park-info.json")
    .then(result => result.json())
    .then(result => {
        parkInfo = result;
        console.log(parkInfo)
    });