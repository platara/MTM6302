// 1.Create a button in the student card(script file), and retrieve it(main js file).
const $edithStudentBtn = document.getElementById('edithStudentBtn')
console.log($edithStudentBtn)

// 2.Add an event listener to the button.
$edithStudentBtn.addEventListener('mouseover', function () {
    
    //create bs custom attributes
    $edithStudentBtn.setAttribute('data-bs-toggle', 'modal') // updates the attribute
    $edithStudentBtn.setAttribute('data-bs-target', '#exampleModal') // updates the attribute

  })

// 3.Insert a 'HTML form' in the detail info.
const $modalBody = document.getElementById('modal-body')

$modalBody.innerHTML = `
            <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${students[0].email}">
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">User name</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" value="${students[0]['userName']}">
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
`


// 4.Add an event listener to the 'form'. Update the student info.

// 5. Create a 'search' box. in the html file.

// 6. Add an event listener to the 'Search' form. Use the 'submit' event. Display a filtered list based on the student name.

// 7.Add an event listener to the 'Search' element. Use the 'input' event. Display a filtered list based on the student name.








