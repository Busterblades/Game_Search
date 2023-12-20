import express from "express"
import axios from "axios";

const app = express()
const port = 3000
const apiKey = ""

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("index", {searchTerm: "", games:[]} )
})

app.get("/search", async (req, res) =>{
    const searchTerm = req.query.searchTerm;
    const pageNumber = req.query.page || 1;
    const limit = 24

    try {
        const response = await axios.get(`https://www.giantbomb.com/api/search/?api_key=${apiKey}&format=json&query=${searchTerm}&resources=game&limit=${limit}&page=${pageNumber}`)
        const {number_of_total_results, results} = response.data
        const totalPages = Math.ceil(number_of_total_results/limit)
        res.render("index", {games: results, searchTerm, pageNumber, totalPages})
    }catch (error){
        console.error("Error al obtener el juego",error)
        res.render("index", {searchTerm: null})
    }
})

app.get("/game/:id", async (req, res) =>{
    const gameId = req.params.id
    const gameDetailsUrl = `https://www.giantbomb.com/api/game/${gameId}/?api_key=${apiKey}&format=json`;
    try {
        const response = await axios.get(gameDetailsUrl)
        const gameDetails = response.data.results;

        res.render("gameDetails", {gameDetails})

    }catch (error){
        console("No se encontraron detalles del juego", error)
        res.render("gameDetails", {gameDetails:null})
    }
})

app.listen(port, ()=>{
    console.log(`Servidor conectado con ${port}`)
})
