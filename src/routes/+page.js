export const load = async ({ fetch }) => {
    const response = await fetch(`/api/games`)
    const games = await response.json()
  
    return {
      games
    }
}