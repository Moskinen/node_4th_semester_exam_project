import fs from 'fs'

export function constructPage(page, options = {}) {
    const header = header
    const footer = footer

    return header

    + page
    + footer
}

export function readPage(path){
    return fs.readFileSync(path, 'utf-8')
}