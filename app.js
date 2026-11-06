import express from 'express'
const app = express()

const PORT = 8080

app.use(express.static('public'))
app.use(express.json())

app.use('/', pageRouter)
app.use('/api/puzzles', puzzlesRouter)
app.use('/api/games', gamesRouter)




app.listen(PORT, (error) =>{
    if(error){
        console.log(error)
        return
    }
    console.log("Server is running on port ", PORT)
})