<script>
    export let data
    import { base } from '$app/paths';
</script>

<h2>{data.metadata.title}</h2>

<iframe src={`${base}/${data.gamePath}`} title={data.metadata.title} width=720 height=405 /> 

<a href={`${base}/${data.gamePath}`} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Full Game...</a>