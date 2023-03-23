/*** Inserting elements with innertHTML */

//Use the 'courses' array, from script.js, to create a 'HTML template' with a list of courses (display only the first two courses). Display the result in the document. Use the DOM element with the id 'list'.
const htmlTemplate = `
<nav id="courseList" class="nav d-flex justify-content-between">
   
</nav>
`
document.getElementById('list').innerHTML = htmlTemplate

//Add the third course to the list
const $courseList = document.getElementById('courseList')
// $courseList.innerHTML += `<a class="p-2 link-secondary item" href="#">${courses[2]}</a>`

//Dinamically create, and display in the document, all the ID cards. Use the 'students' array, and a 'for loop'.
const $studentList = document.getElementById('studentList')

// for(const student of students ){
//     $studentList.innerHTML +=
//     `<div id="studentID" class="col-md-6">
//         <div class="ac-card">
//             <div class="ac-card-image"></div>
//             <div class="ac-card-info">
//                 <p>
//                 <strong id="name">${student.name}</strong><br>
//                 <span id="studentNumber"></span>
//                 </p>
//                 <p id="email"></p>
//             </div>
//             <div class="ac-card-footer">
//                 <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
//             </div>
//         </div>
//     </div>`
// }


//Display all the IDs using the innerHTML only once. Use an array and the join() method.
//1.create an empty array
const htmlTemplates = []
for(const student of students ){
    // 2.use the push method
    htmlTemplates.push(
    `<div id="studentID" class="col-md-6">
        <div class="ac-card">
            <div class="ac-card-image"></div>
            <div class="ac-card-info">
                <p>
                <strong id="name">${student.name}</strong><br>
                <span id="studentNumber"></span>
                </p>
                <p id="email"></p>
            </div>
            <div class="ac-card-footer">
                <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
            </div>
        </div>
    </div>`)
}
//3.use the join and innerHTML method
// $studentList.innerHTML = htmlTemplates.join('')

//Use a loop with insertAdjacentHTML to display the courses

const coursesArray = []
for(const course of courses){
    coursesArray.push( `<a class="p-2 link-secondary item" href="#">${course}</a>`)
}

$courseList.insertAdjacentHTML(
    'afterbegin', //Position
    coursesArray.join('')//value
    )
    

//...what if the element with the id courseList didn't exist



/*** Create HMTL element with createElement() method */

//1.-create a new link elment in the top menu 

    // create a new element
    const newLink = document.createElement('a')
    // add some content
    newLink.textContent = "OOP"
    newLink.href= "https://imdac.github.io/modules/js/js-dom-creation/using-methods.html#inserting-html-element"

    // add the newly created element to the DOM
    $courseList.appendChild(newLink)




//2.-Table

//Retrieve the DOM element that has the id 'student-table'
const $studentTable = document.getElementById('student-table')

//Declare a function to create a table
function createTable() {
    //using a for loop create the rows/cells, and fill them with the students name, number and email
    for(const student of students){

        // Create a new 'table row' for the contact
        const tableRow = document.createElement('tr') 

        for(const prop in student){
            // Create a new cell inside of the row
            const tableCell = document.createElement('td')
            // fill the value of the cell 
            tableCell.textContent = student[prop]
            //insert the cell in the row element
            tableRow.appendChild(tableCell)
        }

        //insert the row in the table element 
        $studentTable.appendChild(tableRow)
       
    // end for
    }
// end function
}


//Call the function to display the table in the page
createTable()