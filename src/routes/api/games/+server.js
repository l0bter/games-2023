import { json } from "@sveltejs/kit"

export const GET = async () => {
    const games = import.meta.glob('/static/games/*/info.json')
    const data = await Promise.all(Object.entries(games).map(async ([path, resolver]) => {

        const reg = /\/static\/games\/(.+)\/info\.json/
        const match = path.match(reg)

        return {
            path: "/game/" + match[1],
            gamePath: "/games/" + match[1] + "/index.html",
            slug: match[1],
            metadata: await resolver()
        }
    }))
    return json(data)
}