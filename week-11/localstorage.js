// 1. Create the html element to switch between dark and light theme -ok

// 2. Retrieve the value of the switch element
const $switchTheme =  document.getElementById('flexSwitchCheckDefault')

// 3. Add an event Listener to the switch; If the user changes its value, change the color theme of the page.
$switchTheme.addEventListener('change', function() {
    console.log( $switchTheme.checked )
    //conditional statement
    colorMode()
    localStorage.setItem('darkTheme', $switchTheme.checked)

})

function colorMode() {
    if($switchTheme.checked == true){
        document.querySelector('html').setAttribute('data-bs-theme', 'dark')
    }else{
        document.querySelector('html').setAttribute('data-bs-theme', 'light')
    }
}

/*** Local Storage - dark mode  ***/
// 4. Save the color theme in the 'Local Storage'; This should happen every time the user sets the color theme. ok

// 5. Every time the page loads, check if the Local storage has a color theme saved, if so, set the theme accordingly.

const darkThemeLS = localStorage.getItem('darkTheme') 

if(darkThemeLS == 'true'){
    $switchTheme.checked = true
}
colorMode()
// if(darkThemeLS == 'true'){
//     document.querySelector('html').setAttribute('data-bs-theme', 'dark')
// }else{
//     document.querySelector('html').setAttribute('data-bs-theme', 'light')
// }





/***  Local storage - students data*/
// 6. Save the students array (list of objects) in the 'Local Storage'; This should happen every time the user modifies the students data. This functionality was defined in the 'main.js' file


// 7. Every time the page loads, check if the 'Local storage' has students data, if so, set the data (students array) accordingly. Students array is defined in the 'script.js' file









