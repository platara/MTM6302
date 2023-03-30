const $users = document.getElementById('user-list')

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => { 
//         displayUsers(json)

//       })

async function fetchData () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    displayUsers(json)
  }
 
fetchData ()




function displayUsers(users){
    const htmlTemplate = []
        for(const user of users ){
            htmlTemplate.push(`<li>${user.email}</li>`)
        }
        $users.innerHTML = htmlTemplate.join('')
}