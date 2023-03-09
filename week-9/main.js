// 1.Create a button in the student card(script file), and retrive it(js file).
const $studentDetailsBtn = document.getElementById('studentDetailsBtn')

// 2.Add an event listener to the button. Show the detail info.
$studentDetailsBtn.addEventListener(
    'mouseover',
    function(){
        $studentDetailsBtn.setAttribute('data-bs-toggle', 'modal')
        $studentDetailsBtn.setAttribute('data-bs-target', '#exampleModal')
    }
)
// $studentDetailsBtn.addEventListener(
//     'click',
//     function(){
//         console.log("Click")
//     }
// )


// 3.Insert a HTML form in the detail info.
const $modalBody = document.querySelector('.modal-body')

$modalBody.innerHTML = `
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${students[0].email}" name="email">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="studentName" class="form-label">Name</label>
    <input type="text" class="form-control" id="studentName" value="${students[0].name}" name="studentName">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" >
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`

// 4.Add an event listener to the 'form'. Update the student info.

const $studentForm = document.querySelector('form')
$studentForm.addEventListener('submit', function(event){
    event.preventDefault()
    console.log($studentForm.elements)

    // for (const element of $studentForm.elements) {
    //     if (element.name) {
    //       console.log(element.name, element.value)
    //     }
    // }

    //obtain form values and reasign the object property
    students[0].name = $studentForm.elements['studentName'].value
    students[0].email = $studentForm.elements['email'].value 

    // display the value in the front
    document.getElementById('studentName').textContent = students[0].name
    document.getElementById('email').textContent = students[0].email


})




// 5. Create a 'search' box. in the html file.

// 6. Add an event listener to the 'Search' form. Use the 'submit' event. Display a filtered list based on the student name.

// 7.Add an event listener to the 'Search' element. Use the 'input' event. Display a filtered list based on the student name.








