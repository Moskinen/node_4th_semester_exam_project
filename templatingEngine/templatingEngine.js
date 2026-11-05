import fs from 'fs'

export function constructPage(page, options = {}) {
    const header = header
    const footer = footer

    return header
    .replace('{{TAB_TITLE}}', options.tabTitle || "")
    + page
    + footer
}

export function readPage(path){
    return fs.readFileSync(path, 'utf-8')
}