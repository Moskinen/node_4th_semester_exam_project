import {} from '..fetchPuzzles.js'

import { Router } from 'express'
import { fetchPuzzle } from '../../util/fetchPuzzles'

const router = Router()

router.get('/api/puzzles/:date', async (req,res) => {
    res.send( {data: await fetchPuzzle()} )
})


export default router