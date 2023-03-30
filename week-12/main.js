const $users = document.getElementById('user-list')

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => { 
//         displayUsers(json)

//       })

async function fetchData () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=2&limit=5')
    const json = await response.json()
    displayUsers(json.results)
  }
 
fetchData ()




function displayUsers(users){
    const htmlTemplate = []
        for(const user of users ){
            htmlTemplate.push(`<li>${user.name}</li>`)
        }
        $users.innerHTML = htmlTemplate.join('')
}