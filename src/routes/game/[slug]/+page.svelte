<script>
    export let data
    export const prerender = true;
    import { base } from '$app/paths';
</script>

<h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center">{data.metadata.title}</h2>

<iframe src={`${base}/${data.gamePath}`} title={data.metadata.title} width=1280 height=720 class="m-auto" /> 

<div class="text-center m-4">
    <a href={`${base}/${data.gamePath}`} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Full Game...</a>
</div>