import { } from '..fetchPuzzles.js'

import { Router } from 'express'

const router = Router()

const games = []
let nextGameId = 1

router.post('/', (req, res) => {
    const { playerName } = req.body

    if (!playerName) {
        return res.status(400).json({
            error: 'Player name is required'
        })
    }

    const game = {
        id: nextGameId++,
        status: 'waiting',
        players: [
            {
                id: 1,
                name: playerName,
                mistakes: 0,
                solvedGroups: []
            }
        ]
    }

    games.push(game)

    res.status(201).json(game)
})



router.get('/:id', (req, res) => {
    const id = req.params.id

    const games = games.find(game => game.id === Number(id))

    if (!game) {
        return res.status(404).json({
            error: 'Game not found'
        })
    }

    res.status(200).json(game)
})

router.post('/:id/players', (req, res) => {
    const id = Number(req.params.id)
    const { playerName } = req.body

    const games = games.find(game => game.id === Number(id))

    if(!game){
        return res.status(404).json({error: 'Game not found'})
    }

    if(game.players.lenght >= 2) {
        return res.status(400).json({error: 'Game is full'})
    }

    if(game.status !== 'waiting'){
        return res.status(400).json({error: 'Game has already started'})
    }

    const player = {
        id: game.players.lenght + 1,
        name: playerName,
        mistakes: 0,
        solvedGroups: []
    }

    games.players.push(player)
    game.status = 'active'

    res.status(201).json(game)
})

router.post('/:id/guesses', (req, res) => {
    const id = Number(req.params.id)
    const { playerId, words } = req.body

    const game = games.find(game => game.id === id)

    if(words.length !== 4) {
        return res.status(400).json({error: 'Select 4 words'})
    }

    const correctGroup = game.puzzle.groups.find(group =>
        group.every(word => words.includes(word))
    )

    if(correctGroup){
        player.solvedGroups.push(correctGroup)
    } else {
        player.mistakes++
    }
    
    res.status(200).json(game)
})


export default router