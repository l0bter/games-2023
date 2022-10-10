import { base } from '$app/paths';

export const load = async ({ fetch, params }) => {
    const response = await fetch(`${base}/api/games.json`)
    const games = await response.json()

    const game = games.find((value) => {
        return params.slug == value.slug
    })

    return game
}