import { base } from '$app/paths';

export const ssr = true

export const load = async ({ fetch, params }) => {
    const response = await fetch(`${base}/api/games`)
    const games = await response.json()

    const game = games.find((value) => {
        return params.slug == value.slug
    })

    return game
}