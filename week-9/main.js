// 1.Create a button in the student card(script file), and retrieve it(main js file).
const $edithStudentBtn = document.getElementById('edithStudentBtn')
console.log($edithStudentBtn)

// 2.Add an event listener to the button.
$edithStudentBtn.addEventListener('mouseover', function () {
    
    //create bs custom attributes
    $edithStudentBtn.setAttribute('data-bs-toggle', 'modal') // updates the attribute
    $edithStudentBtn.setAttribute('data-bs-target', '#exampleModal') // updates the attribute

  })

// 3.Insert a HTML form in the detail info.

// 4.Add an event listener to the 'form'. Update the student info.

// 5. Create a 'search' box. in the html file.

// 6. Add an event listener to the 'Search' form. Use the 'submit' event. Display a filtered list based on the student name.

// 7.Add an event listener to the 'Search' element. Use the 'input' event. Display a filtered list based on the student name.








