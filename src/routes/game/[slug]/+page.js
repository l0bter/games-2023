export const load = async ({ fetch, params }) => {
    const response = await fetch(`/api/games`)
    const games = await response.json()

    const game = games.find((value) => {
        return params.slug == value.slug
    })

    return game
}