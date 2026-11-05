
export async function fetchPuzzle(date){
    const url = 'https://www.nytimes.com/svc/connections/v2/${date}.json'

    const response = await fetch(url)

    if(!response.ok){
        throw new Error('Failed to fetch puzzle')
    }

    const data = await response.json()

    return data
}