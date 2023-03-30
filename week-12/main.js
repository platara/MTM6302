const $userList = document.getElementById('user-list')


// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => {
//             displayUsers(json)
//       })
async function fetchData () {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2')
    const json = await response.json()
    displayUsers(json.results)
  }

  fetchData()

function displayUsers(pokemons){

    const htmlTemplate = []

    for(const poke of pokemons ){
        htmlTemplate.push(`<li><button data-user="${poke.name}">Add</button>${poke.name}</li>`)
    }

    $userList.innerHTML = htmlTemplate.join('')
}

const userLS = []

$userList.addEventListener('click', function(e){
    if(e.target.dataset.user){
        userLS.push({name: e.target.dataset.user})
        localStorage.setItem('users', JSON.stringify(userLS) )
    }

})


