// 1. Create the html element to switch between dark and light theme

// 2. Retrieve the value of the switch element
const $darkMode = document.getElementById('flexSwitchCheckDefault')
// 3. Add an event Listener to the switch; If the user changes its value, change the color theme of the page.
$darkMode.addEventListener('change', function(e){
    console.log($darkMode.checked)
    //conditional statement - 'if'
    colorMode()

    localStorage.setItem('themeMode', $darkMode.checked)

})

function colorMode(){
    if ($darkMode.checked == true){
        document.querySelector('html').setAttribute('data-bs-theme','dark')
    } else {
        document.querySelector('html').setAttribute('data-bs-theme','light')
    }
}

/*** Local Storage - dark mode  ***/
// 4. Save the color theme in the 'Local Storage'; This should happen every time the user sets the color theme.
/**
 *  localStorage.setItem('themeMode', $darkMode.checked)
 */

// 5. Every time the page loads, check if the Local storage has a color theme saved, if so, set the theme accordingly.
//conditional statement - 'if'
const savedMode = localStorage.getItem('themeMode')

if(savedMode == 'true'){
    $darkMode.checked = true
}
colorMode()




/***  Local storage - students data*/
// 6. Save the students array (list of objects) in the 'Local Storage'; This should happen every time the user modifies the students data. This functionality was defined in the 'main.js' file
/*
localStorage.setItem('studentsLS', JSON.stringify(students))
*/

// 7. Every time the page loads, check if the 'Local storage' has students data, if so, set the data (students array) accordingly. Students array is defined in the 'script.js' file
/*
let students = []

if(localStorage.getItem('studentsLS') ){
    students = JSON.parse(localStorage.getItem('studentsLS'))
}else {...}
*/









