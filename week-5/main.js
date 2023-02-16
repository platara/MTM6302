/*** Arrays - basics ***/

//Create an list of two courses
const courses = ['Math','algebra','WDII']
//target an element

//reasign the value of an element
// courses[1] = 'WDIII'

//add a new element; warning!
// courses[5] = 'Design'
// console.log(courses)


/*** Arrays - Manipulation ***/
//Add a new element to the end of the array 'courses'
// Output: ['Math', 'algebra','WDII', 'WDIII']
courses.push('WDIII')

//Remove the last element of the array and save it in a variable.
let course = courses.pop()
//Remove the first element on the array and save it in a variable.
course = courses.shift()
//Add a new element to the beginin of the array
courses.unshift('OOP')
//Removes the first item, and Inserts a new one using the same function. 
courses.splice(0,1, 'Design'  )


/*** Array - Sorting ***/
//Sort the array 
// courses[2] = courses[2].toUpperCase()
// courses.sort()
// console.log(courses)

/*** Array - concatenation ***/

//Create a students list; create your profile on it: studentNumber, name, userName, email. This list is dynamic so more students will be added.
const students = [
    {
        studentNumber: 0033,
        name: 'David P',
        userName: 'platara',
        email: 'platard@algonquincollege.com'
    }
]

// create a new array 'ACstudents' that combine 'users' and 'students' array
const ACstudents = students.concat(users)

//Create a string variable that contains all the elements of the 'courses' array
const allCourses = courses.join()

//Warning typeof array
console.log(Array.isArray(courses))



/*** Searching in Arrays ***/
//Obtain the index of the first item that matches the value 'WDII'
console.log(  courses.indexOf('WDII')  )

//Check if the  array includes the element 'WD'
console.log( courses.includes('WD') )

//Find/obtain the student with your studentNumber; use the array ACstudents

const myUser = ACstudents.find( student => student.studentNumber === 8 )
console.log(myUser.email = 'nicola@gmail.com')




/*** Loops ***/
//Use 'for counting loop' to display, in the console, a list of all names; use the ACstudents array.

for ( let index = 0; index < ACstudents.length; index++) {
    console.log( ACstudents[index].name)
}

//Use a for...of to display the 'userName' and 'studentNumber' from 'ACstudents' array
for(const item of ACstudents){
    console.log( item.userName + item.studentNumber  )
}

//Use a for...in to display all the properties of any object
for(const prop in ACstudents[0]){
    console.log(prop )
    console.log( ACstudents[0][prop])
}

//Use a for...of and a for...in to display all the properties of every student from the ACstudents array



/*** Practice ***/