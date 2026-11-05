import fs from 'fs'

export function constructPage(page, options = {}) {
    const header = readPage('public/components/header.html')
    const footer = readPage('public/components/footer.html')

    return header
    .replace('{{TAB_TITLE}}', options.tabTitle || "")
    + page
    + footer
}

export function readPage(path) {
    return fs.readFileSync(path, 'utf-8')
}