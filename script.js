const axios = require('axios').default;

async function getPokemonByID(id){
    axios.get(`https://pokeapi.co/api/v2/ability/${id}`)
    .then(function (response) {
        // обработка успешного запроса
    console.log(response.data.name);
    })
    .catch(function (error) {
        // обработка ошибки
    console.log(error);
    })
}

for(let i = 1; i < 50; i++){
    getPokemonByID(i)
}