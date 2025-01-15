export interface Pokemons {
    id: string
    name: any
    generation: number
    height: string
    weight: string
    sprites: any
    category: string
    stats: any
}

export interface Error {
    statut: string
    message: string
    type: string
}

export const useApiPokemon = (isType: boolean) => {
    let url = 'https://tyradex.app/api/v1/'

    if (isType == true) {
        const searchString = async (String: string): Promise<Pokemons[] | Error> => {
            const result = await fetch(
                `${url}types/${String}`
            )
            return result.json()
        }
        return { searchString }
    } else {
        const searchString = async (String: string): Promise<Pokemons[] | Error> => {
            const result = await fetch(
                `${url}pokemon/${String}`
            )
            return result.json()
        }
        return { searchString }
    }
    
}

export default useApiPokemon