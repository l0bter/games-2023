import { base } from '$app/paths';

export const load = async ({ fetch }) => {
    const response = await fetch(`${base}/api/games.json`)
    const games = await response.json()
  
    return {
      games
    }
}