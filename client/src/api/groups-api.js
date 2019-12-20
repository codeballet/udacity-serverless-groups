import { apiEndpoint } from '../config'

export async function getGroups() {
    console.log('Fetching groups')

    const response = await fetch(`${apiEndpoint}/groups`)
    console.log('API response: ', response)

    const result = await response.json()
    console.log('API result: ', result.body.items)

    return result.body.items
}