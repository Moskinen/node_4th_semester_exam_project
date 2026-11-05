import { constructPage, readPage } from "./templatingEngine.js"

const frontpage = readPage('public/views/frontpage.html')
const createGame = readPage('public/views/create-game.html')
const joinGame = readPage('public/views/join-game.html')
const game = readPage('public/views/game.html')
const about = readPage('public/views/about.html')
const contact = readPage('public/views/contact.html')

export const frontpagePage = constructPage(frontpage, {
    tabTitle: "Frontpage"
})

export const createGamePage = constructPage(createGame, {
    tabTitle: "Create Game"
})

export const joinGamePage = constructPage(joinGame, {
    tabTitle: "Join Game"
})

export const gamePage = constructPage(game, {
    tabTitle: "Game"
})

export const aboutPage = constructPage(about, {
    tabTitle: "About"
})

export const contactPage = constructPage(contact, {
    tabTitle: "Contact"
})
