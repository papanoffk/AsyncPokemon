const express = require('express')
const axios = require('axios').default;

const app = express()
app.set("view engine", "hbs");
app.use(express.static("src"));

const PORT = 3000

app.get('/', async (req, res) => {
    console.log('Ping')

    let _arr = []
    for(let i = 1; i < 50; i++){
        _arr.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
    }

    Promise.all(_arr).then(
        async (value) => {
            res.render("main.hbs", {
                pokemons: value
            });
        }
    )
    .catch((err)=>{
        console.log(err)
        res.render("error.hbs");
    })
})

app.get('/pokemons/:id', async (req, res) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params["id"]}`)
    .then(async (response) => {
        res.render("pokemon.hbs", {
            pokemon: response.data
        });
    })
    .catch((err)=>{
        console.log(err)
        res.render("error.hbs");
    })
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})