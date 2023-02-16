/*** Inserting elements with innertHTML */

//Use the 'courses' array, from script.js, to create a 'HTML template' with a list of courses (display only the first two courses). Display the result in the document. Use the DOM element with the id 'list'.

const courseList = `
<nav id="courseList" class="nav d-flex justify-content-between">
    <a class="p-2 link-secondary item" href="#">${courses[0]}</a>
    <a class="p-2 link-secondary item" href="#">${courses[1]}</a>
</nav>`

document.getElementById('list').innerHTML = courseList


//Add the third course to the list
const $courseList = document.getElementById('courseList')
$courseList.innerHTML += `
    <a class="p-2 link-secondary item" href="#">${courses[2]}</a>`


//Dinamically create, and display in the document, all the ID cards. Use the 'students' array, and a 'for loop'.
const $studentList = document.getElementById('studentList')

for(const student of students){
    $studentList.innerHTML +=
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
</div>`
}

//Display all the IDs using the innerHTML only once. Use an array and the join() method.



//Use a loop with insertAdjacentHTML to display the courses

//...what if the element with the id courseList didn't exist



/*** Create HMTL element with createElement() method */

//1.-create a new link elment in the top menu 

    // create a new element
    
    // add some content
    
    // add the newly created element to the DOM
    





//2.-Retrieve the DOM element that has the id 'student-table'

//Declare a function to create a table

    //using a for loop create the rows/cells, and fill them with the students name, number and email
 
        // Assign an array's element to a variable 
 
        // Create a new 'table row' for the contact 

            // Create a new cell inside of the row
 
            // fill the value of the cell 

            //insert the cell in the row element

            //Repeat 'create...', 'fill...' and 'insert...'
        
        //insert the row in the table element 
        
    // end for
// end function


//Call the function to display the table in the page

