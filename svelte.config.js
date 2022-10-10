import static_adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: static_adapter({
			pages:"build",
			assets:"build",
			fallback: "404.html",
		}),
		paths: {
            base: dev ? '' : '/games-2023',
			// assets: dev ? '' : '/games-2023'
        }
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	prerender: {
		crawl: true,
		enabled: true,
		force: false,
		pages: ['*']
	}
};

export default config;
