export interface Pokemons {
    pokedexId: string
    name: any
    generation: number
    height: string
    weight: string
    sprites: any
}

export interface Error {
    statut: string
    message: string
    type: string
}

export const useApi = () => {
    let url = 'https://tyradex.app/api/v1/'

    const searchType = async (type: string): Promise<Pokemons[] | Error> => {
        const result = await fetch(
            `${url}types/${type}`
        )
        return result.json()
    }
    return { searchType }
}

export default useApi